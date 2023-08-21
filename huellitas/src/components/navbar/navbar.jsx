import React from "react";
import NavbarLogo from "../../images/navbarLogo.png";
import NavbarLogoReducido from "../../images/navbarLogoReducido.png";
import "./navbar.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const EstructuraNavbar = () => {
  const navegar = useNavigate();

  const redirigirAError404 = () => {
    navegar("/error404");
  };

  const redirigirAError404EnDropdown = () => {
    redirigirAError404();
  };

  return (
    <Navbar expand="lg">
      <div className="container">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <NavDropdown
              className="fw-bold text-center"
              title="TIENDA"
              id="dropdown1"
            >
              <NavDropdown.Item
                className="text-center"
                href="#"
                onClick={redirigirAError404EnDropdown}
              >
                Alimentos balanceados
              </NavDropdown.Item>
              <NavDropdown.Item
                className="text-center"
                href="#"
                onClick={redirigirAError404EnDropdown}
              >
                Accesorios
              </NavDropdown.Item>
              <NavDropdown.Item
                className="text-center"
                href="#"
                onClick={redirigirAError404EnDropdown}
              >
                Salud, Higiene y Estética
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              className="fw-bold text-center"
              title="SERVICIOS"
              id="dropdown2"
            >
              <NavDropdown.Item
                className="text-center"
                href="#"
                onClick={redirigirAError404EnDropdown}
              >
                Laboratorio
              </NavDropdown.Item>
              <NavDropdown.Item
                className="text-center"
                href="#"
                onClick={redirigirAError404EnDropdown}
              >
                Peluquería
              </NavDropdown.Item>
              <NavDropdown.Item
                className="text-center"
                href="#"
                onClick={redirigirAError404EnDropdown}
              >
                Urgencias
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link
              className="fw-bold text-center"
              href="#"
              onClick={redirigirAError404}
            >
              TURNOS
            </Nav.Link>
          </Nav>
          <div className="mx-auto">
            <div className=" d-none d-lg-block">
              <Navbar.Brand href="#">
                <a href="/" onClick={() => navegar("/")}>
                  <img
                    src={NavbarLogo}
                    alt="Logo de Huellitas"
                    className="img-fluid"
                  />
                </a>
              </Navbar.Brand>
            </div>
          </div>

          <Nav className="mx-auto">
            <button
              className="btn btn-info text-black mx-auto rounded-pill fw-bold"
              data-bs-toggle="modal"
              data-bs-target="#myModal"
            >
              INICIAR SESIÓN
            </button>
          </Nav>
        </Navbar.Collapse>
        <div className="d-lg-none mx-auto mt-0">
          <Navbar.Brand href="#">
            <img
              src={NavbarLogoReducido}
              alt="Logo de Huellitas reducido"
              className="d-flex img-fluid mt-4"
            />
          </Navbar.Brand>
        </div>
      </div>
    </Navbar>
  );
};

export default EstructuraNavbar;
