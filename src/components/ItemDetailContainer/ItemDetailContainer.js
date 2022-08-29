import React from 'react'
import obtenerNaves from '../DataBase/DataBase';
import { useState, useEffect } from 'react';
import { ItemDetail } from '../ItemDetail/ItemDetail';


export const ItemDetailContainer = () => {
    const [producto, setProducto] = useState();
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        obtenerNaves.then(respuesta => {
            setProducto(respuesta.find(prod => prod.id === 1))
            setLoading(false)
        })
    }, [])


    return (
        <div className='ItemDetailContainer'>
            <ItemDetail producto={producto} loading={loading} />
        </div>
    )
}
