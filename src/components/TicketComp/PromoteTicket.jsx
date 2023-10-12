import "./style.css";
import SmallTicketCard from "../Dashboard/smallTicket";

const PromoteTicket = () => {
  return (
    <div className="trending-product-container">
      <div className="view-all-tic-bx">
        <div className="product-ind">Promoted events</div>
        <div className="view-ll">View all</div>
      </div>
      <div className="product-card-row">
        <SmallTicketCard />
        <SmallTicketCard />
        <SmallTicketCard />
        <SmallTicketCard />
        <SmallTicketCard />
        <SmallTicketCard />
        <SmallTicketCard />
        <SmallTicketCard />
        <SmallTicketCard />
      </div>
    </div>
  );
};

export default PromoteTicket;
