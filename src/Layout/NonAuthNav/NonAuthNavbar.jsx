import "./style.css";
import { HiX } from "react-icons/hi";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const data = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Features",
    to: "/about",
  },
  {
    label: "About",
    to: "/manifesto",
  },
  {
    label: "Contact",
    to: "/vote",
  },
  {
    label: "FAQ",
    to: "/contact",
  },
];
const NonAuthNavbar = ({ nono }) => {
  const [toggleIcon, setToggleIcon] = useState(false);
  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/");
  };

  return (
    <div className="non-nv-b">
      <div className="non-navbar-container">
        <div className="navbar">
          <div className="logon" onClick={goToHome}>
            <img src="/images/lo2.png" alt="" />
          </div>
          <nav className="nav">
            <ul className={`nav-ul ${toggleIcon ? "active" : ""}`}>
              {data.map((item, index) => (
                <li className="nav-li" key={index}>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "nk" : "navbar_links nk"
                    }
                    to={item.to}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
              {/* <li className="nav-li">About</li>
            <li className="nav-li">Manifesto</li>
            <li className="nav-li">Vote</li>
            <li className="nav-li">Contact</li> */}
              <div className="log-reg-btns nonn">
                <NavLink
                  className={({ isActive }) => (isActive ? "" : "navbar_links")}
                  to={"/signin"}
                >
                  <button className="log-tbt">Log In</button>
                </NavLink>
                <NavLink
                  className={({ isActive }) => (isActive ? "" : "navbar_links")}
                  to={"/signup"}
                >
                  <button className="log-tbt">Create account</button>
                </NavLink>
              </div>
            </ul>
          </nav>
        </div>
        <div className="log-reg-btns nill">
          <NavLink
            className={({ isActive }) => (isActive ? "" : "navbar_links")}
            to={"/signin"}
          >
            <button className="log-tbt">Log In</button>
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "" : "navbar_links")}
            to={"/signup"}
          >
            <button className="log-btn">Create account</button>
          </NavLink>
        </div>
        <div className={`nav-icon ${nono}`} onClick={handleToggleIcon}>
          {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
        </div>
      </div>
    </div>
  );
};

export default NonAuthNavbar;
