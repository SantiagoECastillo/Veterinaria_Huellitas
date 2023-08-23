import React, { useLayoutEffect } from "react";
import "./custom.scss";
import "./App.css";
import Rutas from "./components/rutas/Rutas";
import Header from "./components/header/Header";
import PieDePagina from "./components/pieDePagina/PieDePagina";

const App = () => {
  useLayoutEffect(() => {
    document.body.style.backgroundColor = "white";
  }, []);

  return (
    <div>
      <Header />
      <Rutas />
      <PieDePagina />
    </div>
  );
};

export default App;
