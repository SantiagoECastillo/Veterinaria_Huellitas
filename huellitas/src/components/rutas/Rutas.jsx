import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Error404 from "../../pages/Error404/Error404"; // Importa el componente de error 404
// import ModalLogin from "../../components/Login/ModalLogin";

const Rutas = () => {
  return (
    <Routes>
      {/* Ruta de redirección */}
      <Route path="/index.html" element={null} />

      {/* Ruta para la URL raíz ("/") */}
      <Route path="/" element={<Navigate to="/index.html" />} />

      {/* 
      Ruta para ModalLogin: Comenta esta línea para deshabilitar temporalmente la ruta ModalLogin
      <Route path="/login/modal" element={<ModalLogin />} />
      */}

      {/* Otras rutas */}
      <Route path="/error404" element={<Error404 />} />

      {/* Redirección para rutas inexistentes */}
      <Route path="*" element={<Navigate to="/error404" />} />
    </Routes>
  );
};

export default Rutas;