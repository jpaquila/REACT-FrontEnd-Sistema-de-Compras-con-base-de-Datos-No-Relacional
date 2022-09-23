import { useState, useEffect } from 'react';
import "../ItemListContainer/itemListContainer.css"
import { ItemList } from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

import { collection, getDocs, query, where, limit } from "firebase/firestore"
import { db } from "../../utils/firebase"


export const ItemListContainer = (props) => {


    const { tipoNave } = useParams();
    const [ships, setShips] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                let queryRef = tipoNave ? query(collection(db, "items"),
                    where("tipo", "==", tipoNave),
                    limit(8))
                    :
                    collection(db, "items")
                const response = await getDocs(queryRef)
                const datos = response.docs.map(doc => {
                    const newDoc = {
                        ...doc.data(),
                        id: doc.id
                    }
                    return newDoc
                })
                setShips(datos)

            } catch (error) {
                console.log(error)
            }
        }
        getData()
    }, [tipoNave])


    //OPCION PARA USAR BASE DE DATOS LOCAL (DESCOMENTAR) LO SIGUIENTE Y COMENTAR LO ANTERIOR

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
        <div className='itemListContainer'>
            <ItemList ships={ships} />
        </div>


    )
}