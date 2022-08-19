import "./Alerta.css";

//props recibe el objeto de las propiedades que enviamos desde la app
export function Alerta(props) {


    return (
        //etiqueta que me encapsula todo el componente. Opcion a Div.
        <>
            <p style={{ color: props.color }}>
                <h3>{props.titulo}</h3>
            </p>
        </>
    );
}

