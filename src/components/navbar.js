import React from 'react';
import {Navbar,Container, NavItem} from 'react-bootstrap';
import {  NavLink } from 'react-router-dom';

const navbar = () => {
     const navStyle=({isActive})=>{
        return {
          fontWeight:isActive ? 'bold':'normal',
          backgroundColor :isActive ?'orange':'light'
        }
     }
  return (
    <div>
      <Navbar expand="lg" className='bg-light'>
   
        <Container className='' style={{justifyContent:"space-between",}}> 
        <Navbar.Toggle className='ms-auto'/>
        <div className='nav'>
        <Navbar.Collapse id="basic-navbar-nav" className='' style={{padding:"20px"}}>
         <NavItem>
         <NavLink  style={navStyle} to="/home">Home</NavLink>
         </NavItem>
         <NavItem>
         <NavLink to="/about" style={navStyle}>About</NavLink>
         </NavItem>
        <NavItem>
         <NavLink to="/contact"  style={navStyle}>Contact</NavLink>
        </NavItem>
          </Navbar.Collapse>
        </div>
       
        </Container>
   
      </Navbar>
    </div>
  )
}

export default navbar;
