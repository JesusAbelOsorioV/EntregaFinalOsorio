import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Item({id, nombre, detalle, img, categoria, stock, precio}) {
  return (
    <Card className='cards' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>Categoria: {categoria}</Card.Text>
        <Card.Text>Precio: $ {precio}</Card.Text>
        <Link to={`/item/${id}`} className='buttondetalles'><Button variant="secondary">Ver Detalles</Button></Link>
      </Card.Body>
    </Card>
  );
}

export default Item
