import "./error404.css"



function Error404() {
    return (
      <>
    <body className="asd vh-100">
    <div className="main container">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-3"></div>

        <div className="col-12 col-sm-12 col-md-12 col-lg-6">
          <div className="main-img text-center">
            <img src="/src/images/error404.jpg" alt="perro" class="img-fluid pb-3" />
            <h1>Page Not Found</h1>
            <p className="main-description pt-2">
              We're SOrry, the page ty reuquest could not be found please go
              back to the homepage
            </p>
            <buttom class="btn btn-sz-primary">Go Home</buttom>
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