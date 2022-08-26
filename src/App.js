import logo from "./logo.svg";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer"
import { Alerta } from "./components/Alerta/Alerta.js"; //mi componente creado
import { NavBar } from "./components/NavBar/NavBar.js";
import Button from "react-bootstrap/Button";


function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer className='Accordion' greeting="Click aquí para ocultar/desocultar el menú del Carrito"></ItemListContainer>
      <div>
        <nav className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Alerta titulo="Proyecto de Muestra" ></Alerta>
          <Alerta titulo="REACT" color="red"></Alerta>
          <Button variant="outline-info" style={{ marginTop: "30px" }}>CONTINUAR</Button>{" "}
        </nav>
      </div>
    </div >
  );
}

export default App;

//CONTROL + C (en la terminal, detiene a react)
//npm start (start react)
//BootStrap: https://react-bootstrap.netlify.app/getting-started/introduction/
//CONTORL + ]  = comenta