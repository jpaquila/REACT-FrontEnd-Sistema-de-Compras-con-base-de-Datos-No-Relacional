import React from 'react'
import { useState, useEffect } from 'react';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from "firebase/firestore"
import { db } from '../../utils/firebase';


export const ItemDetailContainer = () => {
    const [item, setItem] = useState();
    const { productId } = useParams();

    useEffect(() => {
        const queryRef = doc(db, "items", productId)
        getDoc(queryRef).then(response => {
            const newDoc = {
                ...response.data(),
                id: response.id
            }
            setItem(newDoc)
        }).catch(error => console.log("ERROR: " + error))
    }, [productId])


    return (
        <div className='ItemDetailContainer'>
            <ItemDetail item={item} />
        </div>
    )
}
