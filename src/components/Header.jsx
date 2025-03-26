import styles from "../css/Header.module.css";
import { Link } from "react-router-dom";
import Logo from "../assets/logo-header.png";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <Link to="/inicio">
          <img src={Logo} alt="Logo-header-icon" />
        </Link>

        <nav className={styles.nav}>
          <ul>
            <li>
              <Link to="/inicio">Inicio</Link>
            </li>
            <li>
              <Link to="/projetos">Projetos</Link>
            </li>
            <li>
              <Link to="/contato">Contato</Link>
            </li>
            <li>
              <Link to="/feedback">Feedback</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
