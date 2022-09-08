
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { CartWidget } from "../CartWidget/CartWidget";
import { Link } from "react-router-dom"
import icono from "../../Assets/ico.png"

export function NavBar() {
    return (

        <Navbar bg="info" expand="xl" className="fixed-top">
            <Container>
                <Link to={"/"}> <img src={icono} width="25 px" alt="icono" style={{ marginRight: "40px" }} /></Link>

                <Link to="/" className="textoNavbar">Inicio</Link>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav >

                        <Nav.Link ><Link to="/contacto" className="textoNavbar">Quien soy</Link></Nav.Link>
                        <NavDropdown className="textoNavbar" title="Tipos de Naves" id="basic-nav-dropdown">
                            <NavDropdown.Item>
                                <Link to="/naves/combate" className="textoNavbar">Combate </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item><Link to="/naves/exploracion" className="textoNavbar">Exploración</Link></NavDropdown.Item>
                        </NavDropdown>

                    </Nav>

                    {/* SELECTOR DE ITEMS POR ID A IMPLEMENTAR 
                    <div style={{ margin: "0 auto" }}>
                        <button style={{ marginRight: "10px" }} className='StockClass' >Nave Anterior</button>
                        <button className='StockClass' >Nave Siguiente</button>
                        <p style={{ color: "green", fontWeight: "bold" }}>{ }</p>
                        <p style={{ color: "green" }}>{ }</p>
                    </div> */}

                </Navbar.Collapse>
                <CartWidget />
            </Container>

        </Navbar >
    );
}
