import logo from "./logo.svg";
import "./App.css";
import Alerta from "./components/Alerta/Alerta.js"; //mi componente creado
import NavBar from "./components/NavBar/NavBar.js";
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div>
        <nav className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>JUAN PABLO AQUILA</h1>
          <h2>React - Clase 3 - Presentación 2</h2>
          <Alerta />
          <Button variant="info">GRACIAS</Button>{" "}
        </nav>
      </div>
    </div>
  );
}

export default App;

//CONTROL + C (en la terminal, detiene a react)
//npm start (start react)
