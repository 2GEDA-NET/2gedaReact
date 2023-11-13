import { AiOutlineArrowLeft } from "react-icons/ai";
import { BsFillLightningChargeFill } from "react-icons/bs";
import "./Second.css";
import PromoteSubCard from "../Commerce/PromoteSubCard";
import { useState } from "react";

const PromotSaleLast = ({ handleCloseSellPromoteLastClick }) => {
  return (
    <div className="postFormModal-container status-modal-container">
      {" "}
      <div className="over-scr">
        <div className="sell-ccont">
          <div className="flex prom-head-bx ">
            <AiOutlineArrowLeft
              className="cls-post"
              onClick={handleCloseSellPromoteLastClick}
            />
            <div className="fels">
              <div className="ceny">Promote sale</div>
            </div>
            <BsFillLightningChargeFill className="power-icon" />
          </div>
        </div>
        <div className="sell-form-item">
          <div className="sell-form-head">
            Sell faster when you promote your item
          </div>
          <div className="price-txt">We’ve got amazing plans for you</div>
        </div>
        <div className="promote-bodt">
          <div className="promote-preveiw-product">
            <div className="img-prev-prodoct">
              <img
                src="https://hips.hearstapps.com/hmg-prod/images/2024-lamborghini-revuelto-127-641a1d518802b.jpg?crop=0.769xw:0.770xh;0.104xw,0.106xh&resize=1200:*"
                alt=""
              />
            </div>
            <div className="bx-prev-detai">
              <div className="product-detail-prev">
                Toyota Venza 2021 Mobile V6
              </div>
              <div className="price-product-txt">#20,000,000</div>
            </div>
          </div>
          <div className="double-input mg-dwn">
            <div className="bx-prom-det-prev ">
              <div className="promoto-detail-cont-bx">
                <div className="prev-prom-plan">Promotion plan : 1 day</div>
                <div className="amt-prom-plan">Amount : #10,000</div>
              </div>
              <div
                className="change-prom-det"
                onClick={handleCloseSellPromoteLastClick}
              >
                Change
              </div>
            </div>
            <div className="inp-label-box incr-wid-prom">
              <label htmlFor="">Start date</label>
              <input type="date" className="claim-inp" />
            </div>
          </div>
        </div>

        <div className="next-bbbtn">
          <button className="next-step-box">Pay now</button>
        </div>
      </div>
    </div>
  );
};

export default PromotSaleLast;
