import { createContext, useState } from "react";


export const CartContex = createContext();

export const CartProvider = ({ children }) => { //recibo cualquier componente que este envuelto por el cart context y debo colocarlo en el provider (return)
    const [productCartList, setProductCartList] = useState([]);

    const addProduct = (item) => {
        const newList = [...productCartList]

        if (isInCar(item.id)) {
            const productoIndex = productCartList.findIndex(element => element.id === item.id)
            newList[productoIndex].cantidad = newList[productoIndex].cantidad + item.cantidad
            setProductCartList(newList)
        } else {
            const list = [...productCartList, item]
            setProductCartList(list)
        }


    }

    const removeProduct = (idProduct) => {
        const copyArray = [...productCartList]
        const newArray = copyArray.filter(elm => elm.id !== idProduct)
        setProductCartList(newArray)

    }

    const getTotalProducts = () => { //indicador numérico del carrito de compras
        const totalProducts = productCartList.reduce((acc, item) => acc + item.cantidad, 0)
        return totalProducts;
    }

    const removeAllItems = () => {
        setProductCartList([])
    }

    const isInCar = (id) => {
        const elementExist = productCartList.some((elemento) => elemento.id === id)
        return elementExist
    }




    return (
        <CartContex.Provider value={{ productCartList, addProduct, removeProduct, getTotalProducts, removeAllItems, isInCar }}>
            {children}
        </CartContex.Provider>
    )

}
