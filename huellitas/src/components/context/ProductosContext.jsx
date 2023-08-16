import { createContext, useState } from "react"

export const ProductosContexto = createContext()



const ProductosContext = ({ children }) => {
    // const productoHardcodeado = {
    //     marca: "Royal Canin",
    //     tipo: "alimento",
    //     precio: 30000,
    // }

    const [productos, setProductos] = useState("ganó mileidi")

    return (
        <ProductosContexto.Provider value={{ productos, setProductos }}>
            {children}
        </ProductosContexto.Provider>
    )
}
export default ProductosContext