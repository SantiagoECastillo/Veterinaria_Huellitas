import { createContext, useEffect, useState, useContext } from "react";
import axios from "axios";
import { registerRequest } from '../helpers/query.js';

export const UsuarioContexto = createContext(); 


export const usarUsuContext = () => {
    const contexto = useContext(UsuarioContexto);
    if(!contexto){
        throw new Error(" usarUsuContext debe estar dentro de un UsuarioProvider")
    }
    return contexto;
}

const UsuariosContexto = ({children}) => {
    const[usuario, setUsuario] = useState(null)

    /*
    const getUser = async () => {
        try {
            const response = await axios.get("http://localhost:3000/usuarios")
            console.log(response.data)
            setUsuario(response.data) 
        } catch (error) {
            console.log(error)
        }
    }
    */

    const login = async (user) => {
        try {
            const response = await registerRequest(user);
            console.log(response.data)
            setUsuario(response.data)
            /*setAutentificado(true)   */
        } catch (error) {
            /*setErrorRegistro(error.response.data)*/
        }
    }

    const logOut = () =>{
        localStorage.remove("usuario");
        window.location.href = "/" /*poner ruta del HOME aqui*/
    }

    useEffect(() => {
        /*getUser()*/
    }, [])

    return (
        <UsuarioContexto.Provider value={{usuario, setUsuario, logOut, login}}> 
          {children}  
        </UsuarioContexto.Provider>
    );
}

export default UsuariosContexto;