import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
// import Error404 from "../../pages/Error404/Error404"; 
// import ModalLogin from "../../components/Login/ModalLogin";
import MisMascotas from "../../../pages/MisMascotas/MisMascotas";

const Rutas = () => {
  return (
    <Routes>
      {/* Ruta de redirección */}
      <Route path="/index.html" element={null} />

      {/* Ruta para la URL raíz ("/") */}
      <Route path="/" element={<Navigate to="/index.html" />} />

      {/* 
      Ruta para ModalLogin
      <Route path="/login/modal" element={<ModalLogin />} />
      */}

      <Route path="/mismascotas" element={<MisMascotas />} />

      {/* Otras rutas */}
      {/* <Route path="/error404" element={<Error404 />} /> */}

      {/* Redirección para rutas inexistentes */}
      {/* <Route path="*" element={<Navigate to="/error404" />} /> */}
    </Routes>

  );
};

export default Rutas;
