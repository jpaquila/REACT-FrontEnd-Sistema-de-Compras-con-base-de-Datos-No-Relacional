import React from "react";
import imagenJP from "../../Assets/JPAquila.png"
import "./PaginaContacto.css"
import { Link } from "react-router-dom"
import Button from "react-bootstrap/Button";

export const PaginaContacto = () => {


    return (
        <>
            <div className="contactoTitular">
                <h1>por Juan Pablo Aquila</h1>
                <img src={imagenJP} style={{ width: "300px" }} alt="Imagen Juan Pablo Aquila" />
            </div>
            <div className="contacto">
                <h3>¿Tiene potencial lo que está apreciando?</h3>
                <h5>Dale un vistazo a mi perfil <a href="https://www.linkedin.com/in/jpaquila/" target="_blank" rel="noopener noreferrer"> -> Visitar mi Linkedin</a>.</h5>
                <Link to="/" ><Button variant="outline-info" >Volver al Home</Button></Link>
            </div>
        </>

    )
}