import { AiOutlineClose } from "react-icons/ai";
import EditProfile from "./EditProfile";

const ProfileModalMenu = ({
  handleModalMenuClose,
  handleImelClick,
  handleManAdClick,
}) => {
  return (
    <>
      <div className="profile-menu-modal-container">
        <div className="clss-con flex" onClick={handleModalMenuClose}>
          <AiOutlineClose />
        </div>

        <div className="logo-menu-profil">
          <img src="images/lo2.png" alt="" />
        </div>

        <div className="all-menu-txt-all">
          <div className="each-menu-txt">Account Settings</div>
          <div className="each-menu-txt">Manage Businesses</div>
          <div className="each-menu-txt">Saved Posts</div>
          <div className="each-menu-txt">Request Verification</div>
          <div className="each-menu-txt" onClick={handleManAdClick}>
            Manage Adverts
          </div>
          <div className="each-menu-txt" onClick={handleImelClick}>
            Phone IMEI/ Gadget serial no
          </div>
        </div>
      </div>
      {/* <div className="modal-full-container">
        <EditProfile />
      </div> */}
    </>
  );
};

export default ProfileModalMenu;
