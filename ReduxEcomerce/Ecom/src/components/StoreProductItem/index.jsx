import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './index.css'

const StoreProductItem = () => {


    return (
        <Card style={{ width: '18rem' }}>
      <Card.Img  className='imgz' variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSplwqFoER38QniLdVAJJYIZ6KPP7tA2N8kyAwGpIQgXzAm84hY2IHpwav5vF1PkSs4s0o&usqp=CAU" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary"> Remove </Button>
      </Card.Body>
    </Card>
    )

}

export default StoreProductItem