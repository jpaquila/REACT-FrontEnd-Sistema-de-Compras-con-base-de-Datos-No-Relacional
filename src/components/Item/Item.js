import React, { useState } from "react"
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

export const Item = ({ Naves }) => {

    const [likes, setLikes] = useState(0);

    const incrementarlike = () => {
        setLikes(likes + 1);
    }

    return (
        <div className="tarjeta">
            <img src={Naves.imagen} width="500px" alt="imagen nave" className="cardImg" />
            <p>Nombre: {Naves.nombre}</p>
            <p>Tipo: {Naves.tipo}</p>
            <p>Clase: {Naves.clase}</p>
            <p>Tripulantes: {Naves.tripulantes}</p>
            <p>Capitán: {Naves.capitan}</p>

            <Button variant="outline-info" onClick={incrementarlike} style={{ width: "80px", marginBottom: "10px" }}>Like</Button>
            <p style={{ color: "white" }}>Likes: {likes}</p>

            <Button variant="info" style={{ width: "120px", marginBottom: "20px" }}><Link to={`/item/${Naves.id}`} style={{ textDecoration: "none", color: "black", }}>Ver más</Link></Button>

        </div >
    )

}