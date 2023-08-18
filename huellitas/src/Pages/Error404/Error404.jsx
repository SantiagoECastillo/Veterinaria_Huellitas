import "./error404.css";

function Error404() {
  return (
    <>
      <body className=" vh-100">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-3">
              
            </div>

            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
              <div className="main-img text-center mt-5 tamanoCont">
                
                <img
                  src="/src/images/error404.jpg"
                  alt="perro"
                  className="img-fluid"
                />
                <h1>Pagina no encontrada</h1>
                <p className="main-description pt-2">
                  Lo lamentamos. Parece que te has perdido
                </p>
                <buttom className="btn btn-sz-primary">Inicio</buttom>
                </div>
                
            </div>

            <div className="col-12 col-sm-12 col-md-12 col-lg-3"></div>
          </div>
        </div>
      </body>
    </>
  );
}

export default Error404;
