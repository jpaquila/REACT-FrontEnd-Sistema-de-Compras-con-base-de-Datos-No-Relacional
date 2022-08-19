import "./navBar.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { CartWidget } from "../CartWidget/CartWidget";

export function NavBar() {
    return (

        <Navbar bg="info" expand="xl" className="fixed-top">
            <Container>
                <Navbar.Brand href="#Inicio" id="Inicio">Inicio</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#QuienSoy" className="menus">Quien soy</Nav.Link>
                        <NavDropdown className="menus" title="Libros" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#titulosLeidos">Títulos leídos</NavDropdown.Item>
                            <NavDropdown.Item href="titulosPorLeer">
                                Títulos por leer
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#listaDeseos">Mi lista de deseos</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#opiniones">
                                Opiniones
                            </NavDropdown.Item>
                        </NavDropdown>

                    </Nav>
                </Navbar.Collapse>
                <CartWidget></CartWidget>
            </Container>

        </Navbar >
    );
}
