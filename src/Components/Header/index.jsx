import React from 'react'
import './index.css'
import logo from '../../assets/logo2.png'
function Header() {

  return (
    <div className='header'>
        <a href="/" className='link'>
          <img src={logo} className='logo'/>
          <h1 className='header-title'>
            Facilita Genética
          </h1>
        </a>
      </div>
      
    
  )
}

 export default Header


