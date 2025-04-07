import { useState } from "react";
import axios from "axios";
import styles from "../css/Form.module.css";
import Popup from "../components/Popup";
import Footer from "../components/Footer";

const Feedback = ({ title, description }) => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nomeError, setNomeError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [popIsVisible, setPopupVisible] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validate = () => {
    let isValid = true;

    if (!nome) {
      setNomeError("O campo de nome é obrigatório");
      isValid = false;
    } else if (nome.length < 3) {
      setNomeError("Insira um nome válido");
      isValid = false;
    } else {
      setNomeError("");
    }

    if (!email) {
      setEmailError("O campo e-mail é obrigatório");
      isValid = false;
    } else if (!emailRegex.test(email)) {
      setEmailError("Insira um e-mail válido");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (!message) {
      setMessageError("O campo de mensagem é obrigatório");
      isValid = false;
    } else if (message.length > 255) {
      setMessageError("Limite de caracteres excedido");
      isValid = false;
    } else {
      setMessageError("");
    }

    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validate()) {
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_URLFEEDBACK}`,
          {
            nome,
            email,
            message,
          }
        );

        setPopupMessage(response.data.message);
        setPopupVisible(true);
        setNome("");
        setEmail("");
        setMessage("");
      } catch (err) {
        console.error("Erro ao enviar o feedback", err.message);
        setPopupMessage(err.response.data.message);
        setPopupVisible(true);
      }
    }
  };

  return (
    <>
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.text}>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
          <div className={styles.formWrapper}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Nome</label>
              <input
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Digite o seu nome aqui"
                style={{ borderColor: nomeError ? "red" : "#ccc" }}
              />
              {nomeError && <span className={styles.error}>{nomeError}</span>}
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Digite o seu e-mail aqui"
                style={{ borderColor: emailError ? "red" : "#ccc" }}
              />
              {emailError && <span className={styles.error}>{emailError}</span>}
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">Mensagem</label>
              <textarea
                className={styles.textarea}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Digite a sua critica aqui"
                cols="30"
                rows="10"
                style={{ borderColor: messageError ? "red" : "#ccc" }}
              ></textarea>
              {messageError && (
                <span className={styles.error}>{messageError}</span>
              )}
            </div>
            <button className={styles.button} type="submit">
              Enviar
            </button>
          </div>
        </form>
      </div>

      <Footer />

      {popIsVisible && (
        <Popup message={popupMessage} onClose={() => setPopupVisible(false)} />
      )}
    </>
  );
};

export default Feedback;
