import JSZip from "jszip";
import { saveAs } from "file-saver";
import styles from "../css/Index.module.css";

const Downloads = () => {
  const certificados = [
    {
      name: "Jornada Python.pdf",
      url: "/certificados/Certificado1.pdf",
    },

    {
      name: "Python Solyd.pdf",
      url: "/certificados/Certificado2.pdf",
    },

    {
      name: "Logica de Programação.pdf",
      url: "/certificados/Certificado3.pdf",
    },

    {
      name: "Comunicação Eficaz.pdf",
      url: "/certificados/Certificado4.pdf",
    },
  ];

  const downloadsAll = async () => {
    const zip = JSZip();
    const folder = zip.folder("Certificados");

    const allCertificados = certificados.map(async (certificado) => {
      const response = await fetch(certificado.url);
      const blob = await response.blob();
      folder.file(certificado.name, blob);
    });

    await Promise.all(allCertificados);

    zip.generateAsync({ type: "blob" }).then((content) => {
      saveAs(content, "certificados.zip");
    });
  };

  return (
    <>
      <button onClick={downloadsAll} className={styles.buttonDownload}>
        Baixar Certificados
      </button>
    </>
  );
};

export default Downloads;
