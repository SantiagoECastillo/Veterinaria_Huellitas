import './servicios.css'
import Button from 'react-bootstrap/Button';
const Servicios = () => {
    return (
        <>

            <div className="container">
                <div className='informacionSimple'>
                    <img src="src/images/logo/Logo.jpg" alt="Logo de la Clínica" />
                    <h1>Clínica Veterinaria</h1>
                    <h3>Consultas: Lunes-Viernes: 8:30 a 20:30</h3>
                    <h3>Gral. Paz 576, T4000 San Miguel de Tucumán, Tucumán</h3>
                    <h3>Tel. 0381 578-3030</h3>
                </div>
                <div className='containerDetalles'>


                    <section id="especialidades">
                        <h2>Nuestras Especialidades:</h2>
                        <ul className="listaEspecialidades">
                            <li>Medicina General</li>
                            <li>Cirugía</li>
                            <li>Traumatología</li>
                            <li>Cardiología</li>
                            <li>Nutrición</li>
                        </ul>
                    </section>

                    <section id="servicios">
                        <h2>Servicios Ofrecidos:</h2>
                        <ul className="listaServicios">
                            <li>Urgencias 24 HS</li>
                            <li>Internación</li>
                            <li>Diagnóstico por Imagen</li>
                            <li>Laboratorio</li>
                            <li>Banco de Sangre</li>
                        </ul>
                    </section>
                </div>

            </div>

            <div className='boton'>
                <Button className='botonTurnos' variant="primary" size="lg"> Turnos </Button>
            </div>

        </>

    )
}

export default Servicios