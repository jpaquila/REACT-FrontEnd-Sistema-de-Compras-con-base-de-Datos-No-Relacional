
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
    return (
        <Navbar bg="info" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Mi librería Personal</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Inicio</Nav.Link>
                        <Nav.Link href="#link">Quien soy</Nav.Link>
                        <NavDropdown title="Libros" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Títulos leídos</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Títulos por leer
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Mi lista de deseos</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Opiniones
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;