
import React, { useLayoutEffect } from 'react';
import "./App.css";
import './custom.scss'; 
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Rutas from './components/rutas/Rutas';

const App = () => {
  useLayoutEffect(() => {
    document.body.style.backgroundColor = 'white';
  }, []);

  return (
    <div>
      <Navbar />
      <Rutas/> 
      <Footer /> 
    </div>
  );
};

export default App;
