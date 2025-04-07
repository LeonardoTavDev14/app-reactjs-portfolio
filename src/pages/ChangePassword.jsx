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
  const [passwordValidation, setPasswordValidation] = useState({
    length: false,
    upper: false,
    lower: false,
    number: false,
    special: false,
  });

  const passwordValidations = (password) => ({
    length: password.length >= 8,
    upper: /[A-Z]/.test(password),
    lower: /[a-z]/.test(password),
    number: /[0-9]/.test(password),
    special: /[#?!@$%^&*-]/.test(password),
  });

  const validate = () => {
    let isValid = true;

    const validations = passwordValidations(password);
    setPasswordValidation(validations);
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
          `${import.meta.env.VITE_URLCHANGEPASSWORD}/${token}`,
          {
            password,
          }
        );
        setPopupMessage(response.data.message);
        setPopupIsVisible(true);
        setPassword("");
        setConfirmPassword("");
        setPasswordValidation(passwordValidations(""));

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
              <label htmlFor="password">Nova Senha</label>
              <div className={styles.passwordContainer}>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => {
                    const passwordChange = e.target.value;
                    setPassword(passwordChange);
                    setPasswordValidation(passwordValidations(passwordChange));
                  }}
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
              <label htmlFor="confirmPassword">Confirmar sua Nova Senha</label>
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

            <div className={styles.containerSenha}>
              <p>A senha deve conter:</p>
              <ul className={styles.passwordCheck}>
                <li
                  style={{
                    color: passwordValidation.length ? "green" : "red",
                  }}
                >
                  {passwordValidation.length ? "✔️" : "❌"} No minimo 8
                  caracteres
                </li>
                <li
                  style={{
                    color: passwordValidation.upper ? "green" : "red",
                  }}
                >
                  {passwordValidation.upper ? "✔️" : "❌"} Uma letra maiúscula
                </li>
                <li
                  style={{
                    color: passwordValidation.lower ? "green" : "red",
                  }}
                >
                  {passwordValidation.lower ? "✔️" : "❌"} Uma letra minúscula
                </li>
                <li
                  style={{
                    color: passwordValidation.number ? "green" : "red",
                  }}
                >
                  {passwordValidation.number ? "✔️" : "❌"} Um número
                </li>
                <li
                  style={{
                    color: passwordValidation.special ? "green" : "red",
                  }}
                >
                  {passwordValidation.special ? "✔️" : "❌"} Um caracter
                  especial
                </li>
              </ul>
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
