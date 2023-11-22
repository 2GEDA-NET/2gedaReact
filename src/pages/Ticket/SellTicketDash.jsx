import { useEffect, useState } from "react";
import TicketSearchComp from "../../components/TicketComp/TicketSearchComp";
import TicketDashCard from "../../components/TicketComp/TicketDashCard";
import ActionButton from "../../components/Commons/Button";
import CreateEventTicket from "./CreateEventTicket";
import { AiOutlinePlus } from "react-icons/ai";
import Payout from "./Payout";

const jsonData = {
  Month: {
    allSellText: "#25,000",
    sellPerText: " this month",
    totSell: "10",
    totalEvent: "250",
  },
  Weekly: {
    allSellText: "#2500",
    sellPerText: " this week",
    totSell: "4",
    totalEvent: "250",
  },
  Yearly: {
    allSellText: "#250,000",
    sellPerText: " this year",
    totSell: "700",
    totalEvent: "250",
  },
};

const SellTicketDash = ({
  handleCloseContainerClick,
  handleTicketReportContainerClick,
  handleMyEventContainerClick,
}) => {
  const [selectedOption, setSelectedOption] = useState("Month");
  const [isCreatTicketOpen, setIsCreatTicketOpen] = useState(false);
  const [isPayoutOpen, setIsPayoutOpen] = useState(false);

  const handlePayoutContainerClick = () => {
    setIsPayoutOpen(true);
  };
  const handlePayoutCloseContainerClick = () => {
    setIsPayoutOpen(false);
  };

  const handleCreatTicketContainerClick = () => {
    setIsCreatTicketOpen(true);
  };
  const handleCreatTicketCloseContainerClick = () => {
    setIsCreatTicketOpen(false);
  };

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const { allSellText, sellPerText, totSell, totalEvent } =
    jsonData[selectedOption];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {isCreatTicketOpen && (
        <CreateEventTicket
          handleCreatTicketCloseContainerClick={
            handleCreatTicketCloseContainerClick
          }
        />
      )}
      {isPayoutOpen && (
        <Payout
          handlePayoutCloseContainerClick={handlePayoutCloseContainerClick}
        />
      )}

      {!isCreatTicketOpen && !isPayoutOpen && (
        <>
          <TicketSearchComp
            label={"Sell Tickets"}
            handleCloseContainerClick={handleCloseContainerClick}
            add={"add"}
          />
          <div className="main-sell-ticket-container">
            <div className="analytic-select-filter flex">
              <div className="anal-txt">Analytics</div>
              <select
                name=""
                id=""
                className="sell-filter-sel"
                value={selectedOption}
                onChange={handleSelectChange}
              >
                <option value="Month">Month</option>
                <option value="Weekly">Weekly</option>
                <option value="Yearly">Yearly</option>
              </select>
            </div>
            <div className="ticket-dash-row flex">
              <TicketDashCard
                allSellText={totalEvent}
                sellPerText={sellPerText}
                totSell={totSell}
                cardName={"Total Event"}
                click={handleMyEventContainerClick}
              />
              <TicketDashCard
                bg={"sold"}
                allSellText={allSellText}
                sellPerText={sellPerText}
                totSell={totSell}
                cardName={"Total Sold"}
                click={handleTicketReportContainerClick}
              />
            </div>
            <div className="earning-container">
              <div className="anal-txt">Earnings</div>
              <div className="box-earn-req flex">
                <div className="total-earn-amt-bx">
                  <div className="earn-tot-row flex">
                    <div className="tot-ern">Total earnings</div>
                    <div className="tot-ammt"># 485,920.50</div>
                  </div>
                  <div className="earning-bx-con flex">
                    <div className="tot-earn-cont">
                      <div className="earn-in-bx flex">
                        <div className="tot-ern">Earnings in</div>
                        <select name="" id="" className="earn-sel">
                          <option value="January">Jan</option>
                          <option value="Feburary">Feb</option>
                          <option value="March">Mar</option>
                          <option value="April">Apr</option>
                          <option value="May">May</option>
                          <option value="June">Jun</option>
                        </select>
                      </div>
                      <div className="tot-ammt"># 485,920.50</div>
                    </div>
                    <img src="images/chart1.png" alt="" />
                  </div>
                  <div className="earn-tot-row flex">
                    <div className="tot-ern">Current balance</div>
                    <div className="tot-ammt"># 485,920.50</div>
                  </div>
                </div>
                <div
                  className="req-act-btn"
                  onClick={handlePayoutContainerClick}
                >
                  <ActionButton label={"Request withdrawal"} bg={"sms"} />
                </div>
              </div>
            </div>

            <div
              className="add-ticket"
              onClick={handleCreatTicketContainerClick}
            >
              <AiOutlinePlus />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default SellTicketDash;
