import React from 'react'
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux'
import "./Button.css";
import { showHide } from '../../features/Reducer';

const Button = (props) => {
  const dispatch = useDispatch()

  if(props.title === "SignIn"){
    return(
      <button className={props.cname} onClick={()=>dispatch(showHide(true))} >{props.title}</button>
    )
  }
  return(
  <Link to={props.path}>
    <button className={props.cname}>{props.title}</button>
  </Link>
  )

};

export default Button