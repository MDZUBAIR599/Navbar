import React from 'react'
import { NavLink } from 'react-router-dom'

 function Navbar() {
  return (
     <div className='navbar'>
       <h1 className='logo'>LOGOBERRY</h1>
           {/* <img src={require('./logo.png')} alt='logo' />
            */}
           
          <NavLink className='links'  to='/'>
            
        </NavLink>
        <div className='navlink'>
            <NavLink className='links' to="/Services">Services</NavLink>
            <NavLink className='links' to="/Projects">Projects</NavLink>
            <NavLink className='links' to="/About">About</NavLink>
            
        
        </div>
        <div>
        <button className='btn'>contact</button>
        </div>
       
     </div>
  );
}
 export default Navbar;