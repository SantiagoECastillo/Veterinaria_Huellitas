import React from 'react';

const Footer = () => {
    return (
        <footer className="container">
            <div className="row">
                {/* Columna 1: Logo y Redes Sociales */}
                <div className="col-lg-4 text-center mb-4 p-3">
                    <img src="tu-logo.png" alt="Logo" className="img-fluid" />
                    <div className="mt-3">
                        <a href="#" className="btn btn-sm btn-primary btn-social">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a href="#" className="btn btn-sm btn-info btn-social">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" className="btn btn-sm btn-danger btn-social">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>

                {/* Columna 2: Consultas */}
                <div className="col-lg-4 text-center mb-4 p-3">
                    <h4><i className="far fa-clock text-info"></i> Consultas</h4>
                    <p>Horarios de consulta:</p>
                    <p>Lunes a Viernes: 9:00 AM - 5:00 PM</p>
                    <p>Correo electrónico: consultas@ejemplo.com</p>
                </div>

                {/* Columna 3: Ubicación */}
                <div className="col-lg-4 text-center mb-4 p-3">
                    <h4><i className="fas fa-map-marker-alt text-info"></i> San Miguel de Tucumán</h4>
                    <p>Dirección: Calle Principal #123</p>
                    <p>Tucumán, Argentina</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;