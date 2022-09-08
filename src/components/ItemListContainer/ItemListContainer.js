import { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { ItemList } from '../ItemList/ItemList';
import obtenerNaves from "../DataBase/DataBase";
import { useParams } from 'react-router-dom';

export const ItemListContainer = (props) => {


    const { tipoNave } = useParams(); //usamos este hook para traer los elementos dle dominio /naves/:tipoNave,  designada en la app. (captura la palabra en una variable). 

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
                <Accordion.Body className='Accordion' style={{ marginTop: "30px" }}>
                    <ItemList ships={ships} />
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>

    )
}