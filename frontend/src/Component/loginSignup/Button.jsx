import React from 'react'

const Button = (props) => {
  return (
    <a className='button'>
        <button style={{backgroundColor:props.background}}>{props.title}</button>
    </a>
  )
}

export default Button