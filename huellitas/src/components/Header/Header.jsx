import { useState } from 'react';
import {Button, Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import ModalLogin from '../Login/ModalLogin';


const Header = () =>{
  /*Necesarios para que el modal funcione */
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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

            <Button className='btn btn-outline-success' type='submit' onClick={() => handleShow()}> Iniciar sesion</Button>  {/*Boton para inicio de sesion */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <ModalLogin show={show} handleClose={handleClose}/>
    {/*Aqui se soluciona el error de usar mas de un componente con el fragment */}
    </> 
  )
}

export default Header