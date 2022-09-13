import { useContext, useState } from "react";
import foto from "../../Assets/carrito.png";
import { Link } from "react-router-dom";
import { CartContex } from "../../context/CartContext";


export const CartWidget = () => {
    const [valorCarrito] = useState(0);
    const { getTotalProducts } = useContext(CartContex);


    return (
        <div>
            <Link to={"/cart"} style={{ textDecoration: " none", color: `${valorCarrito > 0 ? "white" : "black"}` }}><img src={foto} widh="20px" height="20px" alt="carrito" /> {getTotalProducts()}</Link>
        </div>
    )
}