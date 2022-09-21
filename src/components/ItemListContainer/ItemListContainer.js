import { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { ItemList } from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

import { collection, getDocs, query, where, limit } from "firebase/firestore"
import { db } from "../../utils/firebase"


export const ItemListContainer = (props) => {


    const { tipoNave } = useParams(); //usamos este hook para traer los elementos dle dominio /naves/:tipoNave,  designada en la app. (captura la palabra en una variable). 

    const [ships, setShips] = useState([]);


    // RESOLVIENDO LLAMADO A BASE DE DATOS FIREBASE CON ASYNC/AWAIT

    useEffect(() => {
        const getData = async () => {
            try {
                let queryRef = tipoNave ? query(collection(db, "items"), //filtramos por variable tipoNave (CATEGORIA)
                    where("tipo", "==", tipoNave),
                    limit(8))
                    :
                    collection(db, "items") //si no hay filtro, que queryRef guarde todos los items (naves)

                const response = await getDocs(queryRef) //get Docs me retorna una promesa, y le mandamos el resultado de la query
                const datos = response.docs.map(doc => { //array datos que contendrá todos los newDoc (naves) 
                    const newDoc = {
                        ...doc.data(),
                        id: doc.id //como el id viene por separado de los demas datos (data), los agrego por el spread operator, llamados new Doc, que se guardan en el array datos
                    }
                    return newDoc
                })
                setShips(datos) //finalmente incluimos el array de naves (datos) en la variable de estado Ships

            } catch (error) {
                console.log(error)
            }
        }
        getData()
    }, [tipoNave]) //se renderizará cada vez que haya un cambio en esta variable



    //RESOLVIENDO CON BASE DE DATOS LOCAL CON THEN

    // useEffect(() => {
    //     obtenerNaves.then(resultado => {
    //         tipoNave
    //             ?
    //             setShips(resultado.filter(item => item.tipo === tipoNave))  //filtramos por variable tipoNave (CATEGORIA)
    //             :
    //             setShips(resultado)
    //     })
    // }, [tipoNave])


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