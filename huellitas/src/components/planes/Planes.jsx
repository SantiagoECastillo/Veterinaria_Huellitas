import Accordion from 'react-bootstrap/Accordion';


<h1>Nuestros planes</h1>

function Planes() {
  return (
    <Accordion> 
      <Accordion.Item eventKey="0">
        <Accordion.Header>Plan Básico</Accordion.Header>
        <Accordion.Body>
        Ofrece servicios esenciales como exámenes anuales, vacunas y desparasitación para el cuidado fundamental de tu mascota.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Plan Intermedio</Accordion.Header>
        <Accordion.Body>
        Incluye atención básica más servicios adicionales como análisis de sangre y consultas ilimitadas para un cuidado más completo.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Plan Completo</Accordion.Header>
        <Accordion.Body>
        Incluye atención básica más servicios adicionales como análisis de sangre y consultas ilimitadas para un cuidado más completo.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Planes;