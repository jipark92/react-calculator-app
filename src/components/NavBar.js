import {Link} from 'react-router-dom'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



export default function NavBar() {
    return (
            <Navbar collapseOnSelect expand="lg" bg="success" variant="dark" className='title-container'>
                <Container>
                <Link to="/" className='text-light'>React-Calculator-App</Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav>
                    <Link to='/about' className='text-light'>About</Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
    )
}