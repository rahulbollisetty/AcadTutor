import React from 'react'
import './Unit.css'
import axios from 'axios';
import Cookies from 'js-cookie';
import {FaRegPlayCircle} from 'react-icons/fa';
const Unit = () => {
  const GetUnits = async () => {
    try {
      const response = await axios.post(
        `http://127.0.0.1:8000/content/6386186dc0545823cd2e2930/get_unit`,
        {
        },
        {
          headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": Cookies.get('csrftoken')
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