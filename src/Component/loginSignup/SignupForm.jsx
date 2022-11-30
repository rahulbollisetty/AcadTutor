import React, { useState } from 'react'
import axios from "axios";
import './SignupForm.css'
const SignupForm = () => {
  const [newstudent, setNewstudent] = useState({
    student_name: "",
    student_email: "",
    student_pswd: "",
    student_cpswd: "",
    Branch: "",
    semester: ""
  })
  const AddNewStudent = (e) => {
    const { name, value } = e.target;
    setNewstudent((predata) => {
      return {
        ...predata,
        [name]: value
      }
    })
  }

  const [newteacher, setNewteacher] = useState({
    teacher_name: "",
    teacher_email: "",
    teacher_pswd: "",
    teacher_cpswd: "",
    teacher_refc: ""
  })
  const AddNewteacher = (e) => {
    const { name, value } = e.target;
    setNewteacher((predata) => {
      return {
        ...predata,
        [name]: value
      }
    })
  }


  console.log(newstudent)
  const [teacher, setTeacher] = useState(false)
  const [student, setStudent] = useState(true)
  const [slide, setSlide] = useState(true)
  const updateTeacherForm = () => {
    setSlide(false)
    setTeacher(true);
    setStudent(false);
  }
  const updateStudentForm = () => {
    setSlide(true)
    setTeacher(false);
    setStudent(true);
  }

  const AddStudent = async () => {
    console.log(" AddStudent Function is running");
    try {
      const response = await axios.post(
        `http://127.0.0.1:8000/accounts/register`,
        {
          email: newstudent.student_email,
          password : newstudent.student_pswd,
          re_password : newstudent.student_cpswd,
          name : newstudent.student_name,
          branch : newstudent.Branch,
          semester : newstudent.semester
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log({ BACKEND_RESPONSE: response });
    } catch (err) {
      console.error(err);
    }
  };
  const AddTeacher = async () => {
    console.log(" AddTeacher Function is running");
    try {
      const response = await axios.post(
        `http://127.0.0.1:8000/accounts/teacher_register`,
        {
          name : newteacher.teacher_name,
          email: newteacher.teacher_email,
          password : newteacher.teacher_pswd,
          re_password : newteacher.teacher_cpswd,
          refc : newteacher.teacher_refc
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log({ BACKEND_RESPONSE: response });
    } catch (err) {
      console.error(err);
    }
  };
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
              <input type="text" placeholder='Your Name' value={newstudent.student_name} name='student_name' onChange={AddNewStudent} />
              <input type="email" placeholder="Email Address" value={newstudent.student_email} name='student_email' onChange={AddNewStudent} />
              <div className='pswd_box'>
                <input type="password" placeholder="Password" value={newstudent.student_pswd} name='student_pswd' onChange={AddNewStudent} />
                <input type="password" placeholder="Confirm Password" value={newstudent.student_cpswd} name='student_cpswd' onChange={AddNewStudent} />
              </div>
              <div className='select_box'>
                <select value={newstudent.Branch} onChange={AddNewStudent} name="Branch">
                  <option value="0">Branch</option>
                  <option value="CS">CS</option>
                  <option value="AI">AI</option>
                  <option value="ML">ML</option>
                  <option value="EEE">EEE</option>
                  <option value="ET&T">ET&T</option>
                  <option value="Civil">Civil</option>
                  <option value="Mechanical">Mechanical</option>
                </select>
                <select value={newstudent.semester} onChange={AddNewStudent} name="semester">
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
              <button
                type="button"
                onClick={AddStudent}
              >
                Login
              </button>
              <p className="signup-link">Already have an account? <a href="/">Sign in</a></p>
            </form>
            <form action="#" className={teacher ? "teacher_form" : "teacher_signup "}>
              <input type="txt" placeholder="Your Name" name='teacher_name' value={newteacher.teacher_name} onChange={AddNewteacher}/>
              <input type="email" placeholder="Email Address" name='teacher_email' value={newteacher.teacher_email} onChange={AddNewteacher}/>
              <div className='pswd_box'>
                <input type="password" placeholder="Password" name='teacher_pswd' value={newteacher.teacher_pswd} onChange={AddNewteacher} />
                <input type="password" placeholder="Confirm Password" name='teacher_cpswd' value={newteacher.teacher_cpswd} onChange={AddNewteacher} />
              </div>
              <input type="text" placeholder="Referral Code" name='teacher_refc' value={newteacher.teacher_refc} onChange={AddNewteacher}/>
              <button
                type="button"
                className="Formbutton"
                onClick={AddTeacher}
              >
                Login
              </button>
              <p className="signup-link">Already have an account? <a href="/">Sign in</a></p>
            </form>
          </div>
        </div>
      </div>
    </>
  )
};

export default SignupForm;