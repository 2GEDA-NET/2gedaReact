import SmallTicketCard from "../Dashboard/smallTicket";

const EventThisWeek = ({ handleWeekContainerClick }) => {
  return (
    <div className="trending-product-container">
      <div className="view-all-tic-bx">
        <div className="product-ind">Events this week</div>
        <div className="view-ll" onClick={handleWeekContainerClick}>
          View all
        </div>
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

export default EventThisWeek;
