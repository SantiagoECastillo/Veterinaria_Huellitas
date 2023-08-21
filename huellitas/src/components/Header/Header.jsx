import { useState } from 'react';
import {Button, Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import ModalLogin from '../Login/ModalLogin';
import ModalRegistro from '../Registro/ModalRegistro';


const Header = () =>{
  /*Necesarios para que el modal funcione */
  const [showLogin, setShowLogin] = useState();
  const [showRegistro, setShowRegistro] = useState();
  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);
  const handleCloseRegistro = () => setShowRegistro(false);
  const handleShowRegistro = () => setShowRegistro(true);

/************************************************ */
  return (
      <>
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Login</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link end className='nav-item nav-link' onClick={handleShowLogin}>Login</Nav.Link>
            {
              showLogin  && <ModalLogin show={showLogin} handleClose={handleCloseLogin} handleShowRegistro={handleShowRegistro}></ModalLogin>
            }
            <Nav.Link end className='nav-item nav-link' onClick={handleShowRegistro}>Registrarse</Nav.Link>
            {
              showRegistro && <ModalRegistro show={showRegistro} handleClose={handleCloseRegistro}></ModalRegistro>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

   
    </> 
  )
}

export default Header