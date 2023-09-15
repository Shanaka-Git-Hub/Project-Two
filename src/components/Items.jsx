import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function Items({product}) {
    const navigate=useNavigate();
  return (
    <Card style={{ width: '10rem',margin:'10px 20px 10px 20px',height:'auto',padding:'0 10px 0 10px'}}>
      <Card.Img variant="top" src={product.image} width={'100px'} height={'150px'}/>
      <Card.Body className='d-flex align-items-center justify-content-around flex-column'>
        <Card.Title className='fs-6'>{product.title.substring(0,12)}</Card.Title>
        <Card.Text className='fs-6 fw-bold'>
          {product.price} $
        </Card.Text>
        <Button variant="btn btn-outline-success" size='sm'
        onClick={()=> navigate(`/item/${product.id}`)}>Buy Now</Button>
      </Card.Body>
    </Card>
  );
}

export default Items;