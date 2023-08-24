import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
// import Error404 from "../../pages/Error404/Error404"; 
// import ModalLogin from "../../components/Login/ModalLogin";
// import MisMascotas from "../pages/MisMascotas/MisMascotas";
import DetallePlanes from "../../pages/detallePlanes/DetallePlanes";

const Rutas = () => {
  return (
    <Routes>
      
      <Route path="/index.html" element={null} />

      
      <Route path="/" element={<Navigate to="/index.html" />} />
      
      <Route path="/detallePlanes" element={<DetallePlanes />} />

      {/* 
      Ruta para ModalLogin
      <Route path="/login/modal" element={<ModalLogin />} />
      */}

      {/* <Route path="/mismascotas" element={<MisMascotas />} /> */}

     
      {/* <Route path="/error404" element={<Error404 />} /> */}

      
      {/* <Route path="*" element={<Navigate to="/error404" />} /> */}
    </Routes>

  );
};

export default Rutas;
