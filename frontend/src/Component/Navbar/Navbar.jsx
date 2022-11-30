import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Dropdown from "./Dropdown";
import Button from "./Button";

function Navbar(props) {
  const guestLinks = (
   <>
    <div className="btnBlock">
            <Button title="SignIn" cname="btn signin" />
            <Button title="SignUp" cname="btn signup" path="/signup" />
    </div>
   </>
  );

  const [dropdown, setDropdown] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.scrollY)
    };

    window.addEventListener('scroll', updatePosition)
  });

  return (
    <>
      <nav className={scrollPosition > 0 ? "navbar  scrolled-navbar" : "navbar"}>
        <Link to="/" className="navbar-logo">
          Acad<span>Tutor</span>
        </Link>
        <div className="menu-container">
          <ul className="nav-items">
            {props.menu.map((item) => {
              if (item.title === "Branches") {
                return (
                  <li
                    key={item.id}
                    className={item.cName}
                    onMouseEnter={() => setDropdown(true)}
                    onMouseLeave={() => setDropdown(false)}
                    onClick={() => setDropdown(true)}
                  >
                    <Link to={item.path}>{item.title}</Link>
                    {dropdown && <Dropdown submenu={props.submenu} />}
                  </li>
                );
              }
              return (
                <li key={item.id} className={item.cName}>
                  <Link to={`/${item.path}`} state={{data:false}} >{item.title}</Link>
                </li>
              );
            })}
          </ul>
          {guestLinks}
          {/* {isAuthenticated ? authlinks : guestLinks} */}
          {/* <div className="btnBlock">
            <Button title="SignIn" cname="btn signin" />
            <Button title="SignUp" cname="btn signup" path="/signup" />
          </div> */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
