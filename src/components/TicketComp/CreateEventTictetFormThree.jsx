import React, { useContext, useEffect, useState } from "react";
import EventContextOne from "../../Context/EventContext/EventContextOne";
import EventContextTwo from "../../Context/EventContext/EventContextTwo";
import EventContextThree from "../../Context/EventContext/EventContextThree";
import ActionButton from "../../components/Commons/Button";
import { url } from "../../utils";

const CreateEventTictetFormThree = ({
  handleCreatTicketThreeCloseContainerClick,
  handleCreatTicketSucessClick,
}) => {
  const contextOne = useContext(EventContextOne);
  const contextTwo = useContext(EventContextTwo);
  const contextThree = useContext(EventContextThree);
  const [isToggled, setToggled] = useState(false);
  const [isPublicToggled, setPublicToggled] = useState(true);
  const [feesOption, setFeesOption] = useState("");
  const [feesOptionError, setFeesOptionError] = useState("");

  const handlePublicToggle = () => {
    setPublicToggled(!isPublicToggled);
  };

  const handleToggle = () => {
    setToggled(!isToggled);
  };

  const handleFeesOptionChange = (e) => {
    setFeesOption(e.target.value);
    setFeesOptionError("");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const handleContinueClick = async () => {
    const requestData = { ...contextOne, ...contextTwo, ...contextThree };
 
    const token = localStorage.getItem('authToken')

    const myHeaders = new Headers();
    myHeaders.append(
      "Authorization", `${token}`
    );

    const formdata = new FormData();
    formdata.append("title", requestData.title);
    formdata.append("desc", requestData.description);
    formdata.append("platform", requestData.platform);
    formdata.append("events_category_name", requestData.eventCategory);
    formdata.append("location", requestData.venue);
    formdata.append("events_category_image", requestData.eventImage, "[PROXY]");
    formdata.append("is_paid", requestData.isPaid);

    requestData.tickets.forEach((ticket, index) => {
      formdata.append(`ticket[${index}][ticket_category]`, ticket.ticket);
      formdata.append(`ticket[${index}][ticket_price]`, ticket.price);
      formdata.append(`ticket[${index}][ticket_quantity]`, ticket.quantity);
      formdata.append(`ticket[${index}][is_free]`, ticket.isFree.toString());
    });

    formdata.append("is_public", requestData.isPublicToggled.toString());
    formdata.append("add_to_sales", "true");

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    try {
      const response = await fetch(
        `${url}/ticket/events/`,
        requestOptions
      );
      if (response.ok) {
        handleCreatTicketSucessClick();
      } else {
        console.error(
          "Error sending data to the backend:",
          response.statusText
        );
      }
    } catch (error) {
      console.error("Error sending data to the backend:", error.message);
    }
  };

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
              <div className="step-txtx ">Additional info</div>
            </div>
          </div>
        </div>
      </div>
      <div className="event-ead">Additional information</div>
      <div className="event-txt">Tell us a bit more about your event</div>
      <div className="main-event-container">
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
            <select
              name="feesOption"
              id="feesOption"
              className="claim-inp"
              value={feesOption}
              onChange={handleFeesOptionChange}
            >
              <option value="">Select an option</option>
              <option value="remove">Remove from ticket sales</option>
              <option value="add">Add to ticket price</option>
            </select>
          </div>
          {feesOptionError && (
            <div className="error-message" style={{ color: "red" }}>
              {feesOptionError}
            </div>
          )}
        </div>

        <div
          className="act-continue-btn"
          onClick={handleCreatTicketSucessClick}
        >
          <ActionButton label={"Continue"} />
        </div>
        <div
          className="bac-formm"
          onClick={handleContinueClick}
        >
          Go Back
        </div>
      </div>
    </>
  );
};

export default CreateEventTictetFormThree;
