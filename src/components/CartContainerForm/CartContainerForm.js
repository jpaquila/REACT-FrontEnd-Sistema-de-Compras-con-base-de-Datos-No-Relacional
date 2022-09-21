
import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import { CartContex } from "../../context/CartContext";
import "../CartContainerForm/CartContainerForm.css"
import { db } from "../../utils/firebase"
import { collection, addDoc } from "firebase/firestore"


export const CartContainerForm = () => {

    const { productCartList, getTotalPrice } = useContext(CartContex)
    const [check, setCheck] = useState(false)
    const [mensajeId, setMensajeId] = useState()

    const sendOrder = (e) => {
        e.preventDefault()
        const order = {
            buyer: {
                nombre: e.target[0].value,
                telefono: e.target[1].value,
                email: e.target[2].value,
            },
            fecha: getCurrentDate(),
            items: productCartList,
            total: getTotalPrice(),
        }
        const queryRef = collection(db, "orders")
        addDoc(queryRef, order).then(respuesta => setMensajeId(`Su orden se registró correctamente bajo el id ${respuesta.id}`))
    }

    const getCurrentDate = (separator = '') => {
        let newDate = new Date()
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();

        return `${date} -  ${month < 10 ? `0${month}` : `${month}`} - ${year} `
    }

    const onChangeCheck = (e) => {
        setCheck(e.target.checked)
    }

    return (
        productCartList.length > 0 &&
        <form className="form" onSubmit={sendOrder}>
            <Form.Group className="mb-3" controlId="nombre">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" required placeholder="Ingresa tu Nombre" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="telefono">
                <Form.Label>Teléfono</Form.Label>
                <Form.Control type="text" required placeholder="Ingresa tu Teléfono" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" required placeholder="Ingresa tu Email" />
                <Form.Text className="text-muted">
                    Nunca compartiremos tu Email con nadie.
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check className="check" type="checkbox" checked={check} onChange={onChangeCheck} label="Estoy de acuerdo en realizar esta compra de supernaves" />
            </Form.Group>
            <Button variant="warning" type="submit" disabled={!check || mensajeId}>
                ENVIAR ORDEN
            </Button>
            <h3>{mensajeId}</h3>
        </form >
    )
}
