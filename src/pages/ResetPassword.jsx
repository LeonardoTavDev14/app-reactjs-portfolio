import { useState } from "react";
import styles from "../css/Form.module.css";
import axios from "axios";
import Footer from "../components/Footer";
import Popup from "../components/Popup";
import { useNavigate } from "react-router-dom";

const ResetPassword = ({ title, description }) => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [popupMessage, setPopupMessage] = useState("");
  const [popIsVisible, setPopupVisible] = useState(false);
  const navigate = useNavigate();

  const validate = () => {
    let isValid = true;

    if (!email) {
      setEmailError("O campo e-mail é obrigatório");
      isValid = false;
    } else if (!emailRegex.test(email)) {
      setEmailError("Insira um e-mail válido");
      isValid = false;
    } else {
      setEmailError("");
    }

    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validate()) {
      try {
        const response = await axios.post(
          "http://localhost:3000/forgot-password",
          {
            email,
          }
        );
        setPopupMessage(response.data.message);
        setPopupVisible(true);
        setEmail("");
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } catch (err) {
        console.error("Erro ao solicitar redefinição de senha", err.message);
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
          </div>

          <button className={styles.button} type="submit">
            Enviar
          </button>
        </form>
      </div>

      <Footer />

      {popIsVisible && (
        <Popup message={popupMessage} onClose={() => setPopupVisible(false)} />
      )}
    </>
  );
};

export default ResetPassword;
