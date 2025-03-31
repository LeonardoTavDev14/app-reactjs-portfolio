import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../css/Index.module.css";
import { Link } from "react-router-dom";
import Video from "../essentials/myMidiasSocials.mp4";
import VideoPlayer from "../components/VideoPlayer";
import HashTag from "../assets/hashtag.png";
import Solyd from "../assets/solyd.png";
import Downloads from "../components/DownloadCertificates";

const Index = () => {
  return (
    <>
      <Header />
      <main>
        <section className={styles.sectionPort}>
          <div className={styles.containerPort}>
            <div className={styles.itemsPort}>
              <h1>Portfolio</h1>
              <p>
                Saudações! Sou estudante do 7º semestre do curso de Engenharia
                de Software, com grande interesse por tecnologia e
                desenvolvimento de software. Atualmente, estou em busca da minha
                primeira oportunidade profissional como desenvolvedor, com
                ênfase em JavaScript, React.js e desenvolvimento Back-end
                utilizando Node.js.
              </p>
            </div>

            <div className={styles.containerVideoPort}>
              <VideoPlayer
                videoSrc={Video}
                thumbnailSrc="https://img.freepik.com/fotos-premium/fundo-de-tecnologia-abstrata-de-codigo-de-programacao-do-desenvolvedor-de-software-e-script-de-computador_34663-31.jpg?semt=ais_hybrid"
                title=""
              />
            </div>
          </div>
        </section>

        <section className={styles.sectionObjetivo}>
          <div className={styles.containerObjetivos}>
            <h2>Objetivos</h2>
            <div>
              <ul>
                <li>
                  Crescer na área de desenvolvimento, contribuindo para projetos
                  inovadores e aprendendo cada vez mais.
                </li>
                <li>
                  Aprimorar meus conhecimentos e desenvolver projetos para
                  consolidar minha experiência. No momento, trabalho em uma API
                  segura com Express, MySQL ou MongoDB, aplicando boas práticas
                  de segurança e autenticação.
                </li>
                <li>
                  Adquirir soft skills no ambiente de trabalho para entender e
                  me integrar a uma equipe de desenvolvimento.
                </li>
                <li>
                  Entender na prática o processo de desenvolvimento, aplicando
                  as metodologias utilizadas pelas empresas do mercado.
                </li>
                <li>Lidar com situações adversas da área.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className={styles.sectionProjeto}>
          <div className={styles.containerItems}>
            <div className={styles.items}>
              <h2>Experiências acadêmicas</h2>
              <p>
                Projetos implementados com o auxílio técnico de professores do
                curso.
              </p>
            </div>
            <div className={styles.containerDescription}>
              <div className={styles.containerProjeto}>
                <h3>Sistema CRUD</h3>
                <p>
                  Neste projeto, utilizamos os padrões de projeto MVC e DAO para
                  a implementação do CRUD (Create, Read, Update, Delete,
                  ReadById)
                </p>
                <h4>Linguagens</h4>
                <p>Back-end - Java</p>
                <p>Front-end - Implementado com HTML, CSS puro</p>
                <h4>Professor Auxiliar</h4>
                <p>Pedro Toledo</p>
                <Link to="/projetos">Saiba mais</Link>
              </div>
              <div className={styles.containerProjeto}>
                <h3>Sistema Fullstack e segurança de dados</h3>
                <p>
                  Neste sistema, implementamos um CRUD com Express utilizando
                  TypeScript, incluindo processos de segurança como autenticação
                  e hashing de senhas.
                </p>
                <h4>Linguagens</h4>
                <p>Back-end - TypeScript</p>
                <p>Front-end - JavaScript</p>
                <h4>Professor Auxiliar</h4>
                <p>Fabio Codô</p>
                <Link to="/projetos">Saiba mais</Link>
              </div>
              <div className={styles.containerProjeto}>
                <h3>Sistema CRUD com Padrões de Projetos</h3>
                <p>
                  Aqui, implementamos um CRUD utilizando padrões de projeto como
                  Builder, Factory, Decorator, Command, entre outros, com foco
                  principal na aplicação desses padrões.
                </p>
                <h4>Linguagens</h4>
                <p>Back-end - Java</p>
                <p>Front-end - Implementado com HTML, CSS puro</p>
                <h4>Professor Auxiliar</h4>
                <p>Pedro Toledo</p>
                <Link to="/projetos">Saiba mais</Link>
              </div>
              <div className={styles.containerProjeto}>
                <h3>
                  Criação de uma IA para previsão de posições de jogadores de
                  futebol.
                </h3>
                <p>
                  No 6º semestre, criamos uma IA que previa as posições dos
                  jogadores usando o banco de dados do FIFA 14, analisando seus
                  atributos e classificando as posições em que atuavam.
                </p>
                <h4>Linguagens</h4>
                <p>Back-end - Python</p>
                <p>Front-end - Não implementado</p>
                <h4>Professor Auxiliar</h4>
                <p>Fabiano Menegidio</p>
                <Link to="/projetos">Saiba mais</Link>
              </div>
              <div className={styles.containerProjeto}>
                <h3>Sistema Fullstack de Mensagens com Criptografia</h3>
                <p>
                  Neste projeto, foi desenvolvido um sistema de cadastro, login
                  e criptografia de mensagens, permitindo que apenas o
                  destinatário visualize as mensagens enviadas.
                </p>
                <h4>Linguagens</h4>
                <p>Back-end - Python</p>
                <p>Front-end - ReactJs (JSX)</p>
                <h4>Professor Auxiliar</h4>
                <p>Fabiano Menegidio</p>
                <Link to="/projetos">Saiba mais</Link>
              </div>
              <div className={styles.containerProjeto}>
                <h3>Sistema Doação de Alimentos por meio de Restaurantes</h3>
                <p>
                  Projeto implementado para testarmos nosso aprendizado de
                  Gestão de Projetos, onde elaboramos a documentação do sistema
                  e o protótipo utilizando ReactJS (JSX).
                </p>
                <h4>Linguagens</h4>
                <p>Back-end - Não implementado</p>
                <p>Front-end - ReactJs (JSX)</p>
                <h4>Professor Auxiliar</h4>
                <p>Renato Mauro</p>
                <Link to="/projetos">Saiba mais</Link>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.sectionMe}>
          <div className={styles.containerMe}>
            <h2>Sobre mim</h2>
            <p>Informações pessoais</p>
            <div>
              <ul>
                <li>
                  <strong>Nome:</strong> Leonardo Tavares
                </li>
                <li>
                  <strong>Idade:</strong> 21 anos
                </li>
                <li>
                  <strong>Curso:</strong> Engenharia de Software
                </li>
                <li>
                  <strong>Semestre:</strong> 7º semestre
                </li>
                <li>
                  <strong>Início:</strong> Jan/2022
                </li>
                <li>
                  <strong>Término:</strong> Dez/2025
                </li>
                <li>
                  <strong>E-mail:</strong> contatoleonardotavdev@gmail.com
                </li>
              </ul>
              <p style={{ marginTop: "10px" }}>
                Para mais informações{" "}
                <Link to="/contato" aria-label="Acesse a página de contato">
                  clique aqui
                </Link>
              </p>
            </div>
          </div>
        </section>

        <section className={styles.sectionCourses}>
          <div className={styles.containerCourses}>
            <div className={styles.titleCourses}>
              <h2>Certificados e Cursos</h2>
              <p>
                Caso queira verificar a veracidade dos cursos listados, baixe os
                certificados abaixo.
              </p>
            </div>
            <div className={styles.groupCourses}>
              <div className={styles.group}>
                <img src={HashTag} alt="Icon Hashtag Treinamentos" />
                <p>Jornada Python </p>
              </div>
              <div className={styles.group}>
                <img
                  style={{ width: "90px" }}
                  src={Solyd}
                  alt="Icon Solyd Security"
                />
                <p>Python Solyd Security </p>
              </div>
              <div className={styles.group}>
                <img src={HashTag} alt="Icon Hashtag Treinamentos" />
                <p>Comunicação Eficaz </p>
              </div>
              <div className={styles.group}>
                <img src={HashTag} alt="Icon Hashtag Treinamentos" />
                <p>Logica de Programação </p>
              </div>
              <div
                style={{ border: "2px solid #ccc" }}
                className={styles.group}
              >
                <p>JavaScript - cursando atualmente (desde 2023)</p>
              </div>
            </div>
          </div>
          <div className={styles.containerItemsFooter}>
            <p>
              Para visualizar informações detalhadas, faça o download do arquivo
              abaixo.
            </p>
            <Downloads />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Index;
