import React from 'react'
import './Container.css';
import cs from '../../Images/CSSVG.svg';
const Container = () => {
  return (
    <div className='branchHero_con'>
        <div className='ImgBx'>
           <img src={cs}/>
        </div>
        <div className='heading'>
            <h1>Computer Science Engineering</h1>
        </div>
    </div>
  )
}

export default Container