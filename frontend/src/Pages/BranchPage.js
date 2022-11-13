import React from 'react'
import Branch from '../Component/Branch/Branch'
import Navbar from '../Component/Navbar/Navbar'
import {navItems , BranchSubmenu}  from "../Data/Menu";
import SubDetail from "../Data/Sujectdetails";
const BranchPage = () => {
  return (
    <>
    <Navbar menu={navItems} submenu={BranchSubmenu} />
    <Branch subData = {SubDetail}/> 
    </>
  )
}

export default BranchPage