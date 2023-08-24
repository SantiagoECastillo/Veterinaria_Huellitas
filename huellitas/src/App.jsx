import 'bootstrap/dist/css/bootstrap.min.css';
import ProductosContexto from './components/context/ProductosContext';
import ContextoTurnos from './components/context/TurnosContext';
import ContextoMascotas from './components/context/MascotasContext';
import ContextoUsuarios from './components/context/UsuariosContext';
import { useState } from 'react'
import React, { useLayoutEffect } from "react";
import "./custom.scss";
import "./App.css";
import Rutas from "./components/rutas/rutas/Rutas";
import MisMascotas from "./pages/MisMascotas/MisMascotas";
import Rutas from "./components/rutas/Rutas";
import Header from "./components/header/Header";
import PieDePagina from "./components/pieDePagina/PieDePagina";
import Productos from './components/productos/Productos';
import Error404 from "./Pages/Error404/Error404"

const App = () => {
  useLayoutEffect(() => {
    document.body.style.backgroundColor = "white";
  }, []);

  return (

    <>

      <ContextoMascotas>
        <ContextoUsuarios>
          <ContextoTurnos>
            <ProductosContexto>
              <Header />
              <MisMascotas />
              <Rutas />
              <PieDePagina />
            </ProductosContexto>
          </ContextoTurnos>
        </ContextoUsuarios>
      </ContextoMascotas>

    </>

  );
};

export default App;
