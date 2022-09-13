import { useContext } from "react"
import { CartContex } from "../../context/CartContext"
import { CartItem } from "../CartItem/CartItem";
import Button from "react-bootstrap/Button";

export const CartContainer = () => {

    const { productCartList, removeAllItems } = useContext(CartContex);

    // const carritoVacio = () => {
    //     productCartList.length === 0 ? "Carrito Vacío" : ""
    // }

    return (
        <div className="item-detail">
            <h1 style={{ paddingBottom: "40px", fontSize: "30px" }}>CARRITO DE COMPRA</h1>
            {
                productCartList.map(item => (<CartItem key={item.id} item={item} />))
            }

            <Button onClick={removeAllItems} variant="danger" style={{ marginTop: "50px", fontSize: "20px" }}>Vaciar Carrito</Button>
            {/* <h4>{carritoVacio}</h4> */}

        </div >

    )


}