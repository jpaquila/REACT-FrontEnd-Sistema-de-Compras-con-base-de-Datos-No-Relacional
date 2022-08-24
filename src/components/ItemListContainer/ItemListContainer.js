import { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { ItemCount } from '../ItemCount/ItemCount';

export const ItemListContainer = (props) => {
    const [estadoCarrito, setEstadoCarrito] = useState("Carrito Vacío");

    const agregarCarrito = (cantidad) => { //recibe cantidad de la funcion hijo itemcount

        setEstadoCarrito(`El carrito tiene ${cantidad} producto/s`);
    }

    useEffect(() => {
        setTimeout(() => {
            setEstadoCarrito("Esperando productos...")
        }, 2000)
    }, [])


    /*PRUEBE CAMBIAR EL STOCK del llamado al ITEMCOUNT A 0 MANUALMENTE PARA DESHABILITAR LOS BOTONES}*/
    return (
        <div style={{ marginTop: "40px" }}>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>{props.greeting}</Accordion.Header>
                    <Accordion.Body>
                        <ItemCount stock={5} initial={0} onAdd={agregarCarrito} estadoCarrito={estadoCarrito} />
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}