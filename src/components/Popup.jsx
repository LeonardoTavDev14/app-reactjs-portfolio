import styles from "../css/Popup.module.css";

const Popup = ({ message, onClose }) => {
  return (
    <>
      <div className={styles.PopupOverlay}>
        <div className={styles.Popup}>
          <p>{message}</p>
          <button onClick={onClose}>Fechar</button>
        </div>
      </div>
    </>
  );
};

export default Popup;
