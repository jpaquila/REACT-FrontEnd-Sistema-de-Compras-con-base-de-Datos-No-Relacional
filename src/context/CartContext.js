import { createContext, useState } from "react";


export const CartContex = createContext();

export const CartProvider = ({ children }) => { //recibo cualquier componente que este envuelto por el cart context y debo colocarlo en el provider (return)
    const [productCartList, setProductCartList] = useState([]);
    const [totalPriceProducts, setTotalPriceProducts] = useState()

    const addProduct = (item) => {
        const newList = [...productCartList]

        if (isInCar(item.id)) {
            const productoIndex = productCartList.findIndex(element => element.id === item.id)
            newList[productoIndex].cantidad = newList[productoIndex].cantidad + item.cantidad
            newList[productoIndex].totalPrice = newList[productoIndex].cantidad * newList[productoIndex].precio
            setProductCartList(newList)
        } else {
            const newProduct = { ...item, totalPrice: item.cantidad * item.precio }
            const list = [...productCartList, newProduct]
            setProductCartList(list)
        }
    }

    const more = (id) => {
        const newList = [...productCartList]
        const productoIndex = productCartList.findIndex(element => element.id === id)
        newList[productoIndex].cantidad = newList[productoIndex].cantidad + 1
        getTotalPrice()
        setProductCartList(newList)
    }

    const less = (id) => {
        const newList = [...productCartList]
        const productoIndex = productCartList.findIndex(element => element.id === id)
        newList[productoIndex].cantidad = newList[productoIndex].cantidad - 1
        getTotalPrice()
        setProductCartList(newList)
    }

    const removeProduct = (idProduct) => {
        const copyArray = [...productCartList]
        const newArray = copyArray.filter(elm => elm.id !== idProduct)
        setProductCartList(newArray)
    }

    const getTotalProducts = () => { //indicador numérico del carrito de compras
        const totalProducts = productCartList.reduce((acc, item) => acc + item.cantidad, 0)
        return totalProducts
    }

    const getTotalPrice = () => {
        setTotalPriceProducts(productCartList.reduce((acc, item) => acc + item.totalPrice, 0)) //reduce: itera en cada uno de los elementos y toma una propiedad de esos elementos y la acumula 
        return totalPriceProducts
    }

    const removeAllItems = () => {
        setProductCartList([])
    }

    const isInCar = (id) => {
        const elementExist = productCartList.some((elemento) => elemento.id === id)
        return elementExist
    }






    return (
        <CartContex.Provider value={{ productCartList, addProduct, removeProduct, getTotalProducts, removeAllItems, isInCar, more, less, getTotalPrice }}>
            {children}
        </CartContex.Provider>
    )

}
