import { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { ItemCount } from '../ItemCount/ItemCount';

export const ItemListContainer = (props) => {
    const [estadoCarrito, setEstadoCarrito] = useState("Carrito Vacío");
    const [stockEnviar, setStockEnviar] = useState(5)
    const [stockCero, setStockCero] = useState("")

    const agregarCarrito = (cantidad) => { //recibe cantidad de la funcion hijo itemcount

        setEstadoCarrito(`El carrito tiene ${cantidad} producto/s`);
    }

    const incrementarStock = () => {

        setStockEnviar(stockEnviar + 1)
        setStockCero("")
    }

    const decrementarStock = () => {
        if (stockEnviar > 0) {
            setStockEnviar(stockEnviar - 1)
        } else {
            setStockCero("¡El stock ya es Cero!")
        }
    }

    useEffect(() => {
        setTimeout(() => {
            setEstadoCarrito("Esperando productos...")
        }, 2000)
    }, [])

    return (
        <div style={{ marginTop: "40px" }}>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>{props.greeting}</Accordion.Header>
                    <div style={{ marginTop: "20px" }}>
                        <button className='StockClass' onClick={decrementarStock}>Decrementar Stock</button>
                        <button className='StockClass' onClick={incrementarStock}>Incrementar Stock</button>
                        <p style={{ color: "green", fontWeight: "bold" }}>{stockEnviar}</p>
                        <p style={{ color: "green" }}>{stockCero}</p>
                    </div>
                    <Accordion.Body>
                        <ItemCount stock={stockEnviar} initial={0} onAdd={agregarCarrito} estadoCarrito={estadoCarrito} />
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}