
import { useState } from "react"
import Button from "react-bootstrap/Button";

export const ItemCount = ({ stock, initial, onAdd, estadoCarrito }) => {
    const [cantidad, setCantidad] = useState(initial)
    const [cantidadUno, setCantidadUno] = useState("")
    const [maxStock, setMaxStock] = useState("")

    const incrementar = () => {
        if (cantidad < stock) {
            setCantidad(cantidad + 1)
            setCantidadUno("");
        } else {
            setMaxStock(`¡Alcanzó el máximo stock disponible! Stock: ${cantidad}`)
        }

    }

    const decrementar = () => {
        if (cantidad > 0) {
            setCantidad(cantidad - 1)
            setMaxStock("");
        } else {
            setCantidadUno("¡La cantidad ya es cero!")
        }
    }
    return (
        <div class="contadores">
            <h1 >{cantidad}</h1>
            <button className="botonesContadores" onClick={decrementar} disabled={stock === 0} style={{ background: stock === 0 ? "grey" : "" }} > RESTAR</button>
            <button className="botonesContadores" onClick={incrementar} disabled={stock === 0} style={{ background: stock === 0 ? "grey" : "" }} > SUMAR</button>
            <h5 style={{ color: "red" }}>{cantidadUno}</h5>
            <h5 style={{ color: "red" }}>{maxStock}</h5>
            <Button onClick={() => onAdd(cantidad)} variant={`${cantidad > 0 ? "info" : "light"}`} disabled={stock === 0} style={{ marginTop: "30px", background: stock === 0 ? "grey" : "" }}>Agregar al carrito</Button>{" "}

            <h4 style={{ marginTop: "20px" }}>{estadoCarrito}</h4>

            {cantidad >= 1 ? <p style={{ color: "green" }}>Ya puede agregar productos</p> : <p style={{ color: "red" }}>Incremente los productos para poder agregar</p>}


        </div >
    )

}