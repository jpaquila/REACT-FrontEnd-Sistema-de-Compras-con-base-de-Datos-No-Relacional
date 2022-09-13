import React, { useContext } from 'react'
import { CartContex } from '../../context/CartContext';
import Button from "react-bootstrap/Button";


export const CartItem = ({ item }) => {
    const { removeProduct } = useContext(CartContex);

    return (
        <div className="item-detail" style={{ border: "1px solid white", borderRadius: "20px", padding: "50px" }}>
            <div >
                <img src={item.imagen} alt={item.nombre} />
            </div>
            <div>
                <h3>{item.nombre}</h3>
                <p>precio unitario: ${item.precio}</p>
                <p>cantidad: {item.cantidad}</p>
                <h5>Precio total: ${item.precio * item.cantidad} </h5><br></br>
                <Button variant="outline-info" onClick={() => removeProduct(item.id)}>Eliminar Nave</Button>
            </div>
        </div>
    )
}