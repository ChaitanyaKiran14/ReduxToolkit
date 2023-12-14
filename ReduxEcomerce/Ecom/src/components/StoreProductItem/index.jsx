import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../Redux/Slices/cartSlice';
import './index.css'

const StoreProductItem = () => {

  const dispatch = useDispatch()
  const cartProds = useSelector(state => state.cart )

  const removeItem = (id) => {
    dispatch(removeFromCart(id))
    console.log(id)

  } 




    return (
      <div className='container'>
        <div className='row'>

        <h1>Items in Cart</h1>
        {cartProds.map(each => (
          
      <Card key={each.id} style={{ width: '18rem' }}>
      <Card.Img  className='imgz' variant="top" src= {each.image} />
      <Card.Body>
        <Card.Title>{each.title}</Card.Title>
        <Card.Text>
         INR :  {each.price}
        </Card.Text>
        <Button onClick={() => removeItem(each.id) } variant="danger"> Remove </Button>
      </Card.Body>
    </Card>
          
        ))}
        </div>
      </div>
      
    )

}

export default StoreProductItem