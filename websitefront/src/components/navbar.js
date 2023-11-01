
import {Navbar,Container, NavItem,Nav} from 'react-bootstrap';
import { NavLink as Link} from 'react-router-dom';
import './navbar.css';
const navbar = () => {
     const navStyle=({isActive})=>{
        return {
          fontWeight:isActive ? 'bold':'normal',
          // textDecoration:isActive ? 'underline':'none',
          backgroundColor :isActive ?'lavender':'',
          textDecoration:'none',
          color:'black',
         
        
        }
     }
   
  return (
      <Navbar expand="lg" className="navbars">
      <Container className="me-auto"  id=''>
        <Navbar.Brand>MO Kart</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='listItem'>
        <Nav className="me-auto listItem1" id='listItem1' > 
        <NavItem className='item'>
         <Link  style={navStyle} to="/home">Home</Link>
         </NavItem>
         <NavItem className='item'>
         <Link to="/about" style={navStyle}>About</Link>
         </NavItem>
        <NavItem className='item'>
         <Link to="/contact"  style={navStyle}>Contact</Link>
        </NavItem>
          </Nav>
        </Navbar.Collapse>
        </Container>
        <Link to='/signup' className="btn btn-danger me-5" id='btnStyle'>Signup</Link>
    </Navbar>
    
  )
}

export default navbar;
