import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductosContexto from './components/context/ProductosContext';
import Productos from './components/productos/Productos';
import Rutas from './components/rutas/rutas';



const App = () => {
  return (
    <>

      

      <ProductosContexto>
        <Rutas />
        {/* <Productos /> */}
      </ProductosContexto>s


    </>
  )
}

export default App
