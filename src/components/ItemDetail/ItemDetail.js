import Spinner from 'react-bootstrap/Spinner';
import { ItemCount } from "../ItemCount/ItemCount"
import { useState, useEffect, useContext } from 'react';
import { CartContex } from "../../context/CartContext"


export const ItemDetail = ({ item, loading }) => {

    const [estadoCarrito, setEstadoCarrito] = useState("Carrito Vacío");

    const { addProduct } = useContext(CartContex); //usamos le contexto de cartContext para usar la funcion de agregar

    const onAdd = (cantidad) => {
        setEstadoCarrito(`Agregó ${cantidad} producto/s al carrito`);
        addProduct({ ...item, cantidad })
    }

    useEffect(() => {
        setTimeout(() => {
            setEstadoCarrito("Esperando productos...")
        }, 5000)
    }, [])

    return (
        <div className="item-container">
            {

                loading ? <h2>Cargando...<br></br>
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span></Spinner></h2>
                    :

                    <div className="item-detail">
                        <img src={item.imagen} width="800px" alt="imagenProducto" />
                        <h2>Nombre: {item.nombre}</h2>
                        <h3>Tipo: {item.tipo}</h3>
                        <h3>Capitán: {item.capitan}</h3>
                        <h3>Tripulantes: {item.tripulantes}</h3>
                        <h3>Armamento: {item.armamento}</h3>
                        <div className="detail">
                            <h5>Clase: {item.clase}</h5>
                            <p>Id Producto: {item.id}</p>
                            <p>{item.descripcion}</p><br></br>
                            <h5>Precio: Si bien una nave así es invaluable, para el caso práctico será de ${item.precio}</h5>
                        </div>

                        <ItemCount className='Accordion' stock={10} initial={1} onAdd={onAdd} estadoCarrito={estadoCarrito} />

                    </div>
            }
        </div >
    )

}










