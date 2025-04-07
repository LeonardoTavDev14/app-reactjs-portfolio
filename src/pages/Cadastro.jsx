import { useState } from "react";
import styles from "../css/Form.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Popup from "../components/Popup";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Cadastro = ({ title, description }) => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nomeError, setNomeError] = useState("");
  const [popupIsVisible, setPopupIsVisible] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const navigate = useNavigate();
  const [passwordValidations, setPasswordValidations] = useState({
    length: false,
    upper: false,
    lower: false,
    number: false,
    special: false,
  });

  const passwordValidation = (password) => ({
    length: password.length >= 8,
    upper: /[A-Z]/.test(password),
    lower: /[a-z]/.test(password),
    number: /[0-9]/.test(password),
    special: /[#?!@$%^&*-]/.test(password),
  });

  const validate = () => {
    let isValid = true;

    if (!nome) {
      setNomeError("O campo nome é obrigatório");
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

    const validations = passwordValidation(password);
    setPasswordValidations(validations);
    const isPasswordValid = Object.values(validations).every(Boolean);

    if (!password) {
      setPasswordError("O campo de senha é obrigatório");
      isValid = false;
    } else if (!isPasswordValid) {
      setPasswordError("A senha não atende os requisitos abaixo");
      isValid = false;
    } else {
      setPasswordError("");
    }

    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validate()) {
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_URLCADASTRO}`,
          {
            nome,
            email,
            password,
          }
        );
        setPopupMessage(response.data.message);
        setPopupIsVisible(true);
        setNome("");
        setEmail("");
        setPassword("");
        setPasswordValidations(passwordValidation(""));
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } catch (err) {
        console.error("Erro ao cadastrar usuário", err.message);
        setPopupMessage(err.response.data.message);
        setPopupIsVisible(true);
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
              <label htmlFor="password">Senha</label>
              <div className={styles.passwordContainer}>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => {
                    const passwordOnChange = e.target.value;
                    setPassword(passwordOnChange);
                    setPasswordValidations(
                      passwordValidation(passwordOnChange)
                    );
                  }}
                  placeholder="Digite a sua senha aqui"
                  style={{ borderColor: passwordError ? "red" : "#ccc" }}
                />
                <span
                  className={styles.passwordSpan}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </span>
              </div>
              {passwordError && (
                <span className={styles.error}>{passwordError}</span>
              )}
              <div className={styles.containerSenha}>
                <p>A senha deve conter:</p>
                <ul className={styles.passwordCheck}>
                  <li
                    style={{
                      color: passwordValidations.length ? "green" : "red",
                    }}
                  >
                    {passwordValidations.length ? "✔️" : "❌"} No minimo 8
                    caracteres
                  </li>
                  <li
                    style={{
                      color: passwordValidations.upper ? "green" : "red",
                    }}
                  >
                    {passwordValidations.upper ? "✔️" : "❌"} Uma letra
                    maiúscula
                  </li>
                  <li
                    style={{
                      color: passwordValidations.lower ? "green" : "red",
                    }}
                  >
                    {passwordValidations.lower ? "✔️" : "❌"} Uma letra
                    minúscula
                  </li>
                  <li
                    style={{
                      color: passwordValidations.number ? "green" : "red",
                    }}
                  >
                    {passwordValidations.number ? "✔️" : "❌"} Um número
                  </li>
                  <li
                    style={{
                      color: passwordValidations.special ? "green" : "red",
                    }}
                  >
                    {passwordValidations.special ? "✔️" : "❌"} Um caracter
                    especial
                  </li>
                </ul>
              </div>
            </div>

            <button className={styles.button} type="submit">
              Cadastrar
            </button>
            <Link className={styles.link} to="/login">
              Já tem conta? Entrar
            </Link>
          </div>
        </form>
      </div>

      <Footer />
      {popupIsVisible && (
        <Popup
          message={popupMessage}
          onClose={() => setPopupIsVisible(false)}
        />
      )}
    </>
  );
};

export default Cadastro;
