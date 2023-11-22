import { useEffect, useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { HiArrowsUpDown } from "react-icons/hi2";
import ActionButton from "../../components/Commons/Button";
import SuccessReward from "./SuccessReward";

const PayoutTwo = ({ handleShowPayTwoClose }) => {
  const [isRequestOpen, setIsRequestOpen] = useState(false);
  const handleRequestOpen = (e) => {
    setIsRequestOpen(true);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {isRequestOpen && (
        <div className="modal-full-container">
          <SuccessReward />
        </div>
      )}
      <div className="back-title">
        <div className="bc-ico">
          <AiOutlineArrowLeft
            className="ti-bc"
            onClick={handleShowPayTwoClose}
          />
        </div>
        <div className="head-line">Payout</div>
      </div>
      <div className="top-container-payout-rew">
        <div className="withdraw-line flex">
          <div className="txt-wid-bv">You are withdrawing</div>
          <img src="images/oni.png" alt="" />
          <div className="tot-wid-tst">500</div>
        </div>

        <div className="wat-yhou-get">
          <div className="you-et-b flex">
            <div className="txt-wid-bv">You will get</div>
            <div className="tot-wid-tst"># 50,000</div>
          </div>
        </div>
      </div>
      <form action="">
        <div className="withdraw-info-box">
          <div className="heawid-line">Withdrawal information</div>
          <div className="double-input">
            <div className="inp-label-box">
              <select name="" id="" className="claim-inp wid-nw-inp">
                <option value="">Select category</option>
                <option value="Driver_licence">Driver Licence</option>
                <option value="NIN">NIN</option>
                <option value="Voters_card">Voter's Card</option>
              </select>
            </div>
          </div>
          <div className="event-inp-overall-cont wid-nw-inp ">
            <label htmlFor="" className="adj">
              Account name
            </label>
            <input type="text" className="create-evt-inp wid-nw-inp" />
          </div>
          <div className="event-inp-overall-cont wid-nw-inp">
            <label htmlFor="" className="adj">
              Account number
            </label>
            <input type="text" className="create-evt-inp wid-nw-inp" />
          </div>

          <div className="act-continue-btn" onClick={handleRequestOpen}>
            <ActionButton label={"Add withdrawal info"} type={"button"} />
          </div>
        </div>
      </form>
    </>
  );
};

export default PayoutTwo;
