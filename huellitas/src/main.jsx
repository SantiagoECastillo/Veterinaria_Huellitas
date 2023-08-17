import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navbar from './src/components/Navbar.jsx'; // Ruta correcta a tu archivo Navbar.jsx
import Footer from './src/components/Footer.jsx'; // Ruta correcta a tu archivo Footer.jsx

const App = () => {
    return (
        <div>
            <Navbar />
            {/* Aquí puedes agregar otros componentes y contenido de tu aplicación */}
            <Footer />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
