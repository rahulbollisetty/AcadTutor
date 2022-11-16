import React, {useState} from 'react'
import Button from './Button';
import Input from './Input'
import './SignupForm.css'
const SignupForm = () => {
  const[teacher,setTeacher] = useState(false)
  const[student,setStudent] = useState(true)
  const[slide,setSlide] = useState(true)
  const updateTeacherForm = () =>{
         setSlide(false)
         setTeacher(true);
         setStudent(false);
  }
  const updateStudentForm = () =>{
    setSlide(true)
    setTeacher(false);
    setStudent(true);
}
  
  return (
    <>
      <div className='wrapper'>
        <div className='form-container'>
          <div className="slide-controls">
            <div id='btn' className={slide ? "left" : "right"}></div>
            <input type="button" value="Student" onClick={updateStudentForm} ></input>
            <input type="button" value="Teacher" onClick={updateTeacherForm}></input>
          </div>
          <div className='innerForm-container'>
            <form action="#" className={student ? "student_form" : "student_signup"}>
              <Input type="txt" placeholder="Your Name" />
              <Input type="email" placeholder="Email Address" />
              <div className='pswd_box'>
              <Input type="password" placeholder="Password" />
              <Input type="password" placeholder="Confirm Password" />
              </div>
              <div className='select_box'>
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
              </div>
              <Button background="3f6b80" title="Sign Up" />
              <p className="signup-link">Already have an account? <a href="/">Sign in</a></p>
              </form>
            <form action="#" className={teacher ? "teacher_form" : "teacher_signup "}>
              <Input type="txt" placeholder="Your Name" />
              <Input type="email" placeholder="Email Address" />
              <div className='pswd_box'>
              <Input type="password" placeholder="Password" />
              <Input type="password" placeholder="Confirm Password" />
              </div>
              <Input type="text" placeholder="Referral Code" />
              <Button background="3f6b80" title="Sign Up" />
              <p className="signup-link">Already have an account? <a href="/">Sign in</a></p>
            </form>
          </div>
        </div>
      </div>
    </>
  )
};

export default SignupForm;