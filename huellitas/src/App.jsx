import React, { useLayoutEffect } from "react";
import "./custom.scss";
import "./App.css";
import Rutas from "./components/rutas/rutas/Rutas";
import MisMascotas from "./pages/MisMascotas/MisMascotas";

const App = () => {
  useLayoutEffect(() => {
    document.body.style.backgroundColor = "white";
  }, []);

  return (
    <div>
      <MisMascotas />
    </div>
  );
};

export default App;
