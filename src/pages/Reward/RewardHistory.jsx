import { useEffect } from "react";
import RewardHistoryCol from "../../components/RewardComp/RewardHistoryCol";
import { AiOutlineArrowLeft } from "react-icons/ai";
import RewardHistoryColReff from "../../components/RewardComp/RewardHistoryColReff";

const RewardHistory = ({ handleShowHistoryClose }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="back-title">
        <div className="bc-ico">
          <AiOutlineArrowLeft
            className="ti-bc"
            onClick={handleShowHistoryClose}
          />
        </div>
        <div className="head-line">History</div>
      </div>
      <div className="payout-container">
        <select name="" id="" className="hist-mon-sel">
          <option value="Jan">Jan</option>
          <option value="Feb">Feb</option>
          <option value="Mar">Mar</option>
        </select>
      </div>

      <div className="row-with-hist-card">
        <RewardHistoryCol />
        <RewardHistoryColReff />
        <RewardHistoryColReff />
        <RewardHistoryColReff />
        <RewardHistoryColReff />
      </div>
    </>
  );
};

export default RewardHistory;
