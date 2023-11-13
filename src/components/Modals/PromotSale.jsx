import { AiOutlineArrowLeft } from "react-icons/ai";
import { BsFillLightningChargeFill } from "react-icons/bs";
import "./Second.css";
import PromoteSubCard from "../Commerce/PromoteSubCard";
import { useState } from "react";
import PromotSaleLast from "./PromotSaleLast";

const Data = [
  {
    text: "Daily plan",
    price: "# 10,000",
  },
  {
    text: "3 days plan",
    price: "# 25,000",
  },
  {
    text: "1 week plan",
    price: "# 50,000",
  },
  {
    text: "1 month plan",
    price: "# 150,000",
  },
  {
    text: "3 months plan",
    price: "# 300,000",
  },
  {
    text: "1 year plan",
    price: "# 1,000,000",
  },
];
const PromotSale = ({ handleCloseMainContainerClick }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [clickedCard, setClickedCard] = useState(null);
  const [isPromoteModalLastOpen, setIsPromoteModalLastOpen] = useState(false);

  const handleSellPromoteLastClick = () => {
    setIsPromoteModalLastOpen(true);
  };
  const handleCloseSellPromoteLastClick = () => {
    setIsPromoteModalLastOpen(false);
  };

  const handleCardClick = (index, text, price) => {
    setActiveIndex(index === activeIndex ? null : index);
    setClickedCard({ text, price });
  };
  return (
    <>
      {isPromoteModalLastOpen && (
        <div className="modal-full-container">
          <PromotSaleLast
            handleCloseSellPromoteLastClick={handleCloseSellPromoteLastClick}
          />
        </div>
      )}
      <div className="postFormModal-container status-modal-container">
        {" "}
        <div className="over-scr">
          <div className="sell-ccont">
            <div className="flex prom-head-bx ">
              <AiOutlineArrowLeft
                className="cls-post"
                onClick={handleCloseMainContainerClick}
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
          <div className="what_user_click">
            {clickedCard && (
              <div>
                <div className="plan-title">{clickedCard.text}</div>
                <div className="plan-price-txt">{clickedCard.price}</div>
              </div>
            )}
          </div>
          <div className="plan-promote-bx flex">
            {Data.map((item, index) => (
              <PromoteSubCard
                key={index}
                text={item.text}
                price={item.price}
                isActive={index === activeIndex}
                onClick={() => handleCardClick(index, item.text, item.price)}
              />
            ))}
          </div>{" "}
          <div className="next-bbbtn">
            <button
              className="next-step-box"
              onClick={handleSellPromoteLastClick}
            >
              Proceed
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PromotSale;
