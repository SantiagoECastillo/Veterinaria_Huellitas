import {Modal} from 'react-bootstrap';
import axios from 'axios';
import { useState } from 'react';
import svgNombreRegistro from '../../imagenes/username-icon.svg';
import svgCorreoRegistro from '../../imagenes/email.svg';
import svgContrasenaRegistro from '../../imagenes/password-icon.svg';
import svgTelefonoRegistro from '../../imagenes/phone-icon.svg';
import './ModalRegistro.css'

const ModalRegistro = ({showReg, handleCloseRegistro}) =>{


  const [datosUsuario, setDatosUsuario] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    contrasena: "",
    telefono: "",
  }); 

  const handleChange = (evento) => {
    setDatosUsuario({...datosUsuario, [evento.target.name]: evento.target.value})
  }

  const handleSubmit = (evento) => {
    evento.preventDefault()
    try {
      const response = axios.post("http://localhost:3000/usuarios", datosUsuario);
      console.log(response);
      setDatosUsuario({nombre: "", apellido: "", correo: "", contrasena: "", telefono: ""})
    } catch (error) {
      console.log(error)
    }
  }
  
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
          <form onSubmit={handleSubmit}>
            <div className="mb-3 input-group">
              <div className="input-group-text bg-info">
                <img src={svgNombreRegistro} alt="" className="imgRegistroFormulario" />
              </div>
              <input type="text" className="form-control" placeholder="Nombre" name='nombre' aria-describedby="nombre" value={datosUsuario.nombre} onChange={handleChange}/>
            </div>
            <div className="mb-3 input-group">
              <div className="input-group-text bg-info">
                <img src={svgNombreRegistro} alt="" className="imgRegistroFormulario" />
              </div>
              <input type="text" className="form-control" placeholder="Apellido" name='apellido' aria-describedby="apellido" value={datosUsuario.apellido} onChange={handleChange} />
            </div>
            <div className="mb-3 input-group">
              <div className="input-group-text bg-info">
                <img src={svgCorreoRegistro} alt="" className="imgRegistroFormulario" />
              </div>
              <input type="email" className="form-control" placeholder="Correo" name='correo' aria-describedby="correo" value={datosUsuario.correo} onChange={handleChange} />
            </div>
            <div className="mb-3 input-group">
                <div className="input-group-text bg-info">
                  <img src={svgContrasenaRegistro} alt="" className="imgRegistroFormulario" />
                </div>
                <input type="password" className="form-control" placeholder="Contraseña" name='contrasena' aria-describedby="contrasena" value={datosUsuario.contrasena} onChange={handleChange} />
            </div>
            <div className="mb-3 input-group">
              <div className="input-group-text bg-info">
                <img src={svgTelefonoRegistro} alt="" className="imgRegistroFormulario" />
              </div>
              <input type="tel" className="form-control" placeholder="Telefono" name='telefono' aria-describedby="telefono" value={datosUsuario.telefono} onChange={handleChange} />
            </div>
            <div className='d-flex flex-column justify-content-center '>
              <button type='submit' className='btn btn-info mb-4 text-white'>Registrarse</button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    )
}


export default ModalRegistro