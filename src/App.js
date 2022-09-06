import logo from "./logo.svg";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer"
import { Alerta } from "./components/Alerta/Alerta.js"; //mi componente creado
import { NavBar } from "./components/NavBar/NavBar.js";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import Button from "react-bootstrap/Button";
import DataBaseStarWars from "./components/DataBase/DatabaseStarWars"
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import { PaginaContacto } from "./components/Temas/PaginaContacto";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="*" element={<ItemListContainer />} />
          <Route path="/naves/:tipoNave" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/contacto" element={<PaginaContacto />} />
        </Routes>

        {/* <DataBaseStarWars /> */}

        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Alerta titulo="Proyecto de Muestra" ></Alerta>
          <Alerta titulo="REACT" color="red"></Alerta>
          <Button variant="outline-info" style={{ marginTop: "30px" }}>CONTINUAR</Button>{" "}
        </div>
      </BrowserRouter >
    </div >

  );
}

export default App;

//CONTROL + C (en la terminal, detiene a react)
//npm start (start react)
//BootStrap: https://react-bootstrap.netlify.app/getting-started/introduction/
//CONTORL + ]  = comenta