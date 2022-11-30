import React from 'react'
import {Link} from 'react-router-dom';
import './Subject.css'
const Subject = (props) => {
  return (
     <div className='Subject'>
        <img src={props.img} alt={props.name} className="sub-img"></img>
        <h2 className='sub-name'>{props.name}</h2>
        <p className='sub-desc'>{props.desc}</p>
        <Link className='btn' to="/CS/7/ML" >Start Learning</Link>
     </div>
  )
}

export default Subject