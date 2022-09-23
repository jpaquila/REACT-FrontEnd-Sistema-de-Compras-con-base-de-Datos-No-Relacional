import { Alerta } from "../../components/Alerta/Alerta"
import logo from "../../logo.svg";

export const Logo = () => {
    return (
        < div className="App-header" >
            <img src={logo} className="App-logo" alt="logo" />
            <Alerta titulo="Star Trek Project - by J.P. Aquila" ></Alerta>
            <Alerta titulo="REACT" color="red"></Alerta>
            <h4>-> <a href="https://www.linkedin.com/in/jpaquila/" target="_blank" rel="noopener noreferrer"> Visitar mi Linkedin</a></h4>
        </div >
    )
}