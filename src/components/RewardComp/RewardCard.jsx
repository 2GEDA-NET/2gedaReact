import { useState } from "react";
import "./style.css";

const RewardCard = ({ comp, title, bdy, pro, tot }) => {
  const [progress, setProgress] = useState(pro);
  const totalSteps = tot;
  // Calculate the percentage completion
  const percentage = (progress / totalSteps) * 100;
  return (
    <div className="reward-card-containe ">
      <div className="btn-deati-box flex">
        <div className="icon-card-det-bx flex">
          <div className="icon-reward">{comp}</div>
          <div className="reward-detail">
            <div className="title-coin-pri flex">
              <div className="title-rwd">{title}</div>
              <img src="images/oni.png" alt="" />
              <div className="value-coin">+5</div>
            </div>
            <div className="reward-card-info">{bdy}</div>
          </div>
        </div>
        {progress === totalSteps ? (
          <button className="claim-cont-btn claim-reward">Claim</button>
        ) : (
          <button className="claim-cont-btn">Continue</button>
        )}
      </div>
      <div className="progress-count-cont">
        <div className="progress-bar-bx">
          <div
            className="progress-bar-slid "
            style={{ width: `${percentage}%` }}
          ></div>
          <div className="main-bar-pro"></div>
        </div>
        <div className="count-prog">{`${progress}/${totalSteps}`}</div>
      </div>
    </div>
  );
};

export default RewardCard;
