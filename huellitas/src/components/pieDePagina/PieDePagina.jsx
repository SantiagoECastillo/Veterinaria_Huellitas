import "./estiloFooter.css";
import React, { useState } from "react";
import FooterLogo from "../../images/footerLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faFacebook, faXTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faClock, faMap, } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { faCode } from "@fortawesome/free-solid-svg-icons";
// agregar import de componente sobrenosotros

const PieDePagina = () => {

  const navigate = useNavigate();

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
    <footer className="containerFooter">
      <div className="footer-divider"></div>
      <div className="row">

        {/* Parte izquierda */}
        <div className="col-md-4 mt-3 mt-md-5 mt-lg-1 text-center">
          <div
            className="estilo-link fw-bold"
            onClick={() => navigate('/error404')}
          >
            <img src={FooterLogo} alt="Logo" className="img-fluid w-50" />
          </div>
          <div className="mt-3">
            <div
              className="btn btn-success m-1 estilo-link"
              onClick={() => navigate('/error404')}
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </div>

            <div
              className="btn btn-success m-1 estilo-link"
              onClick={() => navigate('/error404')}
            >
              <FontAwesomeIcon icon={faFacebook} />
            </div>
            <div
              className="btn btn-success m-1 estilo-link"
              onClick={() => navigate('/error404')}
            >
              <FontAwesomeIcon icon={faXTwitter} />
            </div>
            <div
              className="btn btn-success m-1 estilo-link"
              onClick={() => navigate('/error404')}
            >
              <FontAwesomeIcon icon={faInstagram} />
            </div>
          </div>
        </div>

        {/* Parte central */}

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
          <p>Horarios de consulta:</p>
          <p>Lunes a Viernes: 8:00 - 17:00</p>
          <p>Sábados: 9:00 - 13:00</p>
          <p className="mt-3 ">Teléfono de contacto:</p>
          <p className="mb-3">381-534-2027</p>
          <div
            className="estilo-link fw-bold botonContactanos"
            onClick={() => window.location.href = "/ruta-de-contacto"}
            style={{ cursor: "pointer" }}
          >
            Contactanos
          </div>


        </div>

        {/* Parte derecha */}
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
          <p>San Miguel de Tucumán:</p>
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
          <FontAwesomeIcon
            icon={faCode}
            className="fa-lg color-icono mt-3"
          />
          <div className="mb-2">
            <h4 >Acerca de</h4>
          </div>
          <div
            className="estilo-link fw-bold"
            onClick={() => window.location.href = "/ruta-de-contacto"}
            style={{ cursor: "pointer" }}
          >
            Sobre Nosotros
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PieDePagina;
