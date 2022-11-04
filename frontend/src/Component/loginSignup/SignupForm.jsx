import React, {useState} from 'react'
import Button from './Button';
import Input from './Input'
import './SignupForm.css'
const SignupForm = () => {
  const[teacher,setTeacher] = useState(false)
  const[student,setStudent] = useState(false)
  return (
    <>
      <div className='wrapper'>
        <div className='form-container'>
          <div className="slide-controls">
            <input type="button" value="Teacher" onClick={()=>{setTeacher(true)}} ></input>
            <input type="button" value="Student" onClick={()=>{setStudent(true)}}></input>
          </div>
          <div className='innerForm-container'>
            <form action="#" className={teacher ? "teacher_signup " : ""}>
              <Input type="txt" placeholder="Your Name" />
              <Input type="email" placeholder="Email Address" />
              <Input type="password" placeholder="Password" />
              <Input type="password" placeholder="Confirm Password" />
              <Input type="text" placeholder="Referral Code" />
              <Button background="3f6b80" title="Sign Up" />
              <p className="signup-link">already have account? <a href="">SignIn Now</a></p>
            </form>
            <form action="#" className={student ? "student_signup" : ""}>
              <Input type="txt" placeholder="Your Name" />
              <Input type="email" placeholder="Email Address" />
              <Input type="password" placeholder="Password" />
              <Input type="password" placeholder="Confirm Password" />
              <select>
                <option value="0">Branch</option>
                <option value="CS">CS</option>
                <option value="AI">AI</option>
                <option value="ML">ML</option>
                <option value="EEE">EEE</option>
                <option value="ET&T">ET&T</option>
                <option value="Civil">Civil</option>
                <option value="Mechanical">Mechanical</option>
              </select>
              <select>
                <option value="0">Semester</option>
                <option value="1st">1st</option>
                <option value="2nd">2nd</option>
                <option value="3rd">3rd</option>
                <option value="4th">4th</option>
                <option value="5th">5th</option>
                <option value="6th">6th</option>
                <option value="7th">7th</option>
                <option value="8th">8th</option>
              </select>
              <Button background="3f6b80" title="Sign Up" />
              <p className="signup-link">already have account? <a href="">SignIn Now</a></p>
            </form>
          </div>
        </div>

      </div>

      {/* <div className="wrapper">
          <h2>Sign Up</h2>
        <div className="form-container">
          <div className="slide-controls">
            <input type="button" value="Teacher" ></input>
            <input type="button" value="Student" ></input>
          </div>
          <div className="form-inner teacher">
          <form action="#" className="teacher_signup">
              
                <div className="field">
                  <input type="password" placeholder="Password" required />
                </div>
                <div className="pass-link"><a href="#">Forgot password?</a></div>
                <div className="field btn">
                  <div className="btn-layer"></div>
                  <input type="submit" value="Login" />
                </div>
                <div className="signup-link">Not a registered Student? <a href="">Signup now</a></div>
          </form>
            <form action="#" className="signup">
                <div className="field">
                  <input type="text" placeholder="Email Address" required />
                </div>
                <div className="field">
                  <input type="password" placeholder="Password" required />
                </div>
                <div className="pass-link"><a href="#">Forgot password?</a></div>
                <div className="field btn">
                  <div className="btn-layer"></div>
                  <input type="submit" value="Login" />
                </div>
                <div className="signup-link">Not a registered Teacher? <a href="">Signup now</a></div>
             </form>
        </div>
      </div> */}
    </>
  )
};

export default SignupForm;