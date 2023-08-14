import {Modal} from 'react-bootstrap';
import { useContext, useState } from 'react';
import { UsuarioContexto } from '../../Context/UsuariosContexto';
import ModalRegistro from '../Registro/ModalRegistro';
import gatoLogin from '../../imagenes/Gato-login.svg';
import perroLoginn from '../../imagenes/Perro-img-login.svg';
import imgUsuarioLogin from '../../imagenes/username-icon.svg'
import imgContraseñaLogin from '../../imagenes/password-icon.svg'
import './ModalLogin.css';



const ModalLogin = ({show, handleClose}) => {
  const [correo, setCorreo] = useState();
  const [contrasenia, setcontrasenia] = useState();

  const {usuarios} = useContext(UsuarioContexto)

  const handleSubmit = (evento) => {
    evento.preventDefault()
    try {
      const usuario = usuarios.find(usuario => usuario.correo === correo && usuario.contrasena === contrasenia)
      if(usuario){
        alert("usuario encontrado");
        localStorage.setItem("usuario", JSON.stringify(usuario))
        window.location.href = "/"; /*aqui colocamos la redireccion que se hara una vez que ingrese el usuario, hay que agregar en el path */
      }else{
        alert("usuario NO encontrado");
      }
    } catch (error) {
      console.log(error)
    }
  }

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
        <Modal show={show} onHide={handleClose}>
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
            <form onSubmit={handleSubmit}>
              <div className='mb-3 input-group'>
                <div className='input-group-text bg-info '>
                  <img src={imgUsuarioLogin} alt="" className='imagenInputFormulario'/>
                </div>
                <input type='email' className='form-control' name='email' aria-describedby='emanil' placeholder='Ingrese su correo' 
                  onChange={(evento) => setCorreo(evento.target.value)} value={correo}
                />
              </div>
              <div className='mb-3 input-group'>
                <div className='input-group-text bg-info'>
                  <img src={imgContraseñaLogin} alt="" className='imagenInputFormulario'/>
                </div>
                <input type='password' className='form-control' name='contrasena' aria-describedby='contrasena' placeholder='Ingrese su contraseña'  
                  onChange={(evento) => setcontrasenia(evento.target.value)} value={contrasenia}
                />
              </div>
              <div className='d-flex flex-column justify-content-center mt-2'>
                <button type='submit' className='btn btn-info mb-2 text-white'>Iniciar Sesión</button>
              </div>
            </form>  
          </Modal.Body>
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