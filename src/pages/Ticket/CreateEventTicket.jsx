import { useEffect, useState } from "react";
import TicketSearchComp from "../../components/TicketComp/TicketSearchComp";
import CreateEventTictetFromOne from "../../components/TicketComp/CreateEventTictetFromOne";
import CreateEventTictetFormTwo from "../../components/TicketComp/CreateEventTictetFormTwo";
import CreateEventTictetFormThree from "../../components/TicketComp/CreateEventTictetFormThree";
import SuccessTicketCreate from "./SuccessTicketCreate";
import React from "react";
import EventOneContextProvider from "../../Context/EventContext/EventContextProvider";
import EventTwoContextProvider from "../../Context/EventContext/EventContextProviderTwo";

const CreateEventTicket = ({ handleCreatTicketCloseContainerClick }) => {
  const [isCreatTicketThreeOpen, setIsCreatTicketThreeOpen] = useState(false);
  const [isCreatTicketTwoOpen, setIsCreatTicketTwoOpen] = useState(false);
  const [isCreatTicketSucessOpen, setIsCreatTicketSucessOpen] = useState(false);

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
      <form action="">
        {!isCreatTicketTwoOpen && !isCreatTicketThreeOpen && (
          <EventOneContextProvider>
            <CreateEventTictetFromOne
              handleCreatTicketTwoContainerClick={
                handleCreatTicketTwoContainerClick
              }
            />
          </EventOneContextProvider>
        )}
        {!isCreatTicketThreeOpen && isCreatTicketTwoOpen && (
          <EventTwoContextProvider>
            <CreateEventTictetFormTwo
              handleCreatTicketTwoCloseContainerClick={
                handleCreatTicketTwoCloseContainerClick
              }
              handleCreatTicketThreeContainerClick={
                handleCreatTicketThreeContainerClick
              }
            />
          </EventTwoContextProvider>
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
        {isCreatTicketSucessOpen && (
          <SuccessTicketCreate handleCloseAllClick={handleCloseAllClick} />
        )}
      </form>
    </>
  );
};

export default CreateEventTicket;
