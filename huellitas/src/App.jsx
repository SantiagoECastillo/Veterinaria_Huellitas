import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductosContexto from './components/context/ProductosContext';
import Productos from './components/productos/Productos';
import Rutas from './components/rutas/rutas';
import  ContextoTurnos  from './components/context/TurnosContext';



const App = () => {
  return (
    <>




      <ContextoTurnos>

        <ProductosContexto>
          <Rutas />
          {/* <Productos /> */}
        </ProductosContexto>
      </ContextoTurnos>


    </>
  )
}

export default App
