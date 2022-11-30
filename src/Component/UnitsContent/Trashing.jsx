import React, {useEffect} from 'react'
import './Trashing.css'
import {FaChevronRight} from  'react-icons/fa'
import { useNavigate, useParams } from 'react-router-dom' ; 


const Trashing = () => {
    const {location} = useParams()
  return (
    <div className='location_container'>
        <a href='/'>Datastructure</a><FaChevronRight/>
        <a href='/'>Introduction</a><FaChevronRight/>
        <a href='/'>Arrya</a><FaChevronRight/>
    </div>
  )
}

export default Trashing;