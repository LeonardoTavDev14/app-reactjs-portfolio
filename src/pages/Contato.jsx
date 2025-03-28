import styles from "../css/Contato.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Imagem from "../assets/imagemme.jpeg";
import JavaScript from "../assets/javascript.png";
import ReactJs from "../assets/reactjs.png";
import Typescript from "../assets/typescript.png";
import Git from "../assets/git.png";
import Python from "../assets/python.png";
import Java from "../assets/java.png";
import Flask from "../assets/flask.png";

const Contato = () => {
  return (
    <>
      <Header />

      <main className={styles.main}>
        <section className={styles.section}>
          <div className={styles.containerGeneral}>
            <div className={styles.container}>
              <div className={styles.containerOne}>
                <div className={styles.containerImage}>
                  <img src={Imagem} alt="Imagem Me" />
                </div>
                <div className={styles.containerTexts}>
                  <h2>Leonardo Tavares Arrais</h2>
                  <p>
                    <strong>Idade:</strong>21 anos
                  </p>
                  <p>
                    <strong>E-mail:</strong>contatoleonardotavdev@gmail.com
                  </p>
                  <p>
                    <strong>Curso:</strong>Engenharia de Software
                  </p>
                  <p>
                    <strong>Início:</strong>Jan/2022
                  </p>
                  <p>
                    <strong>Término:</strong>Dez/2025
                  </p>
                  <p>
                    <strong>Semestre:</strong>7º semestre
                  </p>
                </div>
              </div>
              <hr />
              <div className={styles.containerTwo}>
                <div className={styles.containerUniversidade}>
                  <h3>Universidade</h3>
                  <p>
                    <strong>UMC:</strong>Universidade de Mogi das Cruzes
                  </p>
                </div>
                <div className={styles.containerConteudos}>
                  <div>
                    <h4>1º semestre</h4>
                    <p>Software Básico</p>
                    <p>Redes e Segurança</p>
                  </div>
                  <div>
                    <h4>2º semestre</h4>
                    <p>Engenharia de Software</p>
                    <p>Banco de dados</p>
                  </div>
                  <div>
                    <h4>3º semestre</h4>
                    <p>Análise orientada aos objetos</p>
                    <p>Implementação orientada de objetos</p>
                  </div>
                  <div>
                    <h4>4º semestre</h4>
                    <p>Metodologias ágeis</p>
                    <p>Desenvolvimento de aplicações - API</p>
                  </div>
                  <div>
                    <h4>5º semestre</h4>
                    <p>Inteligência de negócios</p>
                    <p>Padrões de projeto</p>
                  </div>
                  <div>
                    <h4>6º semestre</h4>
                    <p>Gestão de projetos</p>
                    <p>Inteligência Artificial - IA</p>
                  </div>
                  <div>
                    <h4>7º semestre</h4>
                    <p>Segurança da informação</p>
                    <p>Internet das coisas - IOT</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.containerSecundary}>
              <div className={styles.containerLinguagens}>
                <div>
                  <img src={JavaScript} alt="Icon JavaScript" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Contato;
