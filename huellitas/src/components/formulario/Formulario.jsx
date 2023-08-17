import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function Formulario() {
  const [informacionDueño, setInfoDueño] = useState({
    nombreDueño: "",
    emailDueño: "",
    telefonoDueño: "",
  });

  const [infoMascota, setMascotaInfo] = useState({
    nombreMascota: "",
    tipoDeMascota: "",
    edadMascota: "",
  });

  const handleDueñoInputChange = (event) => {
    const { name, value } = event.target;
    setInfoDueño({
      ...informacionDueño,
      [name]: value,
    });
  };

  const handleMascotaInputChange = (event) => {
    const { name, value } = event.target;
    setMascotaInfo({
      ...infoMascota,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      informacionDueño.nombreDueño.trim() === "" ||
      !informacionDueño.emailDueño.match(
        /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/
      ) ||
      !informacionDueño.telefonoDueño.match(/^\d{10}$/) ||
      infoMascota.nombreMascota.trim() === "" ||
      infoMascota.tipoDeMascota.trim() === "" ||
      !Number.isInteger(parseInt(infoMascota.edadMascota)) ||
      parseInt(infoMascota.edadMascota) <= 0
    ) {
      alert("Por favor, complete todos los campos correctamente.");
    } else {
      alert("Los datos se enviaron correctamente.")
      console.log("Información del dueño:", informacionDueño);
      console.log("Información de la mascota:", infoMascota);
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <div className="border rounded p-4">
            <h1 className="text-center">Contactanos!</h1>
            <Form onSubmit={handleSubmit}>
              <h2>Información del Dueño</h2>
              <Form.Group controlId="nombreDueño">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  name="nombreDueño"
                  value={informacionDueño.nombreDueño}
                  onChange={handleDueñoInputChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="emailDueño">
                <Form.Label>Correo Electrónico</Form.Label>
                <Form.Control
                  type="email"
                  name="emailDueño"
                  value={informacionDueño.emailDueño}
                  onChange={handleDueñoInputChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="telefonoDueño">
                <Form.Label>Teléfono</Form.Label>
                <Form.Control
                  type="tel"
                  name="telefonoDueño"
                  value={informacionDueño.telefonoDueño}
                  onChange={handleDueñoInputChange}
                  required
                />
              </Form.Group>

              <h2>Información de la mascota</h2>
              <Form.Group controlId="nombreMascota">
                <Form.Label>Nombre de la Mascota</Form.Label>
                <Form.Control
                  type="text"
                  name="nombreMascota"
                  value={infoMascota.nombreMascota}
                  onChange={handleMascotaInputChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="tipoDeMascota">
                <Form.Label>Tipo de Mascota</Form.Label>
                <Form.Control
                  type="text"
                  name="tipoDeMascota"
                  value={infoMascota.tipoDeMascota}
                  onChange={handleMascotaInputChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="edadMascota">
                <Form.Label>Edad de la Mascota</Form.Label>
                <Form.Control
                  type="number"
                  name="edadMascota"
                  value={infoMascota.edadMascota}
                  onChange={handleMascotaInputChange}
                  required
                />
              </Form.Group>
              <div className="d-flex align-items-center justify-content-center">
                <Button variant="primary" type="submit">
                  Enviar
                </Button>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Formulario;
