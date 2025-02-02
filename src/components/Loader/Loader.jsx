import "./Loader.css";
import loaderLogo from "../../assets/loaderLogo.png";

const Loader = () => {
  return (
    <div className="loader-container">
      <img src={loaderLogo} alt="Logo" className="loader-logo" />
    </div>
  );
};

export default Loader;
