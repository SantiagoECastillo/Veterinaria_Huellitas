import "./productos.css"
import { useContext } from "react";
import { ProductosContexto } from "../context/ProductosContext";
import { Button, Card, Col, Row } from 'react-bootstrap';
import axios from "axios";

const Productos = () => {

    const { productos } = useContext(ProductosContexto)

    console.log(productos, "prueba")
    return (
        
        <div className="product-container col-12">
            {productos === undefined ? (
                <h1>Sin productos</h1>
            ) : (
                <Row xs={1} sm={2} md={3} className="g-4">
                    {productos.map((producto) => (
                        <Col key={producto.id}>
                            <Card className="product-card">
                                <Card.Img variant="top" src={producto.img} />
                                <Card.Body>
                                    <Card.Title>{producto.marca}</Card.Title>
                                    <Card.Text>
                                        Producto: {producto.tipo}
                                        <br />
                                        Precio: ${producto.precio}
                                    </Card.Text>
                                    <Button variant="primary">Comprar</Button>
                                </Card.Body>
                            </Card>
                        </ Col>
                    ))}

                </Row>
            )}
        </div>

    );

}

export default Productos