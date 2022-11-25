import React from 'react'
import {navItems , BranchSubmenu}  from "../Data/Menu";
import Navbar from '../Component/Navbar/Navbar'
import LoginForm from '../Component/loginSignup/LoginForm';
const Home = () => {
  return (
    <>
    <Navbar menu={navItems} submenu={BranchSubmenu} />
    <LoginForm />
    </>
  )
}

export default Home