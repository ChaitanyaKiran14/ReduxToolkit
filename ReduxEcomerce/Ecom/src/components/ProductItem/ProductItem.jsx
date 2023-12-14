import Button from 'react-bootstrap/Button';
import { addToCart } from '../../Redux/Slices/cartSlice';
import { useDispatch } from 'react-redux';
import Card from 'react-bootstrap/Card';
import './index.css'


const ProductItem = (props) => {

  const {product} = props
  const dispatch = useDispatch()
  const { id, image, price, title } = product;

  const addItem = (product) => {
    dispatch(addToCart(product))

  }

  return (
    
      <Card className='random' key={id} style={{ width: '18rem' }}>
          <Card.Img className='imgz' variant="top" src={image} />
          <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text> INR : {price}</Card.Text>
              
          </Card.Body>
          <Card.Footer style={{backgroundColor : 'white'}}>
          <Button onClick={() => addItem(product)} variant="primary">Add To Cart</Button>

          </Card.Footer>
      </Card>
  );
}
 export default ProductItem