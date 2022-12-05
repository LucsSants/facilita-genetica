import React from 'react'
import './index.css'
import logo from '../../assets/logo2.png'
import { Link } from 'react-router-dom'
function Header() {

  return (
    <div className='header'>
        <Link to={'/'} className='link'>
          <img src={logo} className='logo'/>
          <h1 className='header-title'>
            Facilita Genética
          </h1>
        </Link>
      </div>
      
    
  )
}
 export default Header


