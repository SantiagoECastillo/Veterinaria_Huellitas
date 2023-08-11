import {Modal, Form} from 'react-bootstrap';
import ModalRegistro from '../Registro/ModalRegistro';
import { useState } from 'react';
import gatoLogin from '../../imagenes/Gato-login.svg';
import perroLoginn from '../../imagenes/Perro-img-login.svg';
import imgUsuarioLogin from '../../imagenes/username-icon.svg'
import imgContraseñaLogin from '../../imagenes/password-icon.svg'
import './ModalLogin.css';


const ModalLogin = ({show, handleClose}) => {

  /*LLamda al modal de registro*/
  const [showReg, setShow] = useState(false);

  const handleCloseRegistro = () => setShow(false);
  const handleShowRegistro = () => setShow(true);
  /********************************************* */
  const Reg = () =>{
    handleClose();
    handleShowRegistro();
  }

  return (
    <> 
        <Modal show={show} onHide={handleClose} className='colorFondoModal'>
          <div className='colorFondoModal'>
          <Modal.Header className='border-bottom-0' closeButton>
          </Modal.Header>
          <div>
            <div className='d-flex justify-content-center'>
              <img src={gatoLogin} alt="CaraDegato" className='alturaImagen'/>
              <img src={perroLoginn} alt="CaraDePerro" className='alturaImagen'/>
            </div>
            <h2 className='text-center mt-3'>Iniciar Sesión</h2>
          </div>
          <Modal.Body className='px-5'>
            <form>
              <div className='mb-3 input-group'>
                <div className='input-group-text bg-info'>
                  <img src={imgUsuarioLogin} alt="" className='imagenInputFormulario'/>
                  <input type='text' className='form-control' placeholder='Correo' />
                </div>
              </div>
              <div className='mb-3 input-group'>
                <div className='input-group-text bg-info'>
                  <img src={imgContraseñaLogin} alt="" className='imagenInputFormulario'/>
                  <input type='password' className='form-control' placeholder='Contraseña' />
                </div>
              </div>

              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <img src={imgContraseñaLogin} alt="" className='imagenInputFormulario'/>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
              </Form.Group>
            </form>  
          </Modal.Body>
          <div className='d-flex flex-column justify-content-center px-5'>
            <button type='submit' className='btn btn-info mb-2 text-white'>Iniciar Sesión</button>
          </div>
          <div className='d-flex gap-1 justify-content-center my-3'>
            <p>¿No tienes cuenta aun?</p>
            <a href='#' className='text-decoration-none fw-bold' onClick={() => Reg()}>Crear cuenta</a> {/*Logra cerrar el from, ver si puede abrir otro */}
          </div>
          </div>
        </Modal>

        <ModalRegistro showReg={showReg} handleCloseRegistro={handleCloseRegistro}/>
        
      </>
  )
}

export default ModalLogin