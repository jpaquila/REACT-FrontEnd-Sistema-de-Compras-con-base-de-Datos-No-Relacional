import { Item } from "../Item/Item"

export const ItemList = ({ ships }) => {

    return (
        <div className="cardsContainer">
            {
                ships.map((i) => ( //foreach con map para recorrer el array, y no tener que enviar uno por uno
                    <Item Naves={i} key={i.id} /> //la key id se la envio para que no genere errores, aunuqe no la use
                ))
            }

        </div>
    )
}