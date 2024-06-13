import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'
function Header()
{
  
    return(
        <div>
             <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
           <Link to='/' style={{textDecoration:'none'}}> <Nav.Link href="#home">Add</Nav.Link></Link>
            <Link to='/viewperson'style={{textDecoration:'none',color:'black'}}><Nav.Link href="#link">View</Nav.Link></Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    )
}
export default Header;