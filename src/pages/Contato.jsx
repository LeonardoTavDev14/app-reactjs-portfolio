import styles from "../css/Contato.module.css";
import Footer from "../components/Footer";
import Imagem from "../assets/imagemme.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import { faPython } from "@fortawesome/free-brands-svg-icons";
import { faJava } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faGit } from "@fortawesome/free-brands-svg-icons";
import { faSquare } from "@fortawesome/free-solid-svg-icons";
import { faArrowsTurnToDots } from "@fortawesome/free-solid-svg-icons";
import { faCarrot } from "@fortawesome/free-solid-svg-icons";
import { faT } from "@fortawesome/free-solid-svg-icons";

const Contato = () => {
  return (
    <>
      <main>
        <section className={styles.sectionContato}>
          <div className={styles.containerGeral}>
            <div className={styles.containerImagesInfos}>
              <div className={styles.containerImg}>
                <img src={Imagem} alt="Imagem me" />
              </div>
              <div className={styles.containerInfo}>
                <h2>Leonardo Tavares Arrais</h2>
                <p>
                  <strong>Idade: </strong>21 anos
                </p>
                <p>
                  <strong>E-mail: </strong>contatoleonardotavdev@gmail.com
                </p>
                <p>
                  <strong>Curso: </strong>Engenharia de Software
                </p>
                <p>
                  <strong>Semestre: </strong>7º semestre
                </p>
                <p>
                  <strong>Início: </strong>Jan/2022
                </p>
                <p>
                  <strong>Término: </strong>Dez/2025
                </p>
              </div>
            </div>
            <hr />
            <div className={styles.containerFaculdadeSemestres}>
              <div className={styles.containerFaculdade}>
                <h3>Universidade</h3>
                <p>
                  <strong>UMC: </strong>Universidade de Mogi das Cruzes
                </p>
              </div>
              <div className={styles.containerSemestres}>
                <div>
                  <h4>1º semestre</h4>
                  <p>Software básico</p>
                  <p>Redes e segurança</p>
                </div>
                <div>
                  <h4>2º semestre</h4>
                  <p>Engenharia de software</p>
                  <p>Banco de dados</p>
                </div>
                <div>
                  <h4>3º semestre</h4>
                  <p>Análise orientada aos objetos</p>
                  <p>Implementação orientada do objeto</p>
                </div>
                <div>
                  <h4>4º semestre</h4>
                  <p>Metodologias ágeis</p>
                  <p>Desenvolvimento de aplicações</p>
                </div>
                <div>
                  <h4>5º semestre</h4>
                  <p>Inteligência de negócios</p>
                  <p>Padrões de projeto</p>
                </div>
                <div>
                  <h4>6º semestre</h4>
                  <p>Gestão de projetos</p>
                  <p>Inteligência artificial - IA</p>
                </div>
                <div>
                  <h4>7º semestre</h4>
                  <p>Internet das coisas - IOT</p>
                  <p>Segurança da informação</p>
                </div>
              </div>
            </div>
            <div className={styles.containerConhecimentosGerais}>
              <div className={styles.containerLinguagens}>
                <h3>Linguagens</h3>
                <div>
                  <div>
                    <FontAwesomeIcon
                      icon={faJs}
                      size="3x"
                      border="2px solid #000"
                      color="#000"
                    />
                  </div>
                  <div>
                    <FontAwesomeIcon
                      icon={faT}
                      size="3x"
                      border="2px solid #000"
                      color="#000"
                    />
                  </div>
                  <div>
                    <FontAwesomeIcon
                      icon={faPython}
                      size="3x"
                      border="2px solid #000"
                      color="#000"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.containerFrameworks}>
                <h3>Frameworks</h3>
                <div>
                  <div>
                    <FontAwesomeIcon
                      icon={faReact}
                      size="3x"
                      border="2px solid #000"
                      color="#000"
                    />
                  </div>
                  <div>
                    <FontAwesomeIcon
                      icon={faCarrot}
                      size="3x"
                      border="2px solid #000"
                      color="#000"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.containerPrevios}>
                <h3>Conhecimentos prévios</h3>
                <div>
                  <div>
                    <FontAwesomeIcon
                      icon={faJava}
                      size="3x"
                      border="2px solid #000"
                      color="#000"
                    />
                  </div>
                  <div>
                    <FontAwesomeIcon
                      icon={faGit}
                      size="3x"
                      border="2px solid #000"
                      color="#000"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.containerExtras}>
                <h3>Extras</h3>
                <div>
                  <div>
                    <FontAwesomeIcon
                      icon={faArrowsTurnToDots}
                      size="3x"
                      border="2px solid #000"
                      color="#000"
                    />
                  </div>
                  <div>
                    <FontAwesomeIcon
                      icon={faSquare}
                      size="3x"
                      border="2px solid #000"
                      color="#000"
                    />
                  </div>
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
