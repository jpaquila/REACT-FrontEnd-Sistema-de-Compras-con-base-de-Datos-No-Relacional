
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer"
import { NavBar } from "./components/NavBar/NavBar.js";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import DataBaseStarWars from "./components/DataBase/DatabaseStarWars"
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import { PaginaContacto } from "./components/Temas/PaginaContacto";
import { CartWidget } from "./components/CartWidget/CartWidget"
import { Logo } from "./components/Logo/Logo";

function App() {
  return (
    <div className="App" >
      <BrowserRouter >
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="*" element={<ItemListContainer />} />
          <Route path="/naves/:tipoNave" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/contacto" element={<PaginaContacto />} />
          <Route path="/cart" element={<CartWidget />} />
        </Routes>

        {/* <DataBaseStarWars /> */}

        <Logo />
      </BrowserRouter >
    </div >

  );
}

export default App;

//CONTROL + C (en la terminal, detiene a react)
//npm start (start react)
//BootStrap: https://react-bootstrap.netlify.app/getting-started/introduction/
//CONTORL + ]  = comenta