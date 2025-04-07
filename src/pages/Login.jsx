import styles from "../css/Form.module.css";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Popup from "../components/Popup";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Login = ({ title, description }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [popupIsVisible, setPopupIsVisible] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validate = () => {
    let isValid = true;

    if (!email) {
      setEmailError("O campo e-mail é obrigatório");
      isValid = false;
    } else if (!emailRegex.test(email)) {
      setEmailError("Insira um e-mail válido");
      isValid = false;
    }

    if (!password) {
      setPasswordError("O campo de senha é obrigatório");
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
        const response = await axios.post(`${import.meta.env.VITE_URLLOGIN}`, {
          email,
          password,
        });
        Cookies.set("token", response.data.token);
        setEmail("");
        setPassword("");
        setTimeout(() => {
          navigate("/inicio");
        }, 2000);
      } catch (err) {
        console.error("Erro ao logar com o usuário", err.message);
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
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Digite o sua senha aqui"
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
            </div>

            <button className={styles.button} type="submit">
              Logar
            </button>
            <div className={styles.containerLink}>
              <Link className={styles.link} to="/">
                Não tem conta? Cadastrar
              </Link>
              <Link className={styles.link} to="/forgot-password">
                Esqueceu sua senha?
              </Link>
            </div>
          </div>
        </form>
        {popupIsVisible && (
          <Popup
            message={popupMessage}
            onClose={() => setPopupIsVisible(false)}
          />
        )}
      </div>

      <Footer />
    </>
  );
};

export default Login;
