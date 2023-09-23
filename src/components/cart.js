import { useContext} from "react";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import del from "../assets/delate.png"

const Cart = () => {
   
    const { cart, clearCart, totalQuantity, total, removeItem } = useContext(CartContext)
    if (totalQuantity === 0) {
        return (
            <div>
                <h1>No hay Productos en el Carrito</h1>
                <Button variant="dark" className='Button'><Link to='/' className='nav-link'>Agregar Productos</Link></Button>
            </div>
        )
    }
   
    return (
        <Container>
            <div><h1>Productos en Carrito</h1></div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                        <th>Sub-Total</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map(item => (
                        <tr key={item.id}>
                            <td>{item.nombre}</td>
                            <td>{item.quantity}</td>
                            <td>${item.precio}</td>
                            <td>${item.quantity * item.precio}</td>
                            <th><Button variant="" className='Button' onClick={() => removeItem(item.id)}><img src={del} alt="delate" className="del" /></Button></th>
                        </tr>
                    ))}
                    <tr>
                        <td>Total</td>
                        <td></td>
                        <td></td>
                        <td>${total()}</td>
                        <th><Button variant="warning" className='Button' onClick={() => clearCart()}>Limpiar Carrito</Button></th>
                    </tr>
                </tbody>
            </Table>
            <Button variant="dark" className='Button'><Link to='/' className='nav-link'>Agregar Productos</Link></Button>
            <Button variant="dark" className='Button'><Link to='/checkout' className='nav-link'>Finalizar Compra</Link></Button>
        </Container>
    )
}

export default Cart
