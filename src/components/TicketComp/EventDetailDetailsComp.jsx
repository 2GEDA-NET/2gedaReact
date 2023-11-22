import { MdLocationOn, MdOutlineCalendarMonth } from "react-icons/md";
import ActionButton from "../Commons/Button";

const EventDetailDetailsComp = ({ handleGetTicketClick }) => {
  return (
    <div className="event-details-box-cont">
      <div className="event-txt-detaill">
        <div className="event-det-nm redd">Meta app unveil</div>
        <div className="location-box chang">
          <MdLocationOn />
          <div className="loca-txt loc-red">
            Eko Hotel and suites conference hall{" "}
          </div>
        </div>
        <div className="location-box">
          <MdOutlineCalendarMonth />
          <div className="loca-txt loc-red">Thur, 17 Aug 2023 , 9:30 PM </div>
        </div>
      </div>
      <div className="det-action-btn" onClick={handleGetTicketClick}>
        <ActionButton label={"Get ticket"} bg={"redddd"} />
      </div>
    </div>
  );
};

export default EventDetailDetailsComp;
