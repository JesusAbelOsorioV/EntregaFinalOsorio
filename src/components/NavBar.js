import '../App.css';
import logok from '../assets/kuroS.png';
import CartWidget from './cartWidget';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import datos from './data/DataSushi.json'

const categorias = datos.map(items => items.categoria)

const uniqueCategoria = new Set(categorias)
console.log(uniqueCategoria)

const NavBar = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <img src={logok} alt="logo" className="logo" />
        <Nav className="me-auto">
          <Link className='nav-link' to="/">Inicio</Link>
          
          {[...uniqueCategoria].map(categoria =>(
            <Link key={categoria} className='nav-link' to={`/categoria/${categoria}`}>{categoria}</Link>
          ))}
          
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>

  )
}

export default NavBar