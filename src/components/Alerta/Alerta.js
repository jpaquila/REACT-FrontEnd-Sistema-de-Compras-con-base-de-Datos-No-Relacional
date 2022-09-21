

//props recibe el objeto de las propiedades que enviamos desde la app
export function Alerta(props) {
    const { color, titulo } = props //desglozamos todos los atributos enviados como parámetros Props

    return (
        // <> </> etiqueta que me encapsula todo el componente. Opcion a Div.
        <>
            <p style={{ color: color }}>
                <h4>{titulo}</h4>
            </p>
        </>
    );
}

