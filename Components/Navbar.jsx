import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='container'>
        <div className="logo ">
          <h2 className='logo1'>tasty bites</h2>
        </div>

        <div>
          <ul className='navlinks'>
          <NavLink className={"nav-link"} to={"/about"}>About</NavLink>
          <NavLink className={"nav-link"} to={"/contact"}>Contact</NavLink>
          <button className='butt'><NavLink className={"nav-link"} to={"/Order Now"}>Order Now</NavLink></button>
          
         

          </ul>
        </div>
        </div>
         

        </nav>
  )
}

export default Navbar