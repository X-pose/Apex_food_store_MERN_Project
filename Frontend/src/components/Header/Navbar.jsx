import React from 'react'
import './Navbar.css'
import food_logo from '../../assets/mylogo.png'// import the logo image

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={food_logo} alt="" className='LOGO'/>
         <h1 className='name'>APEX</h1>
        <ul>
            <li className='nav_category' href="#">Home</li> 
            <li className='nav_category' href="#">Food & Beverage</li>
            <li className='nav_category' href="#">Cart</li>
            <li className='nav_category' href="#">Contact Us</li>
            <li className='nav_category' href="#">Login/Signup</li>
        </ul>
    </div>
  )
}

export default Navbar