import "./error404.css";
import Superperro from "../../images/Superperro.png";
import { useNavigate } from "react-router-dom"; // Asegúrate de importar useNavigate

function Error404() {
  const navigate = useNavigate(); // Agrega useNavigate para poder redirigir

  const redirigirAInicio = () => {
    navigate("/");
  };

  return (
    <div className="container vh-auto mb-5">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-3"></div>

        <div className="col-12 col-sm-12 col-md-12 col-lg-6">
          <h1 className="text-center m-5 colorYestilo-verde">
            <u>Página no encontrada</u>
          </h1>
          <div className="main-img text-center pt-5">
            <img
              src={Superperro} // Quita las comillas alrededor de Superperro
              alt="Indicador de error 404 con imagen de perro"
              className="img-fluid"
            />
            {/* Agrega el cierre de la etiqueta <img> */}
            <p className="main-description pt-5">
              El enlace que seguiste probablemente está roto o la página ha sido eliminada.
            </p>
            <p className="main-description">
              Haz clic en el botón para volver a la página principal.
            </p>

            <button
              className="btn btn-info text-black mx-auto rounded-pill fw-bold mt-5"
              onClick={redirigirAInicio}
            >
              IR A INICIO
            </button>
          </div>
        </div>

        <div className="col-12 col-sm-12 col-md-12 col-lg-3"></div>
      </div>
    </div>
  );
}

export default Error404;
