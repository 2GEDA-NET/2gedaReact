import React, { useState } from "react";
import "./style.css";
import { HiX } from "react-icons/hi";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import ActionButton from "../../components/Commons/Button";

const data = [
  {
    label: "About",
    to: "about",
  },
  {
    label: "Features",
    to: "features",
  },
  {
    label: "Contact",
    to: "contact",
  },
];

const NonAuthNavbar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);

  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };

  return (
    <div className={`non-navbar-container ${toggleIcon ? "active" : ""}`}>
      <div className="navbar">
        <div className="logon">
          <img src="/images/lo2.png" alt="" />
        </div>
        <div className={`nav ${toggleIcon ? "active" : ""}`}>
          <div className="nav-icon" onClick={handleToggleIcon}>
            {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
          </div>
          <ul className="nav-ul">
            {data.map((item, key) => (
              <li className="nav-li" key={key}>
                <Link className="navbar_links" to={item.to}>
                  {item.label}
                </Link>
              </li>
            ))}
            <Link className="navbar_links" to={"/signin"}>
              <ActionButton bg={"pruplr"} label={"Login"} />
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NonAuthNavbar;
