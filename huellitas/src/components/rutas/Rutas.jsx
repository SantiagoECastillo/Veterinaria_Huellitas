import React from "react";
import { Routes, Route } from "react-router-dom";
import Error404 from "../../pages/Error404/Error404"; // Importa el componente de error 404

const Rutas = () => {
  return (
    <Routes>
      {/* Ruta de redirección */}
      <Route path="/index.html" element={null} />
      
      {/* Otras rutas */}
      <Route path="/error404" element={<Error404 />} />
      {/* Agrega más rutas aquí */}
    </Routes>
  );
};

export default Rutas;
