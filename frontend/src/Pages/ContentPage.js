import React from 'react'
import Navbar2 from '../Component/Navbar/Navbar2'
import UnitContent from '../Component/UnitsContent/UnitContent'
import Trashing from '../Component/UnitsContent/Trashing'

import { useNavigate, useParams } from 'react-router-dom' ;
const ContentPage = () => {
  const {location} = useParams()
  return ( 
    <section className='content_page'>
        <Navbar2/>
        <Trashing/>
        <UnitContent/>
    </section>
  )
}

export default ContentPage;