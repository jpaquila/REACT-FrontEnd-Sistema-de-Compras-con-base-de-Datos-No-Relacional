import { Item } from "../Item/Item"
import { useEffect, useState } from "react"
import obtenerNaves from "../DataBase/DataBase";



export const ItemList = () => {

    const [ships, setShips] = useState([]);


    //creo mi funcion asincrona dentro del use effect para resolver la promesa obtener naves que nos envio DataBase
    useEffect(() => {
        obtenerNaves.then(ships => setShips(ships))

        //SI HUBIERAMOS USADO LA PROMESA EN ESTA CLASE, y queremos hacerlo con un async
        // const funcionAsincrona = async () => {
        //     try {
        //         const listado = await obtenerNaves();
        //         setShips(listado);
        //     } catch (error) {
        //         console.log("Hubo un error en el await: ", error)
        //     }
        // }
        // funcionAsincrona();
    }, [])


    return (
        <div className="listContainer">
            <div className="cardsContainer">
                {
                    ships.map((i) => ( //foreach con map para recorrer el array, y no tener que enviar uno por uno
                        <Item Naves={i} key={i.id} /> //la key id se la envio para que no genere errores, aunuqe no la use
                    ))
                }
            </div>
        </div>
    )
}