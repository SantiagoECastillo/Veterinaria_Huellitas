import './servicios.css'
import Button from 'react-bootstrap/Button';
const Servicios = () => {
    return (
        <>
            <div className='contenedorPrincipal'>

                <h1 className='tituloServicios'>Nuestros Servicios</h1>
                <Button className='botonTurno' variant="primary" size="lg"> Solicitar Turno </Button>

            </div>

        </>
    )
}

export default Servicios