
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductosContexto from './components/context/ProductosContext';
import Productos from './components/productos/Productos';
import Rutas from './components/rutas/rutas';
import ContextoTurnos from './components/context/TurnosContext';
import ContextoMascotas from './components/context/MascotasContext';
import ContextoUsuarios from './components/context/UsuariosContext';
import "bootstrap/dist/css/bootstrap.min.css"
import { useState } from 'react'




const App = () => {
  return (
    <>



      <ContextoMascotas>
        <ContextoUsuarios>
          <ContextoTurnos>
            <ProductosContexto>
              <Rutas />
            </ProductosContexto>
          </ContextoTurnos>
        </ContextoUsuarios>
      </ContextoMascotas>



    </>

      
  )
}

export default App
