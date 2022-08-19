import logo from "./logo.svg";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer"
import { Alerta } from "./components/Alerta/Alerta.js"; //mi componente creado
import { NavBar } from "./components/NavBar/NavBar.js";
import { Texto } from "./components/Texto/Texto";
import Button from "react-bootstrap/Button";


function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Este es el Item List Container con un buen saludo 'greeting'. 
      Haga click acá y sorpéndase. "></ItemListContainer>

      <div>

        <nav className="App-header">

          <img src={logo} className="App-logo" alt="logo" />
          <h2>React - Clase 4 - Presentación 3</h2>

          <Alerta titulo="Proyecto de Muestra" ></Alerta>
          <Alerta titulo="REACT" color="red"></Alerta>
          <Texto mensaje="Componente Children enviado desde el Padre ">
            <Button>Boton Children</Button>
          </Texto>
          <Texto mensaje="Enviando otros elementos children desde el HTML al componente (la siguiente línea y los dos botones).">
            <p>"Si no se coloca ningún elemento, el children se envía vacío, pero siempre está."</p>
            <Button style={{ margin: "10px" }}>Aceptar</Button>
            <Button>Cancelar</Button>
          </Texto>
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
