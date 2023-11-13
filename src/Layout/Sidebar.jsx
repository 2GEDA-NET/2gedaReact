import { BiSolidHome, BiSolidMusic } from "react-icons/bi";
import { CgMediaLive } from "react-icons/cg";
import { BsPersonCircle, BsTicketFill, BsFillTvFill } from "react-icons/bs";
import { IoStorefrontOutline, IoLogOutOutline } from "react-icons/io5";
import { IoIosPeople, IoMdBook } from "react-icons/io";
import { PiBookDuotone } from "react-icons/pi";
import { AiOutlineMessage } from "react-icons/ai";
import { MdOutlineHowToVote } from "react-icons/md";
import "./style.css";
import { NavLink } from "react-router-dom";

const Sidebar = ({ isCollapsed }) => {
  return (
    <div
      className={isCollapsed ? "sidebar-container  nil" : "sidebar-container"}
    >
      <div className="sidebar-box">
        <div className="sidebar-items">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive ? "active_link side-item" : "side-item"
            }
          >
            <BiSolidHome className="side-icon " />
            <div className="sidebar-text">Home</div>
          </NavLink>
          <NavLink
            to="/connect"
            className={({ isActive }) =>
              isActive ? "active_link side-item" : "side-item"
            }
          >
            <IoIosPeople className="side-icon " />
            <div className="sidebar-text">Connect</div>
          </NavLink>
          <NavLink
            to="/commerce"
            className={({ isActive }) =>
              isActive ? "active_link side-item" : "side-item"
            }
          >
            <IoStorefrontOutline className="side-icon " />
            <div className="sidebar-text">Commerce</div>
          </NavLink>
          <NavLink
            to="/business"
            className={({ isActive }) =>
              isActive ? "active_link side-item" : "side-item"
            }
          >
            <PiBookDuotone className="side-icon " />
            <div className="sidebar-text">Business Directory</div>
          </NavLink>

          <NavLink
            to="/chat"
            className={({ isActive }) =>
              isActive ? "active_link side-item" : "side-item"
            }
          >
            <AiOutlineMessage className="side-icon " />
            <div className="sidebar-text">Chat</div>
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive ? "active_link side-item" : "side-item"
            }
          >
            <BsPersonCircle className="side-icon " />
            <div className="sidebar-text">Profile</div>
          </NavLink>
          <NavLink
            to="/ticket"
            className={({ isActive }) =>
              isActive ? "active_link side-item" : "side-item"
            }
          >
            <BsTicketFill className="side-icon " />
            <div className="sidebar-text">Tickets</div>
          </NavLink>
          <NavLink
            to="/not"
            className={({ isActive }) =>
              isActive ? "active_link side-item" : "side-item"
            }
          >
            <CgMediaLive className="side-icon " />
            <div className="sidebar-text">Live</div>
          </NavLink>
          <NavLink
            to="/stereo"
            className={({ isActive }) =>
              isActive ? "active_link side-item" : "side-item"
            }
          >
            <BiSolidMusic className="side-icon " />
            <div className="sidebar-text">Stereo</div>
          </NavLink>
          <NavLink
            to="/not"
            className={({ isActive }) =>
              isActive ? "active_link side-item" : "side-item"
            }
          >
            <BsFillTvFill className="side-icon " />
            <div className="sidebar-text">Tv</div>
          </NavLink>
          <NavLink
            to="/not"
            className={({ isActive }) =>
              isActive ? "active_link side-item" : "side-item"
            }
          >
            <MdOutlineHowToVote className="side-icon " />
            <div className="sidebar-text">Voting</div>
          </NavLink>
          <NavLink
            to="/educate"
            className={({ isActive }) =>
              isActive ? "active_link side-item" : "side-item"
            }
          >
            <IoMdBook className="side-icon " />
            <div className="sidebar-text">Education</div>
          </NavLink>

          <div className="side-item lout">
            <IoLogOutOutline className="side-icon " />
            <div className="sidebar-text">Sign out</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
