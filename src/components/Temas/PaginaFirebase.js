import React, { useEffect, useState } from "react"
import { collection, getDocs, doc, getDoc } from "firebase/firestore"
import { db } from "../../utils/firebase"

export const PaginaFirebase = () => {
    const [arregloProductos, setArregloProductos] = useState([])

    //TODA LA COLECCION
    useEffect(() => {
        const getData = async () => {
            const query = collection(db, "items")
            const response = await getDocs(query)
            const docs = response.docs
            const data = docs.map(doc => { return { ...doc.data(), id: doc.id } })
            setArregloProductos(data)
        }
        getData()
    }, [])


    //UN SOLO DOCUMENTO
    useEffect(() => {
        const getDocumento = async () => {
            const query = doc(db, "item", "rPVGMKP90JVRusjlNGzw")
            const response = await getDoc(query)
            const producto = {
                ...response.data(),
                id: response.id
            }
        }
        getDocumento()
    }, [])


    return (
        <div>firebase</div>
    )
}