import React from 'react'
import "./Input.css"
const Input = (props) => {
  return (
    <input type={props.type} placeholder={props.placeholder}></input>
  )
}

export default Input