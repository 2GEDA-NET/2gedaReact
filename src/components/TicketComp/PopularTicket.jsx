import SmallTicketCard from "../Dashboard/smallTicket";

const PopularTicket = ({ handleEventDetailContainerClick }) => {
  return (
    <div className="trending-product-container">
      <div className="product-ind">Popular events</div>
      <div className="product-card-row">
        <SmallTicketCard
          handleEventDetailContainerClick={handleEventDetailContainerClick}
        />
        <SmallTicketCard
          handleEventDetailContainerClick={handleEventDetailContainerClick}
        />
        <SmallTicketCard
          handleEventDetailContainerClick={handleEventDetailContainerClick}
        />
        <SmallTicketCard
          handleEventDetailContainerClick={handleEventDetailContainerClick}
        />
        <SmallTicketCard
          handleEventDetailContainerClick={handleEventDetailContainerClick}
        />
        <SmallTicketCard
          handleEventDetailContainerClick={handleEventDetailContainerClick}
        />
        <SmallTicketCard
          handleEventDetailContainerClick={handleEventDetailContainerClick}
        />
        <SmallTicketCard
          handleEventDetailContainerClick={handleEventDetailContainerClick}
        />
        <SmallTicketCard
          handleEventDetailContainerClick={handleEventDetailContainerClick}
        />
      </div>
    </div>
  );
};

export default PopularTicket;
