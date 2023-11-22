import { AiFillCheckCircle } from "react-icons/ai";

const PromoteSubCard = ({ text, price, isActive, onClick }) => {
  return (
    <div
      className={`promote-sub-card-container ${
        isActive ? "active-prom-card" : ""
      }`}
      onClick={onClick}
    >
      <div className="pland-price-bx">
        <div className="plan-title">{text}</div>
        <div className="plan-price-txt">{price}</div>
      </div>
      <div className="check-icon-prom">
        {isActive ? <AiFillCheckCircle /> : ""}
      </div>
    </div>
  );
};

export default PromoteSubCard;
