import { Routes, Route } from "react-router-dom";
import RegistroProductos from "../registroProductos/RegistroProductos";
import PaginaPrincipal from "../../pages/paginaPrincipal/PaginaPrincipal";

const Rutas = () => {
    return(
        <Routes>
            <Route path="/home" element={<PaginaPrincipal />}/>
            <Route path="/registroProductos" element={<RegistroProductos />}/>
        </Routes>

    )
}

export default Rutas