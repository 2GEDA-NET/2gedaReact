import React, { useState } from "react";
import ActionButton from "../Commons/Button";
import { submitFormData } from "../../utils/apiService";

const CreateEventTictetFromOne = ({ handleCreatTicketTwoContainerClick }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [platform, setPlatform] = useState(false);
  const [image, setImage] = useState("");
  const [venueName, setVenueName] = useState("");
  const [venueAddress, setVenueAddress] = useState("");
  const [platformName, setPlatformName] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = "Event title is required";
    if (!description.trim())
      newErrors.description = "Event description is required";
    if (!image) newErrors.image = "Cover image is required";

    if (platform) {
      if (!platformName.trim())
        newErrors.platformName = "Platform name is required";
      if (!websiteUrl.trim()) newErrors.websiteUrl = "Website URL is required";
    } else {
      if (!venueName.trim()) newErrors.venueName = "Venue name is required";
      if (!venueAddress.trim())
        newErrors.venueAddress = "Venue address is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => setImage(reader.result);

    if (file) reader.readAsDataURL(file);
  };

  const handlePlatfornClick = () => setPlatform(!platform);

  const handleContinueClick = async () => {
    if (validateForm()) {
      try {
        const formData = {
          title,
          desc: description,
          platform,
          venueName,
          venueAddress,
          platformName,
          websiteUrl,
        };

        await submitFormData(formData);

        handleCreatTicketTwoContainerClick();
      } catch (error) {
        console.error("Error submitting form", error);
      }
    }
  };

  return (
    <>
      <div className="event-inp-overall-cont">
        <label htmlFor="" className="adj">
          Event title
        </label>
        <input
          type="text"
          className="create-evt-inp"
          placeholder="Enter your event title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {errors.title && (
          <div className="error-message" style={{ color: "red" }}>
            {errors.title}
          </div>
        )}
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
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        {errors.description && (
          <div className="error-message" style={{ color: "red" }}>
            {errors.description}
          </div>
        )}
        <div className="ins-create">0/500 words</div>
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
              <div className="add-vid">Upload event image</div>
              <div className="even-inst">
                Upload a compelling image. We recommend using at least a
                2160x1080px (2:1 ratio) image that's no larger than 10MB
              </div>
            </label>
          </>
        )}
        {errors.image && (
          <div className="error-message" style={{ color: "red" }}>
            {errors.image}
          </div>
        )}
      </div>

      {platform ? (
        <div className="venu-plat-cont">
          <div className="event-inp-overall-cont">
            <label htmlFor="" className="adj">
              Platform name
            </label>
            <input
              type="text"
              className="create-evt-inp"
              placeholder="skype, google meet, webinar, etc."
              value={platformName}
              onChange={(e) => setPlatformName(e.target.value)}
            />
            {errors.platformName && (
              <div className="error-message" style={{ color: "red" }}>
                {errors.platformName}
              </div>
            )}
          </div>

          <div className="event-inp-overall-cont">
            <label htmlFor="" className="adj">
              Website link or URL
            </label>
            <input
              type="text"
              className="create-evt-inp"
              placeholder="https://www.example.com"
              value={websiteUrl}
              onChange={(e) => setWebsiteUrl(e.target.value)}
            />
            {errors.websiteUrl && (
              <div className="error-message" style={{ color: "red" }}>
                {errors.websiteUrl}
              </div>
            )}
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
              value={venueName}
              onChange={(e) => setVenueName(e.target.value)}
            />
            {errors.venueName && (
              <div className="error-message" style={{ color: "red" }}>
                {errors.venueName}
              </div>
            )}
          </div>

          <div className="event-inp-overall-cont">
            <label htmlFor="" className="adj">
              Venue address
            </label>
            <input
              type="text"
              className="create-evt-inp"
              placeholder="Give a clear address to help your attendees locate your event."
              value={venueAddress}
              onChange={(e) => setVenueAddress(e.target.value)}
            />
            {errors.venueAddress && (
              <div className="error-message" style={{ color: "red" }}>
                {errors.venueAddress}
              </div>
            )}
          </div>
        </div>
      )}

      <div className="act-continue-btn" onClick={handleContinueClick}>
        <ActionButton label={"Continue"} type={"button"} />
      </div>
    </>
  );
};

export default CreateEventTictetFromOne;
