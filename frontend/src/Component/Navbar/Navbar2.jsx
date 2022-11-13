import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './Navbar2.css'


function Navbar2(props) {

  return (
    <>
      <nav className="navbar2">
        <Link to="/" className="navbar-logo">
          Acad<span>Tutor</span>
        </Link>
        <div className="profile-pic">
            
        </div>
      </nav>
    </>
  );
}

export default Navbar2;
