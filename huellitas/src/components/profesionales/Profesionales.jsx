import Card from 'react-bootstrap/Card';


function Profesionales() {
  return (
    <>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.sadenir.com.uy/wp-content/uploads/2020/11/veterinarian-check-ing-puppy-s-health-2.jpg" />
      <Card.Body>
        <Card.Title>Médico 1</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>

      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.castelar-digital.com.ar/img/fotos/Veterinaria_Perro_gato_Urgencia_atenci%C3%B3n_hospital_veterinario_vacunas_1.jpg" />
      <Card.Body>
        <Card.Title>Médico 2</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>

      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card> 

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://facultades.unab.cl/cienciasdelavida/wp-content/uploads/2022/02/AdobeStock_107432576-scaled.jpeg" />
      <Card.Body>
        <Card.Title>Médico 3</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
    </>
    
  );
}

export default Profesionales;