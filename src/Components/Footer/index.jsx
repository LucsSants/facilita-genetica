import React from 'react'
import './index.css'
import logo from '../../assets/logo2.png'
import logoAges from '../../assets/agesLogo.png'
function Footer() {

  return (
    <footer>
      <p>
        Site construido para a realização de um trabalho.
      </p>

      <a href="https://www.ages.edu.br/unidades/paripiranga/" target={'_blank'}>
        <img src={logoAges} alt="LogoAges" />
      </a>
    </footer>
  )
}

 export default Footer


