import React from 'react'
import './Unit.css'
import axios from 'axios';
import Cookies from 'js-cookie';
import {FaRegPlayCircle} from 'react-icons/fa';
axios.defaults.withCredentials = true;
const Unit = () => {
  const GetUnits = async () => {
    try {
      
      console.log(Cookies.get('csrftoken'))
      const response = await axios.get(
        `http://127.0.0.1:8000/content/6386186dc0545823cd2e2930/get_unit`,{'withCredentials': true }
      ); 
      console.log(response.data);
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