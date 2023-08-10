import Carrusel from "../../components/carrusel/Carrusel"
import Planes from "../../components/planes/Planes"
import Profesionales from "../../components/profesionales/Profesionales"
import Slider from "../../components/slider/slider"



const PaginaPrincipal = () => {

  return (
    <>
      <h1>Página principal</h1>
      <h2>Carousel con fotos de veterinarios</h2>
      <Carrusel/>
      <h2>Descripcion</h2>
      <p>"Somos una clínica veterinaria dedicada a proporcionar cuidados excepcionales para tus mascotas. Nuestro equipo altamente capacitado ofrece servicios médicos avanzados en instalaciones modernas. Desde exámenes preventivos hasta tratamientos especializados, cuidamos de tus animales con amor y experiencia. Confía en nosotros para mantener a tus mascotas saludables y felices."</p>
      <button>TURNOS</button>
      <h2>Nuestros servicios</h2>
      <h2>Nuestros Médicos</h2>
      <Profesionales />
      <h2>Nuestros planes</h2>
      <Planes />
      <button>Ver planes</button>
      <Slider />
      <h2>Referencias</h2>
    </>
  )
}

export default PaginaPrincipal