import { useState, useEffect } from 'react'
import '../App.css';
import logok from '../assets/kuroS.png';
import CartWidget from './cartWidget';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import {getFirestore, getDocs, collection} from "firebase/firestore";

const NavBar = () => {

  const [categorias, setCategorias] = useState([])
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const db = getFirestore();

    const refCollection = collection(db, "dataSushi")
    getDocs(refCollection)
    .then((snapshot) => {
      if (snapshot.size === 0) setProducts("no results")
      else {
        setProducts(
          snapshot.docs.map(doc => {
            return { id: doc.id, ...doc.data() };
          })
        )
      }  
    })
    }, []);

useEffect(() => {
  if(products.length) {
    const categories = products.reduce((acc, curr) => {
      if(acc.includes(curr.categoria)) {
        return [...acc]
      }
      return [...acc, curr.categoria]
    }, [])
    setCategorias(categories)
  }
}, [products])
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <img src={logok} alt="logo" className="logo" />
        <Nav className="me-auto">
          <Link className='nav-link' to="/">Inicio</Link>
          {categorias.map(categoria =>(
            <Link key={categoria} className='nav-link' to={`/categoria/${categoria}`}>{categoria}</Link>
          ))}
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  )
}

export default NavBar