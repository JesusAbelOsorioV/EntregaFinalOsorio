import Card from 'react-bootstrap/Card';
import ItemCount from "./ItemCount/ItemCount"

const ItemDetail = ({ id, nombre, detalle, img, categoria, stock, precio }) => {
  return (
    <div className='detailcards'>
      <Card className='cards' style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          <Card.Text>Descripcion:
            {detalle}
          </Card.Text>
          <Card.Text>Precio: ${precio}</Card.Text>
          <Card.Text>Cantidad: {stock}</Card.Text>
          <Card.Text>Categoria: {categoria}</Card.Text>
          <ItemCount inicial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad agregada', quantity)} />
        </Card.Body>
      </Card>
    </div>
  )
}

export default ItemDetail