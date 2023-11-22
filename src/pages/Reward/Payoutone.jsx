import { useEffect } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { HiArrowsUpDown } from "react-icons/hi2";
import ActionButton from "../../components/Commons/Button";
import { useState } from "react";
import PayoutTwo from "./PayoutTwo";

const Payoutone = ({ handleShowPayOneClose }) => {
  const [showPayTwo, setShowPayTwo] = useState(false);
  const handleShowPayTwo = () => {
    setShowPayTwo(true);
  };
  const handleShowPayTwoClose = () => {
    setShowPayTwo(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {showPayTwo && (
        <PayoutTwo handleShowPayTwoClose={handleShowPayTwoClose} />
      )}

      {!showPayTwo && (
        <>
          <div className="back-title">
            <div className="bc-ico">
              <AiOutlineArrowLeft
                className="ti-bc"
                onClick={handleShowPayOneClose}
              />
            </div>
            <div className="head-line">Payout</div>
          </div>
          <div className="reward-pay-container">
            <div className="pay-rew-container">
              <div className="maximum-widraw">
                <div className="numb-max">500</div>
                <div className="max-tct">Max</div>
              </div>
              <div className="bal-coin-num-box flex">
                <div className="txt-bbl">Balance</div>
                <img src="images/oni.png" alt="" />
                <div className="tot-bal-bx">800</div>
              </div>
              <div className="hr-up-dw">
                <div className="ico-up-dwn">
                  <HiArrowsUpDown />
                </div>
                <hr className="lin-rh" />
              </div>
              <div className="rec-info">You will receive</div>

              <div className="currency-widt-containe flex">
                <select name="" id="" className="curr-selt">
                  <option value="NGN">NGN</option>
                  <option value="USD">USD</option>
                </select>
                <div className="widt-avail"># 50,000</div>
              </div>
              <div className="btn-pay-proc flex" onClick={handleShowPayTwo}>
                <ActionButton label={"Proceed"} />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Payoutone;
