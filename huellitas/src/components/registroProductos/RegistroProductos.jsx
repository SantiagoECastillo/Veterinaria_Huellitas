import "./registroProductos.css"
import { useState } from "react"
import {Form, Button} from 'react-bootstrap';
import axios from "axios";


const RegistroProductos = () => {
    const [dataProducto, setDataProducto] = useState({
        marca: "",
        tipo: "",
        precio: "",
        img:"",

    })

    const handleChange = (e) => {
        setDataProducto({ ...dataProducto, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(dataProducto)
        try {
            const response = axios.post("http://localhost:8080/productos", dataProducto)
            console.log(response)
            setDataProducto({
                marca: "",
                tipo: "",
                precio: "",
                img:"",

            })

        } catch (error) {
            console.log(error)

        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>

                <Form.Control size="lg" type="text" value={dataProducto.marca} onChange={handleChange} name="marca" placeholder="Marca" />
                <br />
                <Form.Control type="text" value={dataProducto.tipo} onChange={handleChange} name="tipo" placeholder="Tipo" />
                <br />
                <Form.Control size="lg" type="number" value={dataProducto.precio} onChange={handleChange} name="precio" placeholder="Precio" />
                <br />
                <Form.Control size="lg" type="file" value={dataProducto.img} onChange={handleChange} name="img" placeholder="Foto del Producto" />
                <Button className='botonRegistro' type="submit" variant="primary" size="lg"> Cargar Producto </Button>
            </form>
        </>
    )
}

export default RegistroProductos