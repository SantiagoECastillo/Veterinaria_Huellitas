import Formulario from "./components/formulario/Formulario";
import FormularioContacto from "./pages/paginaContacto/FormularioContacto";
import { useState } from 'react'
import UsuariosContexto from './Context/UsuariosContexto';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductosContexto from './components/context/ProductosContext';
import ContextoTurnos from './components/context/TurnosContext';
import ContextoMascotas from './components/context/MascotasContext';
import ContextoUsuarios from './components/context/UsuariosContext';
import React, { useLayoutEffect } from "react";
import "./custom.scss";
import "./App.css";
import Rutas from "./components/rutas/Rutas";
import Header from "./components/header/Header";
import PieDePagina from "./components/pieDePagina/PieDePagina";
import Productos from './components/productos/Productos';
import PaginaPrincipal from './pages/paginaPrincipal/PaginaPrincipal'

const App = () => {
  useLayoutEffect(() => {
    document.body.style.backgroundColor = "white";
  }, []);


  return (

    <>


      <ContextoMascotas>
        <UsuariosContexto>
          <ContextoUsuarios>
            <ContextoTurnos>
              <ProductosContexto>
                <Header />
                <PaginaPrincipal />
                <Rutas />
                <Formulario/>
                 <FormularioContacto/>

                <PieDePagina />
              </ProductosContexto>
            </ContextoTurnos>
          </ContextoUsuarios>
        </UsuariosContexto>
      </ContextoMascotas>


    </>

  );
};

export default App;
