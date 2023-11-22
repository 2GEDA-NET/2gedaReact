import { BiSolidUpArrow } from "react-icons/bi";
import { FaPlus } from "react-icons/fa";
const RewardHistoryColReff = () => {
  return (
    <div className="colhistory-container flex">
      <div className="left-col-roy flex">
        <div className="with-cont flex succ-wd">
          <BiSolidUpArrow />
        </div>
        <div className="wit-txt-bx">
          <div className="with-bx">Referral bonus</div>
          <div className="wit-dat">Sarah King</div>
        </div>
      </div>
      <div className="rit-side-col flex all-rrr">
        <div className="title-coin-pri flex">
          <div className="min-us">
            <FaPlus />
          </div>
          <img src="images/oni.png" alt="" />
          <div className="value-coin">5</div>
        </div>
        <div className="wit-dat">Aug 24, 1:05 PM</div>
      </div>
    </div>
  );
};

export default RewardHistoryColReff;
