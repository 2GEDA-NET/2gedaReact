import { useContext, useEffect } from "react";
import ActionButton from "../../components/Commons/Button";
import { useState } from "react";
import EventContextOne from "../../Context/EventContext/EventContext";

const CreateEventTictetFormThree = ({
  handleCreatTicketThreeCloseContainerClick,
  handleCreatTicketSucessClick,
}) => {
  const [isToggled, setToggled] = useState(false);
  const [isPublicToggled, setPublicToggled] = useState(true);

  const url = "https://king-prawn-app-venn6.ondigitalocean.app/ticket/events/";

  const {
    title,
    setTitle,
    description,
    setDescription,
    eventImage,
    setEventImage,
    venue,
    setVenue,
    venueAddress,
    setVenueAddress,
  } = useContext(EventContextOne);

  const finalSubmit = async () => {
    const data = {
      title: title,
      dec: description,
      platform: venueAddress,
      events_category_name: "",
      ticket_category: "",
      ticket_price: 100,
      ticket_quantity: 2,
      location: "Oluyole Estate",
      is_paid: true,
    };

    const response = fetch(url, {
      body: JSON.stringify(data),
      headers: {
        "Authorization": "Token 65b55bb46605a175c3d5f16be2bcb83e7015305c",
        "Content-Type": "application/json"
      },

    })
    const responseBody = response.json()
    if (!response.ok){
        console.log("hello")
    }
  };

  const handlePublicToggle = () => {
    setPublicToggled(!isPublicToggled);
  };
  const handleToggle = () => {
    setToggled(!isToggled);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="stepper-cont-bx">
        <div className="lin-btw"></div>

        <div className="pos-cir">
          <div className="cir-stepper-container flex">
            <div className="each-step-bx flex">
              <div className="ci-eac"></div>
              <div className="step-txtx">Event info</div>
            </div>
            <div className="each-step-bx flex">
              <div className="ci-eac "></div>
              <div className="step-txtx ">Create ticket</div>
            </div>

            <div className="each-step-bx flex">
              <div className="ci-eac "></div>
              <div className="step-txtx ">Additonal info</div>
            </div>
          </div>
        </div>
      </div>
      <div className="event-ead">Additional information</div>
      <div className="event-txt">Tell us a bit more about your event</div>
      <div className="main-event-container">
        {/* <div className={`${isToggled ? "on" : "off"}`}>
          {isToggled ? "on" : "off"}
        </div> */}

        <div className="add-info-cont flex">
          <div className="add-inf-txtx">
            <div className="main-add-info">Show remaining tickets</div>
            <div className="body-add-info">
              Show the number of remaining tickets on your events
            </div>
          </div>
          <div className="toggle-container">
            <label className="switch">
              <input type="checkbox" onChange={handleToggle} />
              <span className={`slider ${isToggled ? "on" : "off"}`} />
            </label>
          </div>
        </div>

        <hr className="add-info-line" />

        <div className="event-ead bw-bit">Event Listing Privacy</div>
        <div className="add-info-cont flex">
          <div className="add-inf-txtx">
            {isPublicToggled ? (
              <>
                <div className="main-add-info">Private</div>
                <div className="body-add-info">
                  Only people you share invite link can find your event
                </div>
              </>
            ) : (
              <>
                <div className="main-add-info">Public</div>
                <div className="body-add-info">
                  Your event can be found by anyone on our app, our promotion
                  partners, and search engines
                </div>
              </>
            )}
          </div>
          <div className="toggle-container">
            <label className="switch">
              <input type="checkbox" onChange={handlePublicToggle} />
              <span className={`slider ${isPublicToggled ? "on" : "off"}`} />
            </label>
          </div>
        </div>
        <div className={`${isToggled ? "on" : "off"}`}>
          {isPublicToggled ? "on" : "off"}
        </div>

        <div className="event-ead">Fees settings</div>
        <div className="event-txt bw-bit">
          Please specify if transaction fees would be passed on to buyers or
          charged from your account. We charge 5% + N200.
        </div>
        <div className="double-input">
          <div className="inp-label-box">
            <select name="" id="" className="claim-inp ">
              <option value="">Select an option</option>
              <option value="Driver_licence">Remove from ticket sales</option>
              <option value="NIN">Add to ticket price</option>
            </select>
          </div>
        </div>

        <div
          className="act-continue-btn"
          onClick={handleCreatTicketSucessClick}
        >
          <div className="act-btn-cont">
            <button
              type="submit"
              onClick={finalSubmit}
              className={`action-btn `}
            >
              Continue
            </button>
          </div>
        </div>
        <div
          className="bac-formm"
          onClick={handleCreatTicketThreeCloseContainerClick}
        >
          Go Back
        </div>
      </div>
    </>
  );
};

export default CreateEventTictetFormThree;
