import React from 'react'
import './Subject.css'
const Subject = (props) => {
  return (
     <div className='Subject'>
        <img src={props.img} alt={props.name} className="sub-img"></img>
        <h2 className='sub-name'>{props.name}</h2>
        <p className='sub-desc'>{props.desc}</p>
        <a className='btn' to='/branch/content'>Start Learning</a>
     </div>
  )
}

export default Subject