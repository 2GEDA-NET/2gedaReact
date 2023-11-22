const TicketInfoCalender = () => {
  return (
    <div className="ticket-info-row-cal">
      <div className="ticket-info-boxs">
        <div className="event-det-nm">Ticket Information</div>
        <div className="vip-re-cont">
          <div className="vip-price-bx">
            <div className="title-lab">VIP</div>
            <div className="pric-availl">
              <div className="price-avil-box"># 5,000.00</div>
              <div className="out-stock">Out of stock</div>
            </div>
          </div>
          <div className="vip-price-bx no-bod">
            <div className="title-lab">REGULAR</div>
            <div className="pric-availl">
              <div className="price-avil-box"># 2,000.00</div>
              <div className="sellin">Selling</div>
            </div>
          </div>
        </div>
      </div>
      <div className="ticket-info-boxs">
        <div className="event-det-nm">Event calendar</div>
        <div className="vip-re-cont padr">
          <div className="date-eve">Thursday, 17 August, 2023</div>
          <div className="eve-tim">2:30 PM</div>

          <div className="avail-ticket">100 tickets</div>
        </div>
      </div>
    </div>
  );
};

export default TicketInfoCalender;
