/*Consigna:  Los ítems deben provenir de un llamado a una promise que los resuelva en
tiempo diferido (setTimeout) de 2 segundos, para emular retrasos de red

>>Aspectos a incluir en el entregable:
Item.js: Es un componente destinado a mostrar información breve del producto que el user
clickeará luego para acceder a los detalles (los desarrollaremos más adelante)
ItemList.js Es un agrupador de un set de componentes Item.js (Deberías incluirlo dentro de
ItemListContainer del desafío 3)
Implementa un async mock (promise): Usa un efecto de montaje para poder emitir un llamado
asincrónico a un mock (objeto) estático de datos que devuelva un conjunto de item { id, title,
description, price, pictureUrl } en dos segundos (setTimeout), para emular retrasos de red.*/

import { Item } from "../Item/Item"
import imagenGalaxia from "../../Assets/Galaxia.jpg"
import imagenConstitucion from "../../Assets/constitucion.jpg"
import imagenIntrepida from "../../Assets/Intrepida.jpg"
import { useEffect, useState } from "react"

//array de objetos 
const Naves = [
    {
        imagen: imagenGalaxia,
        clase: "Galaxia",
        nombre: "USS Enterprise-D",
        tripulantes: 1300,
        capitan: "Jean Luc Picard",
        armamento: ["Phasers", "Torpedos de fotones"]

    },
    {
        imagen: imagenIntrepida,
        clase: "Intrepida",
        nombre: "USS Voyager",
        tripulantes: 152,
        capitan: "Katerin Janeway",
        armamento: ["Phasers", "Torpedos de fotones", "Torpedos Quánticos"]
    },
    {
        imagen: imagenConstitucion,
        clase: "Constitución",
        nombre: "USS Enterprise-A",
        tripulantes: 109,
        capitan: "James T. Kirk",
        armamento: ["Phasers", "Torpedos de fotones"]
    }]


export const ItemList = () => {

    //PROMESA QUE SIMULA TIEMPO DE ESPERA DE SERVIDOR Y LO OBTENEMOS
    const [ships, setShips] = useState([]);

    const obtenerNaves = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Naves)
            }, 2000);
        })
    }
    //creo mi funcion asincrona dentro del use effect
    useEffect(() => {
        const funcionAsincrona = async () => {
            try {
                const listado = await obtenerNaves();
                setShips(listado);
                console.log("Listado: ", listado)
            } catch (error) {
                console.log("Hubo un error: ", error)
            }

        }
        funcionAsincrona();
    }, [])


    return (
        <div className="listContainer">
            <div className="cardsContainer">
                {
                    ships.map((i) => { //foreach con map para recorrer el array, y no tener que enviar uno por uno
                        return (
                            <Item Naves={i} />
                        )
                    })
                }
            </div>
        </div>
    )
}