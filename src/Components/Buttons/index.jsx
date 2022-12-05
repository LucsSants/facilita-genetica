import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'
function Buttons({backLink, backName, nextLink, nextName, last}) {
  return (
    <div className='buttons-container'>

      <div className='wrapper'>
      <Link  to={backLink} className='back-button'>
        Voltar
      </Link>
      <p  className='span'>
        {backName}
      </p>
      </div>
    {last ? 
    <div className='wrapper'>
    <Link to={'/'} className='next-button'>
     Início
    </Link>
    <p  className='span'>
      {nextName}
    </p>
    </div>
    : 
    <div className='wrapper'>
    <Link to={nextLink} className='next-button'>
      Próximo Módulo
    </Link>
    <p  className='span'>
      {nextName}
    </p>
    </div>
    }
    </div>
  )
}
 export default Buttons


