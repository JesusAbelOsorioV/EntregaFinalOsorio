import { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import ItemCount from "./ItemCount/ItemCount"
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';

const ItemDetail = ({ id, nombre, detalle, img, categoria, stock, precio }) => {
  const [quantityAdded, setQuantityAdded] = useState(0)

  const {addItem} = useContext(CartContext)
  
  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity)

    const item ={
      id, nombre, precio
    }
    addItem(item, quantity)
  }
  return (
    <div className='detailcards'>
      <Card className='cards' style={{ display: 'flex', flexWrap:'nowrap',flexDirection:'row' , width: '18rem' }}>
        <Card.Img src={img} className='card-img' />
        <Card.Body className='card-body'>      
          <Card.Title>{nombre}</Card.Title>
          <Card.Text>Descripcion: {detalle}</Card.Text>
          <Card.Text>Precio: ${precio}</Card.Text>
          <Card.Text>Cantidad: {stock}</Card.Text>
          <Card.Text>Categoria: {categoria}</Card.Text>
          {
            quantityAdded > 0 ? (
              <div>
              <Button variant="dark" className='Button'>
                <Link to='/cart' className='nav-link'>Finalizar Compra</Link>
              </Button>
              </div>
            ) : (
              <ItemCount inicial={1} stock={stock} onAdd={handleOnAdd} />
            )
          }  
        </Card.Body>  
      </Card>
    </div>
  )
}

export default ItemDetail