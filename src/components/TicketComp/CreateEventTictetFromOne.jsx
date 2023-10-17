import { BsUpload, BsLaptop } from "react-icons/bs";
import { IoLocation } from "react-icons/io5";
import ActionButton from "../../components/Commons/Button";
import { useState } from "react";
const CreateEventTictetFromOne = ({ handleCreatTicketTwoContainerClick }) => {
  const [isPlatforn, setIsPlatforn] = useState(false);
  const [image, setImage] = useState("");

  const handleImageChange = (event) => {
    // Handling the image change
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };
  const handlePlatfornClick = () => {
    setIsPlatforn(!isPlatforn);
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
              <div className="ci-eac not-ac"></div>
              <div className="step-txtx not-ac-txt">Create ticket</div>
            </div>

            <div className="each-step-bx flex">
              <div className="ci-eac not-ac"></div>
              <div className="step-txtx not-ac-txt">Additonal info</div>
            </div>
          </div>
        </div>
      </div>
      <div className="event-ead">Event info</div>
      <div className="event-txt">Tell us a bit about your event</div>
      <div className="main-event-container">
        <div className="event-inp-overall-cont">
          <label htmlFor="" className="adj">
            Event title
          </label>
          <input
            type="text"
            className="create-evt-inp"
            placeholder="Enter your event title"
          />
          <div className="ins-create">0/50 words</div>
        </div>
        <div className="event-inp-overall-cont">
          <label htmlFor="" className="adj">
            Event description
          </label>
          <textarea
            type="text"
            className="create-evt-inp area-evn"
            placeholder="Enter your event details. It may contain FAQs and what attendees should expect from the event"
          />
          <div className="ins-create">0/500 wordss</div>
        </div>
        <div className="event-inp-overall-cont dotted">
          {!image && (
            <label htmlFor="" className="ad-pic">
              Cover image
            </label>
          )}
          <input
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            id="pic-input"
            onChange={handleImageChange}
          />
          {image ? (
            <label htmlFor="pic-input">
              <div className="img-con-cv">
                <img src={image} alt="uploaded" />
              </div>
            </label>
          ) : (
            <>
              <label htmlFor="pic-input" className="dra-im">
                <BsUpload />
                <div className="add-vid">Upload event image</div>
                <div className="even-inst">
                  Upload a compelling image. We recommend using at least a
                  2160x1080px (2:1 ratio) image that's no larger than 10MB
                </div>
              </label>
            </>
          )}
        </div>
        {isPlatforn ? (
          <div className="plat-venue-bx" onClick={handlePlatfornClick}>
            <IoLocation />
            <div className="txt-pl-vn">Physical event?</div>
          </div>
        ) : (
          <div className="plat-venue-bx" onClick={handlePlatfornClick}>
            <BsLaptop />
            <div className="txt-pl-vn">Online event?</div>
          </div>
        )}

        {isPlatforn ? (
          <div className="venu-plat-cont">
            <div className="event-inp-overall-cont">
              <label htmlFor="" className="adj">
                Platform name
              </label>
              <input
                type="text"
                className="create-evt-inp"
                placeholder="skype, google meet, webinar, etc."
              />
            </div>
            <div className="event-inp-overall-cont">
              <label htmlFor="" className="adj">
                Website link or URL
              </label>
              <input
                type="text"
                className="create-evt-inp"
                placeholder="https://www.example.com"
              />
            </div>
          </div>
        ) : (
          <div className="venu-plat-cont">
            <div className="event-inp-overall-cont">
              <label htmlFor="" className="adj">
                Venue name
              </label>
              <input
                type="text"
                className="create-evt-inp"
                placeholder="Name of hotel, building or event centre"
              />
            </div>
            <div className="event-inp-overall-cont">
              <label htmlFor="" className="adj">
                Venue address
              </label>
              <input
                type="text"
                className="create-evt-inp"
                placeholder="Give a clear address to help your attendees locate your event. "
              />
            </div>
          </div>
        )}
        <div
          className="act-continue-btn"
          onClick={handleCreatTicketTwoContainerClick}
        >
          <ActionButton label={"Continue"} type={"button"} />
        </div>
      </div>
    </>
  );
};

export default CreateEventTictetFromOne;
