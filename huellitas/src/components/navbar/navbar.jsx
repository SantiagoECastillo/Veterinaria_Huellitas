import React from 'react';
import NavbarLogo from '../../images/NavbarLogo.jpg'
import './navbar.css'; 

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg ">
            <div className="container mx-auto m-2 ">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse col-lg-4 text-center mt-1" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown ">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                id="dropdown1"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                TIENDA
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="dropdown1">
                                <li>
                                    <a className="dropdown-item text-center" href="#">
                                        Categoría 1
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item text-center" href="#">
                                        Categoría 2
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item text-center" href="#">
                                        Categoría 3
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                id="dropdown2"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                SERVICIOS
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="dropdown2">
                                <li>
                                    <a className="dropdown-item text-center" href="#">
                                        Servicio 1
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item text-center" href="#">
                                        Servicio 2
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item text-center" href="#">
                                        Servicio 3
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                TURNOS
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="col-lg-4 text-center">
                    <a className="navbar-brand" href="#">
                    <img src={NavbarLogo} alt="Logo" className="img-fluid w-50" />
                    </a>
                </div>

                <div className="navbar-right col-lg-4 mt-3 mt-md-0 mx-auto text-center">
                    <button
                        className="btn btn-color mx-auto rounded-sides"
                        data-bs-toggle="modal"
                        data-bs-target="#myModal"
                    >
                        INICIAR SESIÓN
                    </button>
                </div>
            </div>
        </nav>
        
    );
};

export default Navbar;