import { useEffect, useState } from "react";
import TicketSearchComp from "../../components/TicketComp/TicketSearchComp";
import ActionButton from "../../components/Commons/Button";
import SuccessTicketPurc from "./SuccessTicketPurc";

const ChooseTicket = ({ handleCloseChooseClick, handleCloseAllClick }) => {
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const handleSuccessClick = () => {
    setIsSuccessOpen(true);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {isSuccessOpen && (
        <SuccessTicketPurc handleCloseAllClick={handleCloseAllClick} />
      )}
      {!isSuccessOpen && (
        <div className="detail-bx-container bagw">
          <TicketSearchComp
            label={"Choose your ticket"}
            handleCloseContainerClick={handleCloseChooseClick}
            add={"add"}
          />
          <form action="">
            <div className="coose-tic-cont">
              <div className="tic-choser-box">
                <div className="row-choose">
                  <div className="event-name-choose">Meta app unveil</div>
                </div>
                <div className="row-choose">
                  <div className="reg-vp-con">
                    <div className="reg-vp-row">
                      <div className="reg-v-txt">Regular</div>
                      <div className="reg-vp-pric"># 3,000.00</div>
                    </div>
                    <div className="select-count">
                      <select name="" id="" className="select-inpcount">
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row-choose">
                  <div className="reg-vp-con">
                    <div className="reg-vp-row">
                      <div className="reg-v-txt">VIP</div>
                      <div className="reg-vp-pric"># 5,000.00</div>
                    </div>
                    <div className="select-count">
                      <select name="" id="" className="select-inpcount">
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tot-total-amt">
                <div className="tot-tst">Total</div>
                <div className="tot-amtt"># 13,000.00</div>
              </div>

              <div className="choose-act-btn" onClick={handleSuccessClick}>
                <ActionButton label={"Continue to payment"} bg={"wid"} />
              </div>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default ChooseTicket;
