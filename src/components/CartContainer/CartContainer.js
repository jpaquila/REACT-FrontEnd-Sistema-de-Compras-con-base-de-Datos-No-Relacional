import { useContext } from "react"
import { CartContex } from "../../context/CartContext"
import { CartItem } from "../CartItem/CartItem";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom"
import { CartContainerForm } from "../CartContainerForm/CartContainerForm";
import "../CartContainer/CartContainer.css"

export const CartContainer = () => {

    const { productCartList, removeAllItems, getTotalPrice } = useContext(CartContex);
    const carritoVacio = productCartList.length === 0 && "Carrito vacio"


    return (
        <div className="item-detail">
            <h1 >CARRITO DE COMPRA</h1>
            {
                productCartList.map(item => (<CartItem key={item.id} item={item} />))
            }
            <h3 >{carritoVacio}</h3>
            {getTotalPrice() !== 0 &&
                <h4 >Precio total: ${getTotalPrice()}</h4>
            }
            <Button onClick={removeAllItems} variant="danger" className="buttonVaciarCarrito" disabled={carritoVacio}>Vaciar Carrito</Button>
            <CartContainerForm />

            <Link to="/"><Button variant="info" className="buttonVolverLista" >Volver a la lista de Naves</Button></Link>
        </div >
    )
}