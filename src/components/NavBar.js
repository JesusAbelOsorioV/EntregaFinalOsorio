import '../App.css';
import logok from '../assets/kuroS.png';
import CartWidget from './cartWidget';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <img src={logok} alt="logo" className="logo" />
        <Nav className="me-auto">
          <Nav.Link href="#">Inicio</Nav.Link>
          <Nav.Link href="#">Menu</Nav.Link>
          <Nav.Link href="#">Promociones</Nav.Link>
        </Nav>
      <CartWidget />
      </Container>
    </Navbar>

  )
}

export default NavBar