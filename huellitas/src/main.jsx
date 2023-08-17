import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './components/navbar';
import Footer from './components/footer';

const MainApp = () => {
  return (
    <div>
      <Navbar />
      <Footer />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MainApp />
  </React.StrictMode>
);