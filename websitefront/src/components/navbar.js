
import {Navbar,Container, NavItem,Nav} from 'react-bootstrap';
import { NavLink as Link} from 'react-router-dom';
import Logo from "../assets/logos.png";

import '../styles/navbar.css';
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
        <Container id='leftSide'>
        <Navbar.Brand><img src={Logo} alt='Logo'/> Kart </Navbar.Brand>
        </Container>
      <Container className="w-100" id='rightSide' >
        <Nav className="" id='listItem1'> 
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
          <Link to='/signup' className="btn btn-danger ms-3" id='btnStyle'>Signup</Link>
        </Container>
       
    </Navbar>
    
  )
}

export default navbar;
