import './PaginaPrincipal.css'
import Carrusel from "../../components/carrusel/Carrusel"
import Planes from "../../components/planes/Planes"
import Profesionales from "../../components/profesionales/Profesionales"
import Servicios from "../../components/servicios/servicios";
import Slider from "../../components/slider/slider";
import Comentarios from "../../components/comentarios/Comentarios";
import Productos from "../../components/productos/Productos";
import { useContext } from "react";
import { ProductosContexto } from "../../components/context/ProductosContext";





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
      <Productos />
      <Slider />
      <Comentarios />
    </>
  )
}

export default PaginaPrincipal