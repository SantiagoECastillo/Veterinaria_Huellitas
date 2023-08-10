import Accordion from 'react-bootstrap/Accordion';
import './planes.css';
import Button from 'react-bootstrap/Button';


function Planes() {
  return (
    <div className='planesContainer'>
      <h1 className="tituloPlanes">Nuestros planes</h1>
      <Accordion className='estiloPlanes'>
        <Accordion.Item eventKey="0" className='estiloPlan'>
          <Accordion.Header className='tituloPlan'>Primeros pasos</Accordion.Header>
          <Accordion.Body>
            Ofrece servicios esenciales como exámenes anuales, vacunas y desparasitación para el cuidado fundamental de tu mascota.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1" className='estiloPlan'>
          <Accordion.Header className='tituloPlan'>Madurando</Accordion.Header>
          <Accordion.Body>
            Incluye atención básica más servicios adicionales como análisis de sangre y consultas ilimitadas para un cuidado más completo.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2" className='estiloPlan'>
          <Accordion.Header className='tituloPlan'>Adultos</Accordion.Header>
          <Accordion.Body>
            Incluye atención básica más servicios adicionales como análisis de sangre y consultas ilimitadas para un cuidado más completo.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Button className='botonPlanes' variant="primary" size="lg"> Ver Planes </Button>
    </div>
  );
}

export default Planes;