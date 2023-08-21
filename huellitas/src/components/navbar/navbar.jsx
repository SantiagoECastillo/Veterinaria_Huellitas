import React from "react";
import NavbarLogo from "../../images/navbarLogo.png";
import NavbarLogoReducido from "../../images/navbarLogoReducido.png";
import "./navbar.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const EstructuraNavbar = () => {
  return (
    <Navbar expand="lg">
      <div className="container mx-auto">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown
              className="fw-bold text-center"
              title="TIENDA"
              id="dropdown1"
            >
              <NavDropdown.Item className="text-center" href="#">
                Categoría 1
              </NavDropdown.Item>
              <NavDropdown.Item className="text-center" href="#">
                Categoría 2
              </NavDropdown.Item>
              <NavDropdown.Item className="text-center" href="#">
                Categoría 3
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              className="fw-bold text-center"
              title="SERVICIOS"
              id="dropdown2"
            >
              <NavDropdown.Item className="text-center" href="#">
                Servicio 1
              </NavDropdown.Item>
              <NavDropdown.Item className="text-center" href="#">
                Servicio 2
              </NavDropdown.Item>
              <NavDropdown.Item className="text-center" href="#">
                Servicio 3
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link className="fw-bold text-center" href="#">
              TURNOS
            </Nav.Link>
          </Nav>
          <div className="mx-auto">
            <div className="d-none d-lg-block">
              <Navbar.Brand href="#">
                <img
                  src={NavbarLogo}
                  alt="Logo de Huellitas"
                  className="img-fluid"
                />
              </Navbar.Brand>
            </div>
          </div>

          <Nav className="ml-auto">
            <button
              className="btn btn-info text-black mt-3 mx-auto rounded-pill fw-bold"
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
