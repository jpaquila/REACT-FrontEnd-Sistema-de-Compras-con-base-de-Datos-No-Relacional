import { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { ItemCount } from '../ItemCount/ItemCount';
import { ItemList } from '../ItemList/ItemList';
import obtenerNaves from "../DataBase/DataBase";
import { useParams } from 'react-router-dom';

export const ItemListContainer = (props) => {
    const [estadoCarrito, setEstadoCarrito] = useState("Carrito Vacío");
    const [stockEnviar, setStockEnviar] = useState(5)
    const [stockCero, setStockCero] = useState("")

    const { tipoNave } = useParams(); //usamos este hook para traer los elementos dle dominio /naves/:tipoNave,  designada en la app. (captura la palabra en una variable). 


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

    //use effect para el cartel
    useEffect(() => {
        setTimeout(() => {
            setEstadoCarrito("Esperando productos...")
        }, 5000)
    }, [])

    const [ships, setShips] = useState([]);


    useEffect(() => {
        obtenerNaves.then(resultado => {
            tipoNave
                ?
                setShips(resultado.filter(i => i.tipo === tipoNave))  //filtramos por variable tipoNave
                :
                setShips(resultado)
        })
    }, [tipoNave])


    return (
        <Accordion style={{ marginTop: "60px", background: "#282c34", margin: "0 auto" }} defaultActiveKey={['0']} alwaysOpen >
            <Accordion.Item eventKey="0" style={{ background: "#282c34" }}>
                <Accordion.Header style={{ background: "#282c34" }}>{props.greeting}</Accordion.Header>
                {/* <div style={{ marginTop: "20px", background: "#282c34" }}>
                    <button className='StockClass' onClick={decrementarStock}>Decrementar Stock</button>
                    <button className='StockClass' onClick={incrementarStock}>Incrementar Stock</button>
                    <p style={{ color: "green", fontWeight: "bold" }}>{stockEnviar}</p>
                    <p style={{ color: "green" }}>{stockCero}</p>
                </div> */}
                <Accordion.Body className='Accordion'>
                    <ItemList ships={ships} />

                    {/* <ItemCount className='Accordion' stock={stockEnviar} initial={1} onAdd={agregarCarrito} estadoCarrito={estadoCarrito} /> */}
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>

    )
}