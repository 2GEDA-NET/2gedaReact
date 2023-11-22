import { useEffect } from "react";
import ActionButton from "../../components/Commons/Button";

const SuccessReward = ({ handleCloseAllClick }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="success-request-container flex">
      <img src="images/em2.png" alt="" />
      <div className="with-txt">
        Your withdrawal request has been recieved and is being processed
      </div>
      <div className="reques-sec">
        <ActionButton label={"Back to Tickets"} type={"button"} />
      </div>
    </div>
  );
};

export default SuccessReward;
