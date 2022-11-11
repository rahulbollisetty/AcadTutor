import React from 'react'
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
// import {show} from '../features/Reducer' ;
import "./Button.css";

const Button = (props) => {
  const {showhide} = useSelector(state => state.ShowHideNavbar);
  const dispatch = useDispatch()
  console.log(showhide)


  if(props.title === "SignIn"){
    return(
    
      <button className={props.cname}  >{props.title}</button>
    
    )
  }
  return(
  <Link to={props.path}>
    <button className={props.cname}>{props.title}</button>
  </Link>
  )

};

export default Button