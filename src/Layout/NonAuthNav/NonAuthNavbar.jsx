import React, { useState } from "react";
import "./style.css";
import { HiX } from "react-icons/hi";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const data = [
  {
    label: "About",
    to: "/#about",
  },
  {
    label: "Features",
    to: "/#features",
  },
  {
    label: "Contact",
    to: "/#contact",
  },
];

const NonAuthNavbar = ({ nono }) => {
  const [toggleIcon, setToggleIcon] = useState(false);

  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };

  return (
    <div className="non-navbar-container">
      <div className="navbar">
        <div className="logon">
          <img src="/images/lo2.png" alt="" />
        </div>
        <nav className="nav">
          <ul className={`nav-ul ${toggleIcon ? "active" : ""}`}>
            {data.map((item, key) => (
              <li className="nav-li" key={key}>
                <NavLink
                  className="navbar_links"
                  activeClassName="active-link"
                  to={item.to}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
            <div className="log-reg-btns nonn">
              <NavLink className="navbar_links" to={"/signin"}>
                <button className="log-tbt">Log In</button>
              </NavLink>
              <NavLink className="navbar_links" to={"/signup"}>
                <button className="log-tbt">Create account</button>
              </NavLink>
            </div>
          </ul>
        </nav>
      </div>
      <div className="log-reg-btns nill">
        <NavLink className="navbar_links" to={"/signin"}>
          <button className="log-tbt">Log In</button>
        </NavLink>
        <NavLink className="navbar_links" to={"/signup"}>
          <button className="log-btn">Create account</button>
        </NavLink>
      </div>
      <div className={`nav-icon ${nono}`} onClick={handleToggleIcon}>
        {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
      </div>
    </div>
  );
};

export default NonAuthNavbar;
