import Spinner from 'react-bootstrap/Spinner';
import { ItemCount } from "../ItemCount/ItemCount"
import { useState, useEffect } from 'react';


export const ItemDetail = (props) => {
    const { producto, loading } = props
    const [estadoCarrito, setEstadoCarrito] = useState("Carrito Vacío");

    const onAdd = (cantidad) => { //recibe cantidad de la funcion hijo itemcount
        setEstadoCarrito(`El carrito tiene ${cantidad} producto/s. Recibido de un evento del ItemCount`);
    }

    //use effect para el cartel
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
                        <img src={producto.imagen} width="800px" alt="imagenProducto" />
                        <h2>Nombre: {producto.nombre}</h2>
                        <h3>Tipo: {producto.tipo}</h3>
                        <h3>Capitán: {producto.capitan}</h3>
                        <h3>Tripulantes: {producto.tripulantes}</h3>
                        <h3>Armamento: {producto.armamento}</h3>
                        <div className="detail">
                            <h5>Clase: {producto.clase}</h5>
                            <p>Id Producto: {producto.id}</p>
                            <p>{producto.descripcion}</p>
                            <p>Precio: Invaluable</p>
                        </div>

                        <ItemCount className='Accordion' stock={10} initial={1} onAdd={onAdd} estadoCarrito={estadoCarrito} />

                    </div>
            }
        </div >
    )

}










