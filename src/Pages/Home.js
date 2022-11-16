import React, {useState} from 'react'
import {navItems , BranchSubmenu}  from "../Data/Menu";
import Navbar from '../Component/Navbar/Navbar'
import LoginForm from '../Component/loginSignup/LoginForm';

const Home = () => {
    const [show, setShow] = useState(false);
  return (
    <>
    <Navbar menu={navItems} submenu={BranchSubmenu} />
    <button onClick={()=>setShow(true)}>click Me</button>
    <LoginForm show={show} showhide={setShow}/>
    </>
  )
}

export default Home