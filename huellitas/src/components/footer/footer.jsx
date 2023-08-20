import React from "react";
import FooterLogo from "../../images/Footerlogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faClock, faMap } from "@fortawesome/free-regular-svg-icons";
import "./footer.css";
import EnviarMail from "../mail/EnviarMail";

const Footer = () => {
  return (
    <footer className="container">
      <div className="footer-divider"></div>
      <div className="row">
        {/* Columna 1: Logo y Redes Sociales */}
        <div className="col-lg-4 text-center mb-4 p-3">
          <img src={FooterLogo} alt="Logo" className="img-fluid w-50" />
          <div className="mt-3">
            <a href="#" className="btn btn-primary btn-social m-1">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#" className="btn btn-info btn-social m-1">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" className="btn btn-danger btn-social m-1">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>

        {/* Columna 2: Consultas */}

        <div className="col-lg-4 text-center mt-5  estilo-titulo4">
          <div className="row align-items-center">
            <div className="col-5 text-end reducir-margen-derecha ">
              <FontAwesomeIcon icon={faClock} className="fa-lg color-icono" />
            </div>
            <div className="col-7 text-start reducir-margen-izquierda">
              <h4 className="mt-3">
                <i className="far fa-clock text-info"></i> Consultas
              </h4>
            </div>
          </div>
          <p>
            <span className="espaciado"></span>Horarios de consulta:
          </p>
          <p>
            <span className="espaciado"></span>Lunes a Viernes: 9:00 AM - 5:00
            PM
          </p>
          <p>
            <span className="espaciado"></span>
            <EnviarMail />
          </p>
        </div>

        {/* Columna 3: Ubicación */}
        {/* Columna 3: Ubicación */}
        <div className="col-lg-4 text-center mt-5 estilo-titulo4">
          <div className="row align-items-center">
            <div className="col-5 text-end">
              <FontAwesomeIcon icon={faMap} className="fa-lg color-icono" />
            </div>
            <div className="col-7 text-start">
              <h4 className="mt-3">
                <i className="fas fa-map-marker-alt text-info"></i> Ubicación
              </h4>
            </div>
          </div>
          <p>
            <span className="espaciado"></span>Dirección: Gral. Paz 576
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
