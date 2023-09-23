import { getFirestore, collection, addDoc } from "firebase/firestore";
import { useState, useContext } from 'react'
import { CartContext } from "../contexts/CartContext";
import Container from "react-bootstrap/esm/Container";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";

const Checkout = () => {

    const [formValues, setFormValues] = useState({
        name: "",
        email: "",
        phone: "",
    })
    const [orderId, setOrderId] = useState("")
    const { cart, total, clearCart } = useContext(CartContext)
    const [validated, setValidated] = useState(false);
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };

    const handleChange = ev => {
        setFormValues(prev => ({
            ...prev,
            [ev.target.name]: ev.target.value,
        }))
    }

    const sendOrder = () => {
        const order = {
            buyer: formValues,
            items: cart,
            total: total(),
        };

        const db = getFirestore();
        const orderCollection = collection(db, "orders");

        addDoc(orderCollection, order)
            .then((doc) => {
                setOrderId(doc.id)
                console.log(doc.id)
                clearCart()
            });
            
    };

    if (orderId) {
        
        return (
            <div>
                <h1>Gracias por su compra</h1>
                <p>La orden con de tu pedido con el id: {orderId} fue creada!</p>
                <Button variant="dark" className='Button'><Link to='/' className='nav-link'>Realizar otra Order</Link></Button>
            </div>
        )
    }

    return (
        <Container>
            <div>
                <h2>Completa el Formulario</h2>
                <Form noValidate validated={validated} onClick={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control required type="text" placeholder="Nombre" onChange={handleChange} value={formValues.name} name="name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Email" onChange={handleChange} value={formValues.email} name="email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Telefono</Form.Label>
                        <Form.Control type="text" placeholder="Telefono" onChange={handleChange} value={formValues.phone} name="phone" aria-required required />
                    </Form.Group>
                    <Button variant="dark" onClick={sendOrder}>Finalizar Orden</Button>
                </Form>
            </div>
        </Container>
    )
}

export default Checkout