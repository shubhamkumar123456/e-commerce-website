import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='navbar'>
     <ul>
        <li>Home</li>
        <li>Store</li>
        <li>About</li>
     </ul>
     <div className='button-div'>
     <button>Cart</button>
     <span>0</span>
     </div>
    </div>
  )
}

export default Navbar
