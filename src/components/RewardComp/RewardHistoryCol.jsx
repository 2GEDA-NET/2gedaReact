import { BiSolidDownArrow } from "react-icons/bi";
import { FaMinus } from "react-icons/fa";
const RewardHistoryCol = () => {
  return (
    <div className="colhistory-container flex">
      <div className="left-col-roy flex">
        <div className="with-cont flex notsucc-rd ">
          <BiSolidDownArrow />
        </div>
        <div className="wit-txt-bx">
          <div className="with-bx">Withdrawal</div>
          <div className="wit-dat">You</div>
        </div>
      </div>
      <div className="rit-side-col flex all-rrr">
        <div className="title-coin-pri flex ">
          <div className="min-us">
            <FaMinus />
          </div>
          <img src="images/oni.png" alt="" />
          <div className="value-coin">500</div>
        </div>
        <div className="wit-dat">Aug 24, 1:05 PM</div>
      </div>
    </div>
  );
};

export default RewardHistoryCol;
