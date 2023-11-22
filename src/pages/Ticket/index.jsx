import { useEffect, useState } from "react";
import MainLayout from "../../Layout/MainLayout";
import DashMessage from "../../components/Dashboard/DasMess";
import Follower from "../../components/Dashboard/Follower";
import EventCategory from "../../components/TicketComp/EventCategory";
import EventThisWeek from "../../components/TicketComp/EventThisWeek";
import PopularTicket from "../../components/TicketComp/PopularTicket";
import PromoteTicket from "../../components/TicketComp/PromoteTicket";
import TicketSearh from "../../components/TicketComp/TicketSearch";
import PromotedTicket from "./PromotedTicket";
import "./style.css";
import EventThisWeekAll from "./EventThisWeekAll";
import EventDetail from "./EventDetail";
import SearchResultTicket from "./SearchResultTicket";
import SellTicketDash from "./SellTicketDash";
import TicketReport from "./TicketReport";
import MyEvent from "./MyEvent";

const Ticket = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isWeekOpen, setIsWeekOpen] = useState(false);
  const [isEventDetailOpen, setIsEventDetailOpen] = useState(false);
  const [isSellTicketOpen, setIsSellTicketOpen] = useState(false);
  const [isSearchResultOpen, setIsSearchResultOpen] = useState(false);
  const [isTicketReportOpen, setIsTicketReportOpen] = useState(false);
  const [isMyEventOpen, setIsMyEventOpen] = useState(false);
  const handleMyEventContainerClick = () => {
    setIsMyEventOpen(true);
  };
  const handleMyEventCloseContainerClick = () => {
    setIsMyEventOpen(false);
  };
  const handleTicketReportContainerClick = () => {
    setIsTicketReportOpen(true);
  };
  const handleTicketReportCloseContainerClick = () => {
    setIsTicketReportOpen(false);
  };

  const handleSearchResultContainerClick = () => {
    setIsSearchResultOpen(true);
  };
  const handleSearchResultCloseContainerClick = () => {
    setIsSearchResultOpen(false);
  };
  const handleSellTicketContainerClick = () => {
    setIsSellTicketOpen(true);
    setIsEventDetailOpen(false);
    setIsModalOpen(false);
    setIsWeekOpen(false);
  };
  const handleBackClick = () => {
    setIsMyEventOpen(false);
    setIsSellTicketOpen(true);
  };
  const handleSellTicketCloseContainerClick = () => {
    setIsSellTicketOpen(false);
    setIsMyEventOpen(false);
    setIsTicketReportOpen(false);
    setIsEventDetailOpen(false);
    setIsModalOpen(false);
    setIsWeekOpen(false);
  };
  const handleEventDetailContainerClick = () => {
    setIsEventDetailOpen(true);
  };
  const handleEventDetailCloseContainerClick = () => {
    setIsEventDetailOpen(false);
  };

  const handleWeekContainerClick = () => {
    setIsWeekOpen(true);
  };
  const handleWeekCloseContainerClick = () => {
    setIsWeekOpen(false);
  };

  const handleContainerClick = () => {
    setIsModalOpen(true);
  };
  const handleCloseContainerClick = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="home-container">
        <MainLayout>
          <div className="main-containe bus-box-con">
            <div className="left-side-container buss-all-container">
              <div className="sell-manage-cont">
                {isSellTicketOpen && (
                  <div className="btn-sell-pro">
                    <button
                      className="sell-item-comm inc seell"
                      onClick={handleSellTicketCloseContainerClick}
                    >
                      Buy tickets
                    </button>
                  </div>
                )}

                {!isSellTicketOpen && (
                  <div className="btn-sell-pro">
                    <button
                      className="sell-item-comm inc seell"
                      onClick={handleSellTicketContainerClick}
                    >
                      Sell tickets
                    </button>
                  </div>
                )}
              </div>
              {isModalOpen && (
                <PromotedTicket
                  handleCloseContainerClick={handleCloseContainerClick}
                />
              )}
              {isWeekOpen && (
                <EventThisWeekAll
                  handleCloseContainerClick={handleWeekCloseContainerClick}
                />
              )}
              {isEventDetailOpen && (
                <EventDetail
                  handleCloseContainerClick={
                    handleEventDetailCloseContainerClick
                  }
                />
              )}
              {!isTicketReportOpen && !isMyEventOpen && isSellTicketOpen && (
                <SellTicketDash
                  handleCloseContainerClick={
                    handleSellTicketCloseContainerClick
                  }
                  handleTicketReportContainerClick={
                    handleTicketReportContainerClick
                  }
                  handleMyEventContainerClick={handleMyEventContainerClick}
                />
              )}
              {isTicketReportOpen && (
                <TicketReport
                  handleTicketReportCloseContainerClick={
                    handleTicketReportCloseContainerClick
                  }
                />
              )}
              {isMyEventOpen && (
                <MyEvent
                  handleMyEventCloseContainerClick={
                    handleMyEventCloseContainerClick
                  }
                  handleBackClick={handleBackClick}
                />
              )}
              {isSearchResultOpen && (
                <SearchResultTicket
                  handleCloseContainerClick={
                    handleSearchResultCloseContainerClick
                  }
                />
              )}
              {!isModalOpen &&
                !isWeekOpen &&
                !isEventDetailOpen &&
                !isSellTicketOpen &&
                !isTicketReportOpen &&
                !isMyEventOpen &&
                !isSearchResultOpen && (
                  <div>
                    <div className="head-line bus-dir">Tickets</div>
                    <TicketSearh
                      handleSearchResultContainerClick={
                        handleSearchResultContainerClick
                      }
                    />
                    <PopularTicket
                      handleEventDetailContainerClick={
                        handleEventDetailContainerClick
                      }
                    />
                    <PromoteTicket
                      handleContainerClick={handleContainerClick}
                    />
                    <EventCategory />
                    <EventThisWeek
                      handleWeekContainerClick={handleWeekContainerClick}
                    />
                  </div>
                )}
            </div>
            <div className="middle-side-container">
              <img src="images/ads1.png" alt="" />
            </div>
            <div className="right-side-container">
              {isSellTicketOpen && (
                <div className="btn-sell-pro">
                  <button
                    className="sell-item-comm tic-sell"
                    onClick={handleSellTicketCloseContainerClick}
                  >
                    Buy tickets
                  </button>
                </div>
              )}

              {!isSellTicketOpen && (
                <div className="btn-sell-pro">
                  <button
                    className="sell-item-comm tic-sell"
                    onClick={handleSellTicketContainerClick}
                  >
                    Sell tickets
                  </button>
                </div>
              )}
              <Follower />
              <div className="mess-bxx-conn">
                <DashMessage />
              </div>
            </div>
          </div>
        </MainLayout>
      </div>
    </>
  );
};

export default Ticket;
