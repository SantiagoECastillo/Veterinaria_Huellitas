import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const UsuariosContexto = createContext(); 

const UserContext = ({children}) => {
    const[usuarios, setUsuarios] = useState()

    const getUser = async () => {
        try {
            /*const response = await axios.get("http://localhost:8080/users")*/
            console.log(response.data)
            setUsers(response.data) 
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
        <UsuariosContexto.Provider value={{usuarios, setUsuarios, logOut}}> 
          {children}  
        </UsuariosContexto.Provider>
    );
}

export default UserContext;