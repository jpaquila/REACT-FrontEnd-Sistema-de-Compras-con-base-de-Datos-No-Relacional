import React, { useContext, useState } from 'react'
import { CartContex } from '../../context/CartContext';
import Button from "react-bootstrap/Button";


export const CartItem = ({ item }) => {
    const { removeProduct } = useContext(CartContex);
    const [aumentarProductos, setAumentarProductos] = useState(item.cantidad)

    const sumar = () => {
        setAumentarProductos(aumentarProductos + 1)
    }

    const restar = () => {
        if (aumentarProductos > 0) {
            setAumentarProductos(aumentarProductos - 1)
        }
    }
    // PROBLEMA 1: COMO ENVIAR aumentarProductos al cart widget (o al cartContext) para actualziar el numero al lado del carrito del navBar.
    // Problema 2: Como hacer para que aumentarProductos tambien sume la cantidad en el productCartList la cantidad de productos, caso de que si se siguen agregando, no se pierdan estos datos.

    return (
        <div className="item-detail" style={{ border: "1px solid white", borderRadius: "20px", padding: "50px" }}>
            <div >
                <img src={item.imagen} alt={item.nombre} />
            </div>
            <div>
                <h3>{item.nombre}</h3>
                <p>precio unitario: ${item.precio}</p>
                <p>cantidad: {aumentarProductos}</p>
                <h5>Precio total: ${item.precio * aumentarProductos} </h5><br></br>
                <Button variant="info" onClick={restar} disabled={aumentarProductos === 0} >-</Button>
                <Button variant="outline-info" onClick={() => removeProduct(item.id)}>Eliminar Nave</Button>
                <Button variant="info" onClick={sumar}>+</Button>
            </div>
        </div>
    )
}