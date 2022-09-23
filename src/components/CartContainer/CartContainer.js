import { useContext } from "react"
import { CartContex } from "../../context/CartContext"
import { CartItem } from "../CartItem/CartItem";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom"
import { CartContainerForm } from "../CartContainerForm/CartContainerForm";

export const CartContainer = () => {

    const { productCartList, removeAllItems, getTotalPrice } = useContext(CartContex);
    const carritoVacio = productCartList.length === 0 && "Carrito vacio"


    return (
        <div className="item-detail">
            <h1 style={{ paddingBottom: "40px", fontSize: "30px" }}>CARRITO DE COMPRA</h1>
            {
                productCartList.map(item => (<CartItem key={item.id} item={item} />))
            }
            <h3 style={{ marginTop: "140px" }}>{carritoVacio}</h3>
            {getTotalPrice() !== 0 &&
                <h4 style={{ marginTop: "140px" }}>Precio total: ${getTotalPrice()}</h4>
            }
            <Button onClick={removeAllItems} variant="danger" style={{ marginTop: "50px", fontSize: "20px" }} disabled={carritoVacio}>Vaciar Carrito</Button>
            <CartContainerForm />

            <Link to="/" ><Button variant="info" style={{ marginTop: "140px" }} >Volver a la lista de Naves</Button></Link>
        </div >
    )
}