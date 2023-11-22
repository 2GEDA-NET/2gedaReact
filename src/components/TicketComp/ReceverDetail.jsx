import { Link } from "react-router-dom";
import ActionButton from "../Commons/Button";

const ReceverDetail = ({ receiverDetailRef, handleChooseClick }) => {
  return (
    <div ref={receiverDetailRef} className="receiver-detail-container">
      <div className="event-det-nm">Receiver details</div>
      <form action="">
        <div className="double-input">
          <div className="inp-label-box">
            <label htmlFor="">First name</label>
            <input
              type="text"
              className="claim-inp rec-inp"
              placeholder="Enter your first name"
            />
          </div>
          <div className="inp-label-box">
            <label htmlFor="">Last name</label>
            <input
              type="text"
              className="claim-inp rec-inp"
              placeholder="Enter your last name"
            />
          </div>
        </div>
        <div className="double-input">
          <div className="inp-label-box">
            <label htmlFor="">Email address</label>
            <input
              type="email"
              className="claim-inp rec-inp"
              placeholder="Enter your email address"
            />
          </div>
        </div>
        <div className="double-input">
          <div className="inp-label-box">
            <label htmlFor="">Address</label>
            <input
              type="email"
              className="claim-inp rec-inp"
              placeholder="Enter your address"
            />
          </div>
        </div>

        <div className="check-aree-cont">
          <input type="checkbox" className="check-bx" />
          <div className="aree-txt">
            I have read and agreed to{" "}
            <Link to={"/"} className="reci-link">
              {" "}
              terms of condition{" "}
            </Link>{" "}
            and
            <Link to={"/"} className="reci-link">
              {" "}
              privacy policy
            </Link>
          </div>
        </div>
        <div className="act-rec-btn" onClick={handleChooseClick}>
          <ActionButton label={"Purchase tickets"} />
        </div>
      </form>
    </div>
  );
};

export default ReceverDetail;
