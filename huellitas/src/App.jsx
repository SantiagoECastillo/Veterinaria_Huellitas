import './App.css'
import PaginaPrincipal from './pages/paginaPrincipal/paginaPrincipal';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



const App = () => {
  return (
    <>

      <Router>
        <Routes>
          <Route exact path='/' element={<PaginaPrincipal />} />
          <Route path="/" element={<Planes />} />
        </Routes>
      </Router>

      <PaginaPrincipal />

    </>
  )
}

export default App
