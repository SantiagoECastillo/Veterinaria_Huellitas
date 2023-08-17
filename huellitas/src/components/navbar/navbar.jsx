import React from 'react';

const Navbar = () => {
    return (
        <html lang="es">
        <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
                rel="stylesheet"
                integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9"
                crossorigin="anonymous"
            />
            <link rel="stylesheet" href="css.css" />
            <title>Huellitas - navbar</title>
        </head>
        <body>
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
                            Iniciar sesión o Registrarse
                        </button>
                    </div>
                </div>
            </nav>

            <script
                src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm"
                crossorigin="anonymous"
            ></script>
        </body>
        </html>
    );
};

export default Navbar;