import React from 'react'

const Navigation = () => {
  return (
    <div>
         <nav className='container'>
        <div className="logo">
          <img src="images\brand_logo.png" alt="brand_logo" />
        </div>
        <ul>
          <li href="#">Menu</li>
          <li href="#">Location</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
        </ul>
        <button className='login-btn'>Login</button>
      </nav>
    </div>
  )
}

export default Navigation