import React from 'react'
import './index.css'

function MainContainer(props) {

  return (
    <div className='container' {...props}>
       {props.children}
    </div>
  )
}

 export default MainContainer


