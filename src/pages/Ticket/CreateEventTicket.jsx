import { useEffect, useState } from "react";
import TicketSearchComp from "../../components/TicketComp/TicketSearchComp";
import CreateEventTictetFromOne from "../../components/TicketComp/CreateEventTictetFromOne";
import CreateEventTictetFormTwo from "../../components/TicketComp/CreateEventTictetFormTwo";
import CreateEventTictetFormThree from "../../components/TicketComp/CreateEventTictetFormThree";
import SuccessTicketCreate from "./SuccessTicketCreate";
import axios from "axios";
import { API_BASE_URL } from "../../ProtectedRoute";

const CreateEventTicket = ({ handleCreatTicketCloseContainerClick }) => {
  const [isCreatTicketThreeOpen, setIsCreatTicketThreeOpen] = useState(false);
  const [isCreatTicketTwoOpen, setIsCreatTicketTwoOpen] = useState(false);
  const [isCreatTicketSucessOpen, setIsCreatTicketSucessOpen] = useState(false);
  const [image, setImage] = useState("");
  const [eventTitle, setEventTitle] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [platformName, setPlatformName] = useState("jkk");
  const [platformUrl, setPlatformUrl] = useState("");
  const [venueName, setVenueName] = useState("");
  const [venueAddress, setVenueAddress] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [tickets, setTickets] = useState([
    {
      name: "",
      quantity: "",
      price: "FREE TICKET",
    },
  ]);
  // console.log(image);
  const handleCreatTicketSucessClick = (e) => {
    e.preventDefault();
    setIsCreatTicketSucessOpen(true);
  };

  const handleCloseAllClick = () => {
    setIsCreatTicketSucessOpen(false);
    setIsCreatTicketTwoOpen(false);
    setIsCreatTicketThreeOpen(false);
    handleCreatTicketCloseContainerClick();
  };

  const handleCreatTicketTwoContainerClick = () => {
    setIsCreatTicketTwoOpen(true);
  };

  const handleCreatTicketTwoCloseContainerClick = () => {
    setIsCreatTicketTwoOpen(false);
  };
  const handleCreatTicketThreeContainerClick = () => {
    setIsCreatTicketThreeOpen(true);
  };
  const handleCreatTicketThreeCloseContainerClick = () => {
    setIsCreatTicketThreeOpen(false);
  };
  const authToken = localStorage.getItem("authToken");

  const url = `${API_BASE_URL}/ticket/events/`;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Data to be sent

    const formData = new FormData();
    formData.append("title", eventTitle);
    formData.append("desc", eventDescription);
    formData.append("platform", platformName);
    formData.append("events_category_name", selectedCategory);
    formData.append("ticket_price", tickets.price);
    formData.append("ticket_quantity", tickets.quantity);
    formData.append("location", venueAddress);
    formData.append("ticket_category", tickets.name);
    formData.append("image", image);
    formData.append("url", platformUrl);
    console.log("FormData:", formData);
    for (const pair of formData.entries()) {
      console.log(pair[0], pair[1]);
    }

    // Make the POST request
    axios
      .post(url, formData, {
        headers: {
          Authorization: `Token ${authToken}`,
          "Content-Type": "multipart/form-data",
        },
      })

      .then((response) => {
        console.log("Response:", response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {!isCreatTicketSucessOpen && (
        <TicketSearchComp
          label={"Create event"}
          handleCloseContainerClick={handleCreatTicketCloseContainerClick}
          add={"add"}
        />
      )}
      <form action="" onSubmit={handleSubmit}>
        {!isCreatTicketTwoOpen && !isCreatTicketThreeOpen && (
          <CreateEventTictetFromOne
            handleCreatTicketTwoContainerClick={
              handleCreatTicketTwoContainerClick
            }
            image={image}
            setImage={setImage}
            eventTitle={eventTitle}
            setEventTitle={setEventTitle}
            eventDescription={eventDescription}
            setEventDescription={setEventDescription}
            platformName={platformName}
            setPlatformName={setPlatformName}
            platformUrl={platformUrl}
            setPlatformUrl={setPlatformUrl}
            venueName={venueName}
            setVenueName={setVenueName}
            venueAddress={venueAddress}
            setVenueAddress={setVenueAddress}
          />
        )}
        {!isCreatTicketThreeOpen && isCreatTicketTwoOpen && (
          <CreateEventTictetFormTwo
            handleCreatTicketTwoCloseContainerClick={
              handleCreatTicketTwoCloseContainerClick
            }
            handleCreatTicketThreeContainerClick={
              handleCreatTicketThreeContainerClick
            }
            setTickets={setTickets}
            tickets={tickets}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        )}
        {!isCreatTicketSucessOpen && isCreatTicketThreeOpen && (
          <CreateEventTictetFormThree
            handleCreatTicketThreeCloseContainerClick={
              handleCreatTicketThreeCloseContainerClick
            }
            handleCreatTicketSucessClick={handleCreatTicketSucessClick}
            isCreatTicketSucessOpen={isCreatTicketSucessOpen}
            handleCloseAllClick={handleCloseAllClick}
          />
        )}
      </form>
      {isCreatTicketSucessOpen && (
        <SuccessTicketCreate handleCloseAllClick={handleCloseAllClick} />
      )}
    </>
  );
};

export default CreateEventTicket;
