
import {Navbar,Container, NavItem} from 'react-bootstrap';
import { NavLink as Link} from 'react-router-dom';
const navbar = () => {
     const navStyle=({isActive})=>{
        return {
          fontWeight:isActive ? 'bold':'normal',
          // textDecoration:isActive ? 'underline':'none',
          backgroundColor :isActive ?'lavender':'whitesmoke',
          textDecoration:'none',
          
        }
     }
   
  return (
    <div>
      <Navbar expand="lg" className='bg-light'>
        <Container className='' > 
        <Navbar.Toggle className='me-auto' id="menuIcon"/>
        <div className='' id='navbar-nav' style={{borderRadius:"10px"}}>
        <Navbar.Collapse id="basic-navbar-nav" className=''  style={{padding:"20px 20px",}}>
         <NavItem>
         <Link  style={navStyle} to="/home">Home</Link>
         </NavItem>
         <NavItem>
         <Link to="/about" style={navStyle}>About</Link>
         </NavItem>
        <NavItem>
         <Link to="/contact"  style={navStyle}>Contact</Link>
        </NavItem>
          </Navbar.Collapse>
        </div>
        </Container>
        <Link to='/signup' className="btn btn-danger me-3">Signup</Link>
      </Navbar>
    </div>
  )
}

export default navbar;
