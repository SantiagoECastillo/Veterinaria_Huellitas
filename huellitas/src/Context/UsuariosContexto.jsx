import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const UsuarioContexto = createContext(); 

const UsuariosContexto = ({children}) => {
    const[usuarios, setUsuarios] = useState()

    const getUser = async () => {
        try {
            const response = await axios.get("http://localhost:3000/usuarios")
            console.log(response.data)
            setUsuarios(response.data) 
        } catch (error) {
            console.log(error)
        }
    }
    
    const logOut = () =>{
        localStorage.remove("usuario");
        window.location.href = "/" /*poner ruta del HOME aqui*/
    }

    useEffect(() => {
        getUser()
    }, [])

    return (
        <UsuarioContexto.Provider value={{usuarios, setUsuarios, logOut}}> 
          {children}  
        </UsuarioContexto.Provider>
    );
}

export default UsuariosContexto;