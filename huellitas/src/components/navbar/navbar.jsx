import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
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

                <div className="collapse navbar-collapse col-lg-4 text-center" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                id="dropdown1"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Tienda
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="dropdown1">
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Categoría 1
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Categoría 2
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
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
                                Servicios
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="dropdown2">
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Servicio 1
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Servicio 2
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Servicio 3
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Turnos
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="col-lg-4 text-center">
                    <a className="navbar-brand" href="#">
                        Logo
                    </a>
                </div>

                <div className="navbar-right col-lg-4 d-flex align-items-center justify-content-lg-center">
                    <button
                        className="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#myModal"
                    >
                        Iniciar sesión
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;