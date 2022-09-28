
import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import { CartContex } from "../../context/CartContext";
import "../CartContainerForm/CartContainerForm.css"
import { db } from "../../utils/firebase"
import { collection, addDoc } from "firebase/firestore"
import Swal from 'sweetalert2'



export const CartContainerForm = () => {

    const { productCartList, getTotalPrice, removeAllItems } = useContext(CartContex)
    const [check, setCheck] = useState(false)
    const [mensajeId, setMensajeId] = useState(null)



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
            totalFinal: ("$" + getTotalPrice()),
        }
        const queryRef = collection(db, "orders")
        addDoc(queryRef, order).then(respuesta => setMensajeId("\n\nID número: " + respuesta.id
            + "\n\nNombre Cliente: " + order.buyer.nombre
            + "\nTotal a pagar: " + order.totalFinal))
        removeAllItems()
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
        <div>
            {
                productCartList.length > 0 &&
                <form className="form" onSubmit={sendOrder}>
                    <Form.Group className="mb-3" >
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" required placeholder="Ingresa tu Nombre" />
                        <Form.Label>Teléfono</Form.Label>
                        <Form.Control type="number" required placeholder="Ingresa tu Teléfono" />
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" required placeholder="Ingresa tu Email" />
                        <Form.Text className="text-muted">
                            Nunca compartiremos tu Email con nadie.
                        </Form.Text>
                        <Form.Check className="check" type="checkbox" checked={check} onChange={onChangeCheck} label="Estoy de acuerdo en realizar esta compra de supernaves" />
                    </Form.Group>

                    <Button variant="warning" type="submit" disabled={!check || mensajeId}>
                        ENVIAR ORDEN
                    </Button>
                </form >
            }
            {
                mensajeId !== null &&
                Swal.fire({
                    title: 'COMPRA REALIZADA CORRECTAMENTE' + mensajeId,
                    icon: 'success',
                    confirmButtonColor: '#3085d6',
                    width: "900px",
                    confirmButtonText: '¡GENIAL!',
                }).then((result) => {
                    if (result.isConfirmed) {
                        window.location.href = "/"
                    }
                })
            }

        </div >


    )
}
