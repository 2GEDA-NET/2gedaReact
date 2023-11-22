import { useEffect, useRef, useState } from "react";
import TicketSearchComp from "../../components/TicketComp/TicketSearchComp";
import EventDetailDetailsComp from "../../components/TicketComp/EventDetailDetailsComp";
import TicketInfoCalender from "../../components/TicketComp/TicketInfoCalender";
import ReceverDetail from "../../components/TicketComp/ReceverDetail";
import ChooseTicket from "./ChooseTicket";
const EventDetail = ({ handleCloseContainerClick }) => {
  const [isChooseOpen, setIsChooseOpen] = useState(false);

  const handleCloseAllClick = () => {
    handleCloseContainerClick();
    setIsChooseOpen(false);
  };
  const handleChooseClick = () => {
    setIsChooseOpen(true);
  };
  const handleCloseChooseClick = () => {
    setIsChooseOpen(false);
  };
  const receiverDetailRef = useRef(null);

  const handleGetTicketClick = () => {
    if (receiverDetailRef && receiverDetailRef.current) {
      receiverDetailRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {isChooseOpen && (
        <ChooseTicket
          handleCloseChooseClick={handleCloseChooseClick}
          handleCloseAllClick={handleCloseAllClick}
        />
      )}
      {!isChooseOpen && (
        <div className="detail-bx-container">
          <TicketSearchComp
            label={"Event details"}
            handleCloseContainerClick={handleCloseContainerClick}
            add={"add"}
          />
          <div className="event-detail-container">
            <div className="event-image-banner">
              <img
                src="https://img.freepik.com/free-photo/restaurant-hall-with-tables-decorated-with-tall-vases-with-roses_1304-4823.jpg"
                alt=""
              />
            </div>
            <EventDetailDetailsComp
              handleGetTicketClick={handleGetTicketClick}
            />
            <TicketInfoCalender />
            <ReceverDetail
              receiverDetailRef={receiverDetailRef}
              handleChooseClick={handleChooseClick}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default EventDetail;
