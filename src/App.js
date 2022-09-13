
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer"
import { NavBar } from "./components/NavBar/NavBar.js";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
// import DataBaseStarWars from "./components/DataBase/DatabaseStarWars"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { PaginaContacto } from "./components/Temas/PaginaContacto";
import { Logo } from "./components/Logo/Logo";
import { CartProvider } from "./context/CartContext";
import { CartContainer } from "./components/CartContainer/CartContainer";
//IMPORTACION DE CONTEXTO


function App() {
  return (
    <div className="App" >
      <CartProvider>
        <BrowserRouter >
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="*" element={<ItemListContainer />} />
            <Route path="/naves/:tipoNave" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/contacto" element={<PaginaContacto />} />
            <Route path="/cart" element={<CartContainer />} />
          </Routes>

          {/* <DataBaseStarWars /> */}
          <Logo />
        </BrowserRouter >

      </CartProvider>
    </div >

  );
}

export default App;

//CONTROL + C (en la terminal, detiene a react)
//npm start (start react)
//BootStrap: https://react-bootstrap.netlify.app/getting-started/introduction/
//CONTORL + ]  = comenta