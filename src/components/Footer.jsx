import styles from "../css/Footer.module.css";
import Instagram from "../assets/instagram.png";
import GitHub from "../assets/github.png";
import Linkedln from "../assets/linkedln.png";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.Icons}>
          <a
            href="https://www.instagram.com/leonardotavares04/"
            target="_blank"
          >
            <img src={Instagram} alt="Instagram-icon" />
          </a>
          <a
            href="https://github.com/LeonardoTavDev14?tab=repositories"
            target="_blank"
          >
            <img src={GitHub} alt="Github-icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/leonardo-tavares-245a9a25a/"
            target="_blank"
          >
            <img src={Linkedln} alt="Linkedln-icon" />
          </a>
        </div>

        <div className={styles.text}>
          <h3>Leonardo Tavares</h3>
          <p>@leonardotavares04</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
