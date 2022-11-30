import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { showHide } from "../../features/Reducer";

const LoginForm = (props) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const LoginUser = async () => {
    try {
      const response = await axios.post(
        `http://127.0.0.1:8000/accounts/login`,
        {
          email,
          password, 
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
  const showLogin = useSelector((state) => state.showLoginSlice.showHide);
  const dispatch = useDispatch();
  if (!showLogin) {
    return null;
  }
  return (
    <div className="LoginForm_Container">
      <div className="Loginform_Wrapper">
        <button className="crossbtn" onClick={() => dispatch(showHide(false))}>
          <FaTimes />
        </button>
        <h2>Login Page</h2>
        <form action="#" className="LoginForm">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            name="password" 
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <a to="/" className="FP">
            Forgot Password ?
          </a>
          <button
            type="button"
            className="Formbutton"
            style={{ backgroundColor: "#3f6b80" }}
            onClick={LoginUser}
          >
            Login
          </button>
          <p>
            don't have account ? <a href="/signup">Signup Now</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
