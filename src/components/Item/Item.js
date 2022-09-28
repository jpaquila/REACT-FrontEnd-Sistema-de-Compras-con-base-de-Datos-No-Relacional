import React, { useState } from "react"
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import "../Item/Item.css"

export const Item = ({ Naves }) => {

    const [likes, setLikes] = useState(0);

    const incrementarlike = () => {
        setLikes(likes + 1);
    }

    return (
        <div className="tarjeta">
            <img src={Naves.imagen} alt="imagen nave" className="photoCard" />
            <p>Nombre: {Naves.nombre}</p>
            <p>Tipo: {Naves.tipo}</p>
            <p>Clase: {Naves.clase}</p>
            <p>Tripulantes: {Naves.tripulantes}</p>
            <p>Capitán: {Naves.capitan}</p>

            <Button variant="outline-info" className="buttonLike" onClick={incrementarlike}>Like</Button>
            <p className="pWhites">Likes: {likes}</p>

            <Button variant="info" className="buttonVerMas"><Link to={`/item/${Naves.id}`} style={{ textDecoration: "none", color: "black", }}>Ver más</Link></Button>

        </div >
    )

}