import Spinner from 'react-bootstrap/Spinner';


export const ItemDetail = (props) => {
    const { producto, loading } = props


    return (
        <div className="item-container">
            {

                loading ? <h2>Cargando...<br></br>
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span></Spinner></h2>
                    :

                    <div className="item-detail">
                        <img src={producto.imagen} width="800px" alt="imagenProducto" />
                        <h2>Nombre: {producto.nombre}</h2>
                        <h3>Capitán: {producto.capitan}</h3>
                        <h3>Tripulantes: {producto.tripulantes}</h3>
                        <h3>Armamento: {producto.armamento}</h3>


                        <div className="detail">
                            <h5>Clase: {producto.clase}</h5>
                            <p>Id Producto: {producto.id}</p>
                            <p>{producto.descripcion}</p>
                            <p>Precio: Invaluable</p>
                        </div>



                    </div>
            }
        </div >
    )

}










