import React from 'react';
import ReactDOM from 'react-dom/client';
import './custom.scss'; // Asegúrate de que esté importado antes de los estilos de Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

const MainApp = () => {
  return (
    <div>
      <Navbar /> {}
      <Footer /> {}
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MainApp />
  </React.StrictMode>
);
