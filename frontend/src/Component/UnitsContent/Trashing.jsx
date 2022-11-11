import React, {useEffect} from 'react'
import './Trashing.css'
import { useNavigate, useParams } from 'react-router-dom' ; 


const Trashing = () => {
    const {location} = useParams()
  return (
    <div className='location_container'>
        {location}
    </div>
  )
}

export default Trashing;