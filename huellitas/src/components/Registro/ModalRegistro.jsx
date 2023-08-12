import {Modal} from 'react-bootstrap';
import svgNombreRegistro from '../../imagenes/username-icon.svg';
import svgCorreoRegistro from '../../imagenes/email.svg';
import svgContrasenaRegistro from '../../imagenes/password-icon.svg';
import svgTelefonoRegistro from '../../imagenes/phone-icon.svg';

import './ModalRegistro.css'

const ModalRegistro = ({showReg, handleCloseRegistro}) =>{
 
    return(
        <Modal show={showReg} onHide={handleCloseRegistro}>
        <Modal.Header closeButton className='border-bottom-0'>
        </Modal.Header>
          <div>
            <div className='d-flex justify-content-center'>
              <img src="" alt="" />
            </div>
            <h2 className='text-center mt-3'>Crea tu cuenta</h2>
          </div>
        <Modal.Body className='px-5'>
          <form>
            <div class="mb-3 input-group">
              <div class="input-group-text bg-info">
                <img src={svgNombreRegistro} alt="" class="imgRegistroFormulario" />
              </div>
              <input type="text" class="form-control" placeholder="Nombre" />
            </div>
            <div class="mb-3 input-group">
              <div class="input-group-text bg-info">
                <img src={svgNombreRegistro} alt="" class="imgRegistroFormulario" />
              </div>
              <input type="text" class="form-control" placeholder="Apellido" />
            </div>
            <div class="mb-3 input-group">
              <div class="input-group-text bg-info">
                <img src={svgCorreoRegistro} alt="" class="imgRegistroFormulario" />
              </div>
              <input type="text" class="form-control" placeholder="Correo" />
            </div>
            <div class="mb-3 input-group">
                <div class="input-group-text bg-info">
                  <img src={svgContrasenaRegistro} alt="" class="imgRegistroFormulario" />
                </div>
                <input type="text" class="form-control" placeholder="Contraseña" />
            </div>
            <div class="mb-3 input-group">
              <div class="input-group-text bg-info">
                <img src={svgTelefonoRegistro} alt="" class="imgRegistroFormulario" />
              </div>
              <input type="text" class="form-control" placeholder="Telefono" />
            </div>
          </form>
        </Modal.Body>
          <div className='d-flex flex-column justify-content-center px-5'>
            <button type='submit' className='btn btn-info mb-4 text-white'>Registrarse</button>
          </div>
      </Modal>
    )
}


export default ModalRegistro