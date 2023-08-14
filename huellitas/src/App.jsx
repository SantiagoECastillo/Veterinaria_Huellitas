import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import UsuariosContexto from './Context/UsuariosContexto';

function App() {

  return (
    <>
      <UsuariosContexto>
        <Header />
      </UsuariosContexto>
    </>
  )
}

export default App
