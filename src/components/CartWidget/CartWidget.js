import { useEffect, useState } from "react";
import foto from "../../Assets/carrito.png";
import { Link } from "react-router-dom";


export const CartWidget = () => {
    const [valorCarrito, setValorCarrito] = useState(0);




    return (
        <div>
            <Link to={"/cart"} style={{ textDecoration: " none", color: `${valorCarrito > 0 ? "white" : "black"}` }}><img src={foto} widh="20px" height="20px" alt="carrito" /> {valorCarrito} </Link>
        </div>
    )
}