import React, { useState } from "react";
import FooterLogo from "../../images/footerLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faFacebook,
  faXTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import { faClock, faMap } from "@fortawesome/free-regular-svg-icons";
import "./footer.css";
import { useNavigate } from "react-router-dom";
import EnviarMail from "../mail/EnviarMail";
import { Modal, Button } from "react-bootstrap";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Footer = () => {
  const navigate = useNavigate();

  const redirigirAError404 = () => {
    navigate("/error404");
  };

  const redirigirAInicio = () => {
    navigate("/");
  };

  const [mostrarModalMapa, setMostrarModalMapa] = useState(false);

  const ubicacion = {
    latitud: -26.836284,
    longitud: -65.207147,
    nombre: "Dirección: Gral. Paz 576",
  };

  const abrirModalMapa = () => {
    setMostrarModalMapa(true);
  };

  return (
    <footer className="container">
      <div className="footer-divider"></div>
      <div className="row">
        <div className="col-md-4 text-center p-3">
          <a href="/" onClick={redirigirAInicio}>
            <img src={FooterLogo} alt="Logo" className="img-fluid w-50" />
          </a>
          <div className="mt-3">
          <a
          href="#"
          className="btn btn-success m-1"
          onClick={redirigirAError404}
        >
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
            <a
              href="#"
              className="btn btn-primary m-1"
              onClick={redirigirAError404}
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="#"
              className="btn btn-dark m-1"
              onClick={redirigirAError404}
            >
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
            <a
              href="#"
              className="btn btn-danger btn-social m-1"
              onClick={redirigirAError404}
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>

        <div className="col-md-4 text-center estilo-titulo4">
          <div className="row align-items-center">
            <div className="col-12 text-center">
              <FontAwesomeIcon
                icon={faClock}
                className="fa-lg color-icono mt-md-3"
              />
            </div>
            <div className="col-12 text-center">
              <h4 className="mb-3">
                <i className="far fa-clock text-info"></i> Consultas
              </h4>
            </div>
          </div>
          <p className="cursiva">Horarios de consulta:</p>
          <p>Lunes a Viernes: 8:00 - 17:00</p>
          <p>Sábados: 9:00 - 13:00</p>
          <p className="mt-3 cursiva">Teléfono de contacto:</p>
          <p className="mb-3">381-534-2027</p>
          <p className="estilo-link fw-bold">
            <EnviarMail />
          </p>
        </div>
        <div className="col-md-4 text-center estilo-titulo4">
          <div className="row align-items-center">
            <div className="col-12 text-center">
              <FontAwesomeIcon
                icon={faMap}
                className="fa-lg color-icono mt-md-3"
              />
            </div>
            <div className="col-12 text-center">
              <h4 className="mb-3">
                <i className="fas fa-map-marker-alt text-info"></i> Ubicación
              </h4>
            </div>
          </div>
          <p className="estilo-link fw-bold" onClick={abrirModalMapa}>
            {ubicacion.nombre}
          </p>
          <Modal
            show={mostrarModalMapa}
            onHide={() => setMostrarModalMapa(false)}
          >
            <Modal.Header closeButton>
              <Modal.Title className="negrita">Ubicación</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <MapContainer
                center={[ubicacion.latitud, ubicacion.longitud]}
                zoom={15}
                style={{ height: "400px", width: "100%" }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={[ubicacion.latitud, ubicacion.longitud]}>
                  <Popup>{ubicacion.nombre}</Popup>
                </Marker>
              </MapContainer>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="primary btn-info rounded-pill fw-bold"
                onClick={() => setMostrarModalMapa(false)}
              >
                CERRAR
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </footer>
  );
};

export default Footer;