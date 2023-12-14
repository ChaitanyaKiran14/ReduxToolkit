import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './index.css'

const ProductItem = (props) => {
  const {product} = props
  const { id, image, price, title } = product;

  return (
    
      <Card className='random' key={id} style={{ width: '18rem' }}>
          <Card.Img className='imgz' variant="top" src={image} />
          <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text> INR : {price}</Card.Text>
              
          </Card.Body>
          <Card.Footer style={{backgroundColor : 'white'}}>
          <Button variant="primary">Add To Cart</Button>

          </Card.Footer>
      </Card>
  );
}
 export default ProductItem