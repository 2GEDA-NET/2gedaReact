import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BiCurrentLocation } from "react-icons/bi";
import { IoStorefrontOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Notification = ({ handleCloseNotiToggledIcon }) => {
  const navigate = useNavigate();

  const gotoSearch = () => {
    navigate("/search");
  };
  const [isClicked, setIsClicked] = useState(false);

  const hanleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <div className=" noti-container-full">
      <div className="lft-jus">
        <div className="noti-top-tst"></div>

        <div className="noti-top-tst">Notifications</div>
        <div className="not-bs">
          <AiOutlineClose
            className="cls"
            onClick={handleCloseNotiToggledIcon}
          />
        </div>
      </div>
      <div className="down-cont">
        <div className="recent-see-all">
          <div className="recent-sear">
            You have <span>5 new</span> notifications
          </div>
          <div className="clear-all-searc">Clear up</div>
        </div>

        <div className="noti-col-box">
          <div className="img-box-notif">
            <div className="im-notif-cont">
              <img src="images/pic2.png" alt="" />
            </div>
            <div className="notif-detail">
              <div className="notif-det">
                Kolade Kamal <span>sticked you</span>
              </div>
              <div className="time-notif">3 mins ago</div>
            </div>
          </div>
          <div className="stick-btn">
            <button
              className={isClicked ? "stickin " : " stick-btnn"}
              onClick={hanleClick}
            >
              {isClicked ? "Sticking" : "Stick"}
            </button>
          </div>
        </div>
        <div className="noti-col-box">
          <div className="img-box-notif">
            <div className="im-notif-cont">
              <img src="images/pic2.png" alt="" />
            </div>
            <div className="notif-detail">
              <div className="notif-det">
                Kolade Kamal <span>comment to your </span>post
              </div>
              <div className="time-notif">2 hours ago</div>
            </div>
          </div>
        </div>
        <div className="noti-col-box">
          <div className="img-box-notif">
            <div className="im-notif-cont">
              <img src="images/pic2.png" alt="" />
            </div>
            <div className="notif-detail">
              <div className="notif-det">
                Kolade Kamal <span>reacted to your </span>post
              </div>
              <div className="time-notif">2 hours ago</div>
            </div>
          </div>
        </div>
        <div className="noti-col-box">
          <div className="img-box-notif">
            <div className="">
              <div className="bd-notif-cont flex">
                <BiCurrentLocation />
              </div>
            </div>
            <div className="notif-detail det-tin">
              <div className="notif-dtt">
                New sign-in from a different location detected. Confirm if it's
                you. Contact support if unfamiliar.
              </div>
              <div className="time-notif">2 hours ago</div>
            </div>
          </div>
        </div>
        <div className="noti-col-box">
          <div className="img-box-notif">
            <div className="">
              <div className="bd-notif-cont flex notif-pro">
                <IoStorefrontOutline />
              </div>
            </div>
            <div className="notif-detail det-tin">
              <div className="notif-dtt">
                Your product has 1k views on outlet
              </div>
              <div className="time-notif">6 hours ago</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
