import React, {useState , useEffect} from 'react'
import axios from 'axios';
import {navItems , BranchSubmenu}  from "../Data/Menu";
import Navbar from '../Component/Navbar/Navbar'
import LoginForm from '../Component/loginSignup/LoginForm';
const Home = () => {
    const [show, setShow] = useState(false);
    const [user, setUser] = useState([]);
    // useEffect(()=>{
    //   async function getAllUser(){
    //     try{
    //        const user = await axios.post("http://127.0.0.1:8000/login/")
    //        console.log(user.data)
    //        setUser(user.data)
    //     }
    //     catch (error) {
    //       console.log("error page")
    //     }
    //   }
    //   getAllUser();
    // }, [])
  return (
    <>
    <Navbar menu={navItems} submenu={BranchSubmenu} />
    <button >click Me</button>
    <LoginForm />
    </>
  )
}

export default Home