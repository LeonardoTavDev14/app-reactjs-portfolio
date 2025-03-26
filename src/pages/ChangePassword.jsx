import { useState } from "react";
import styles from "../css/Form.module.css";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Popup from "../components/Popup";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer";

const ChangePassword = ({ title, description }) => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [popIsVisible, setPopupIsVisible] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const validate = () => {
    let isValid = true;

    if (!password) {
      setPasswordError("O campo de senha é obrigatório");
      isValid = false;
    } else if (password.length < 8) {
      setPasswordError("A senha deve conter oito caracteres no minimo");
      isValid = false;
    } else {
      setPasswordError("");
    }

    if (!confirmPassword) {
      setConfirmPasswordError("O campo de confirmar a senha é obrigatório");
      isValid = false;
    } else if (password !== confirmPassword) {
      setConfirmPasswordError("As senhas não coincidem");
      isValid = false;
    } else {
      setConfirmPasswordError("");
    }

    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validate()) {
      try {
        const response = await axios.put(
          `http://localhost:3000/reset-password/${token}`,
          {
            password,
          }
        );
        setPopupMessage(response.data.message);
        setPopupIsVisible(true);
        setPassword("");
        setConfirmPassword("");
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } catch (err) {
        console.error("Erro ao mudar a senha", err.message);
        setPopupMessage(err.response.data.message);
        setPopupIsVisible(true);
      }
    }
  };

  return (
    <>
      <div className={styles.container}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.text}>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>

          <div className={styles.formWrapper}>
            <div className={styles.formGroup}>
              <label htmlFor="password">Senha</label>
              <div className={styles.passwordContainer}>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Digite sua nova senha aqui"
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

            <div className={styles.formGroup}>
              <label htmlFor="confirmPassword">Confirmar Senha</label>
              <div className={styles.passwordContainer}>
                <input
                  type={showPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirme sua senha aqui"
                  style={{ borderColor: confirmPasswordError ? "red" : "#ccc" }}
                />
                <span
                  className={styles.passwordSpan}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </span>
              </div>
              {confirmPasswordError && (
                <span className={styles.error}>{confirmPasswordError}</span>
              )}
            </div>
          </div>

          <button className={styles.button} type="submit">
            Redefinir
          </button>
        </form>
      </div>

      <Footer />

      {popIsVisible && (
        <Popup
          message={popupMessage}
          onClose={() => setPopupIsVisible(false)}
        />
      )}
    </>
  );
};

export default ChangePassword;
