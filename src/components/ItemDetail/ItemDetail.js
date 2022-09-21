import Spinner from 'react-bootstrap/Spinner';
import { ItemCount } from "../ItemCount/ItemCount"
import { useState, useEffect, useContext } from 'react';
import { CartContex } from "../../context/CartContext"
import { Link } from "react-router-dom"
import Button from "react-bootstrap/Button";


export const ItemDetail = ({ item }) => {

    const [estadoCarrito, setEstadoCarrito] = useState("Carrito Vacío");
    const [cant, setCant] = useState(0);
    const [loading, setLoading] = useState(true)

    const { addProduct } = useContext(CartContex); //usamos le contexto de cartContext para usar la funcion de agregar

    const onAdd = (cantidad) => {
        setEstadoCarrito(`Agregó ${cantidad} producto/s al carrito`);
        addProduct({ ...item, cantidad })
        setCant(cantidad)
    }

    //Mensaje: Esperando productos
    useEffect(() => {
        setTimeout(() => {
            setEstadoCarrito("Esperando productos...")
        }, 5000)
    }, [])

    //Mensaje: Loading
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [])

    return (
        <div className="item-container">
            {

                loading ? <div style={{ marginTop: "80px" }}><h2>Cargando...<br></br>
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span></Spinner></h2> </div>
                    :

                    <div className="item-detail">
                        <img src={item.imagen} width="800px" alt="imagenProducto" />
                        <h2>Nombre: {item.nombre}</h2>
                        <h4>Tipo: {item.tipo}</h4>
                        <h4>Capitán: {item.capitan}</h4>
                        <h4>Tripulantes: {item.tripulantes}</h4>
                        <h4>Armamento: {item.armamento}</h4>
                        <div className="detail">
                            <h5>Clase: {item.clase}</h5>
                            <p>{item.descripcion}</p><br></br>
                            <h5>Precio: Si bien una nave así es invaluable, para el caso práctico será de ${item.precio}</h5>
                        </div>

                        <ItemCount className='Accordion' stock={10} initial={1} onAdd={onAdd} estadoCarrito={estadoCarrito} />

                        {
                            cant > 0 &&
                            <>
                                <Link to="/cart" className="textoBotonCarrito"> <Button variant="outline-info" style={{ marginTop: "40px" }}>  IR AL CARRITO </Button></Link><br></br>
                            </>
                        }

                        <Link to="/"><Button variant="info" style={{ marginTop: "30px" }} >Volver a la lista de Naves</Button></Link>

                    </div>

            }
        </div >
    )

}










