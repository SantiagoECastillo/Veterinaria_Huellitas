import React from "react";
import FooterLogo from "../../images/Footerlogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faXTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faClock, faMap } from "@fortawesome/free-regular-svg-icons";
import "./footer.css";
import EnviarMail from "../mail/EnviarMail";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Footer = () => {
  const [showMapModal, setShowMapModal] = useState(false);

  const location = {
    lat: -26.836284,
    lng: -65.207147,
    name: "Dirección: Gral. Paz 576", // Cambia esto con tu dirección
  };

  const openMapModal = () => {
    setShowMapModal(true);
  };

  return (
    <footer className="container">
      <div className="footer-divider"></div>
      <div className="row">
        <div className="col-md-4 text-center mb-4 p-3">
          <img src={FooterLogo} alt="Logo" className="img-fluid w-50" />
          <div className="mt-3">
            <a href="#" className="btn btn-primary btn-social m-1">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#" className="btn btn-dark btn-social m-1">
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
            <a href="#" className="btn btn-danger btn-social m-1">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>

        <div className="col-md-4 text-center mt-lg-5  estilo-titulo4">
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
        <div className="col-md-4 text-center mt-lg-5 estilo-titulo4">
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
          <p onClick={openMapModal} style={{ cursor: "pointer" }}>
            <span className="espaciado"></span>Dirección: Gral. Paz 576
          </p>
          <Modal show={showMapModal} onHide={() => setShowMapModal(false)}>
  <Modal.Header closeButton>
    <Modal.Title>Ubicación</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <MapContainer center={[location.lat, location.lng]} zoom={15} style={{ height: "400px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[location.lat, location.lng]}>
        <Popup>{location.name}</Popup>
      </Marker>
    </MapContainer>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={() => setShowMapModal(false)}>
      Cerrar
    </Button>
  </Modal.Footer>
</Modal>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
