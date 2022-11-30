import React from 'react'
import './Button.css'
const Button = (props) => {
  return (
    
    <a className='Formbutton'>
        <button style={{backgroundColor:props.background}}>{props.title}</button>
    </a>
   
  )
}

export default Button