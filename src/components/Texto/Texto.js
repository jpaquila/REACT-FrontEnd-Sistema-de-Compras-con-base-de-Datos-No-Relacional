
export const Texto = (props) => {
    return (
        <div style={{ background: "black", borderRadius: "5px", margin: "10px", padding: "10px" }}>
            <p style={{ fontSize: "60%", font: "hanshand", color: "grey" }}>{props.mensaje}</p>
            {props.children}
        </div>
    )
}
