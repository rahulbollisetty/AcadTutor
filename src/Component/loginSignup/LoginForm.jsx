import React from 'react'
import "./Login.css"
import Input from './Input'
import Button from './Button'
import {FaTimes} from  'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { showHide } from '../../features/Reducer'
const LoginForm  = (props) => {

  const showLogin = useSelector((state=>state.showLoginSlice.showHide));
  const dispatch = useDispatch();
  if( ! showLogin ){
    return null
  }
  return (
  <div className='LoginForm_Container'>
    <div className='Loginform_Wrapper'>
       <button className='crossbtn' onClick={()=> dispatch(showHide(false))}><FaTimes/></button>
        <h2>Login Page</h2>
        <form className='LoginForm'>
           <Input type="email" placeholder="Email Address"/>  
           <Input type="password" placeholder="Password"/> 
           <a href='/' className='FP'>Forgot Password ?</a>
           <Button background="#3f6b80" title="Login"/>
           <p>don't have account ? <a href='/'>Signup Now</a></p>
        </form>
    </div>
  </div>
  )
}

export default LoginForm