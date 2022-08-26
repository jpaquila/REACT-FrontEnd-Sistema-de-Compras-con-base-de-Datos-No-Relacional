import React, { useState } from "react"
import Button from 'react-bootstrap/Button';

export const Item = ({ Naves }) => {

    const [likes, setLikes] = useState(0);

    const incrementarlike = () => {
        setLikes(likes + 1);
    }


    return (
        <div className="tarjeta">
            <img src={Naves.imagen} width="500px" alt="imagen nave" className="cardImg" />
            <p>Nombre: {Naves.nombre}</p>
            <p>Clase: {Naves.clase}</p>
            <p>Tripulantes: {Naves.tripulantes}</p>
            <p>Capitán: {Naves.capitan}</p>
            <Button variant="info" onClick={incrementarlike} style={{ width: "100px", marginBottom: "20px" }}>Like</Button>
            <p style={{ color: "white" }}>Likes: {likes}</p>
        </div >
    )

}