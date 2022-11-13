import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Dropdown.css";

function Dropdown(props) {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <ul
        className={dropdown ? "submenu clicked" : "submenu"}
        onClick={() => setDropdown(!dropdown)}
      >
        {props.submenu.map((item) => {
          return (
            <li key={item.id}>
              <Link
                to={`/branch${item.path}`}
                onClick={() => setDropdown(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;
