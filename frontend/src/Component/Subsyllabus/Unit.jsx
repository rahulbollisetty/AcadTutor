import React from 'react'
import './Unit.css'
import axios from 'axios';
import {FaRegPlayCircle} from 'react-icons/fa';
const Unit = () => {
  const GetUnits = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/6383767a6c81e4d4547c6601/1`,
        {
          
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log({ BACKEND_RESPONSE: response });
    } catch (err) {
      console.error(err);
    }
  };
  return (

    <div className='unit_con'>
    <span>Unit-1 Introduction</span>
    <a><button type='button' onClick={GetUnits}><FaRegPlayCircle/>Start Learning</button></a>
    </div>
  )
}

export default Unit