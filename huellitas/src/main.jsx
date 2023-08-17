import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './components/navbar/Navbar'; // Importa el componente Navbar
import Footer from './components/footer/Footer'; // Importa el componente Footer

const MainApp = () => {
  return (
    <div>
      <Navbar /> {/* Usar el componente Navbar */}
      <Footer /> {/* Usar el componente Footer */}
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MainApp />
  </React.StrictMode>
);
