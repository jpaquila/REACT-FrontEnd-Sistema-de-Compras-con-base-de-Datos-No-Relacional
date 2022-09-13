import React from 'react'
import obtenerNaves from '../DataBase/DataBase';
import { useState, useEffect } from 'react';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';


export const ItemDetailContainer = () => {
    const [item, setItem] = useState();
    const [loading, setLoading] = useState(true)
    const { id } = useParams();

    useEffect(() => { //en este caso, la promesa la resolvemos buscando por id para traer un solo elemento
        obtenerNaves.then(respuesta => {
            setItem(respuesta.find(i => i.id === Number(id)))
            setLoading(false) //pantalla de carga
        })
    }, [id])


    return (
        <div className='ItemDetailContainer'>
            <ItemDetail item={item} loading={loading} />
        </div>
    )
}
