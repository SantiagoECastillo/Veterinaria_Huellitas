import React, { useLayoutEffect } from "react";
import "./custom.scss";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Rutas from "./components/rutas/Rutas";

const App = () => {
  useLayoutEffect(() => {
    document.body.style.backgroundColor = "white";
  }, []);

  return (
    <div>
      <Navbar />
      <Rutas />
      <Footer />
    </div>
  );
};

export default App;
