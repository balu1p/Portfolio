import FileSaver from "file-saver";
import "../App.css";

const DownloadCv = () => {
  const downloadCV = () => {
    FileSaver.saveAs("http://localhost:3000/Resume.pdf", "Resume.pdf");
  };

  return (
    <div className="mt-4">
      <button className="btn-custom" onClick={downloadCV}>
        Download CV
      </button>
    </div>
  );
};

export default DownloadCv;
