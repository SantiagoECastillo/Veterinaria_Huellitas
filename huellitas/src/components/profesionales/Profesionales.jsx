import Card from 'react-bootstrap/Card';
import "./Profesionales.css"
import { CardGroup } from 'react-bootstrap';


function Profesionales() {
  return (
    <>
      <h1 className='tituloMedicos'>Nuestros Medicos</h1>

      <CardGroup>
        <Card className='mx-2 mb-4 text-center custom-card'>
          <Card.Img variant="top" src="https://www.sadenir.com.uy/wp-content/uploads/2020/11/veterinarian-check-ing-puppy-s-health-2.jpg" />
          <Card.Body className="d-flex flex-column align-items-center">
            <Card.Title>Médico Generalista</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>

          </Card.Body>
        </Card>

        <Card className='mx-2 mb-4 text-center custom-card'>
          <Card.Img variant="top" src="https://www.castelar-digital.com.ar/img/fotos/Veterinaria_Perro_gato_Urgencia_atenci%C3%B3n_hospital_veterinario_vacunas_1.jpg" />
          <Card.Body className="d-flex flex-column align-items-center">
            <Card.Title>Médico Traumatologo</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>

          </Card.Body>
        </Card>

        <Card className='mx-2 mb-4 text-center custom-card'>
          <Card.Img variant="top" src="https://facultades.unab.cl/cienciasdelavida/wp-content/uploads/2022/02/AdobeStock_107432576-scaled.jpeg" />
          <Card.Body className="d-flex flex-column align-items-center">
            <Card.Title>Médico Cardiologo </Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>

          </Card.Body>
        </Card>
      </CardGroup>
    </>

  );
}

export default Profesionales;