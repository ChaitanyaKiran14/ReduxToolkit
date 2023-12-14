import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaOpencart } from "react-icons/fa6";
import {Link} from 'react-router-dom'

const Header = () =>  {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">AmaZone</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to = "/"> Products  </Link>      
          </Nav>
          <Nav>
          <Link to="/cart" style={{ fontSize: '40px', display: 'flex', alignItems: 'center' }}>
              <FaOpencart style={{ marginRight: '10px' }} /> 0
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;