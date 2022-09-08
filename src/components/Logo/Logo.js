import { Alerta } from "../../components/Alerta/Alerta"
import logo from "../../logo.svg";

export const Logo = () => {
    return (
        < div className="App-header" >
            <img src={logo} className="App-logo" alt="logo" />
            <Alerta titulo="Proyecto de Muestra" ></Alerta>
            <Alerta titulo="REACT" color="red"></Alerta>
        </div >
    )
}