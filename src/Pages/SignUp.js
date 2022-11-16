import React,{useEffect , useState} from 'react'
import SignupForm from '../Component/loginSignup/SignupForm'
import signupImg from '../Images/signupImg.png'
import LoginForm from '../Component/loginSignup/LoginForm';
import './Signup.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
const SignUp = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    AOS.init(
      {
        offset:180,
        duration: 600,
        easing:"linear",
        delay:100,
      }
    );
  }, [])
  return (
    <>
    <main className='signup_page'>
      <div className='Img_container'>
        <img src={signupImg} alt=""></img>
      </div>
      <div className='form_container'>
       <SignupForm/>
      </div>
    </main>
    <LoginForm show={show} showhide={setShow}/>
    </>
  )
}

export default SignUp