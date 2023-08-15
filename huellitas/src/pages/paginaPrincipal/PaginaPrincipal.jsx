import Carrusel from "../../components/carrusel/Carrusel"
import Planes from "../../components/planes/Planes"
import Profesionales from "../../components/profesionales/Profesionales"
import Servicios from "../../components/servicios/servicios";
import Slider from "../../components/slider/slider";
import './PaginaPrincipal.css'
import Comentarios from "../../components/comentarios/Comentarios";




const PaginaPrincipal = () => {

  return (
    <>
      <h1>Página principal</h1>
      <Carrusel />
      <div className="conteinerText">
        <p className="descripcion">
          <strong>Somos una clínica veterinaria dedicada a proporcionar cuidados excepcionales para tus mascotas.</strong> Nuestro equipo altamente capacitado ofrece servicios médicos avanzados en instalaciones modernas. Desde <em>exámenes preventivos</em> hasta <em>tratamientos especializados</em>, cuidamos de tus animales con <em>amor y experiencia</em>. Confía en nosotros para mantener a tus mascotas saludables y felices.
        </p>

      </div>
      <Servicios />
      <Profesionales />
      <Planes />
      <h2>Algunos de nuestros productos</h2>
      
      
      <Slider />
      <h2>Referencias</h2>
      <Comentarios />
    </>
  )
}

export default PaginaPrincipal