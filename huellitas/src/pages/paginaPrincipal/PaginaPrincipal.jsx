import Planes from "../../components/planes/Planes"
import Profesionales from "../../components/profesionales/Profesionales"



const PaginaPrincipal = () => {
    
  return (
      <>
      <h1>Página principal</h1>
      <Profesionales />
      <h2>Nuestros planes</h2>
      <Planes />
      </>
    )
  }
  
  export default PaginaPrincipal