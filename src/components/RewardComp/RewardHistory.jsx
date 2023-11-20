import { useEffect } from "react";
const RewardHistory = ({ handleHistoryClose }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="back-title">
        <div className="bc-ico">
          <AiOutlineArrowLeft className="ti-bc" />
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
        <HistoryCol />
      </div>
    </>
  );
};

export default RewardHistory;
