
/* ASI SE ENVIARIA DESDE EL PADRE
 /* <Texto mensaje="Componente Children enviado desde el Padre ">
            <Button>Boton Children</Button>
          </Texto>
          <Texto mensaje="Enviando otros elementos children desde el HTML al componente (la siguiente línea y los dos botones).">
            <p>"Si no se coloca ningún elemento, el children se envía vacío, pero siempre está."</p>
            <Button style={{ margin: "10px" }}>Aceptar</Button>
            <Button>Cancelar</Button>
          </Texto> */

//ASI LO RECIBE LE HIJO
export const Texto = (props) => {
    return (
        <div>
            <p>{props.mensaje}</p>
            {props.children}
        </div>
    )
}
