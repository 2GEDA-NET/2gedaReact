import React from "react";
import "./styles.css";
import { FaPoll, FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router-dom";

const Notify = () => {
  return (
    <div className="notification-container">
      <h2 className="head-line bus-dir">Voting</h2>
      <div className="parPoll">
        <div className="bpoll">
          <div className="icon-circle">
            <FaPoll />
          </div>
          <div className="notification-content">
            <p>
              Your <strong>Poll</strong> has ended
            </p>
            <p style={{ textAlign: "start" }}>10 mins</p>
          </div>
        </div>
        <Link to="/PollResult">View result</Link>
      </div>

      <div className="bpoll">
        <div className="icon-circle">
          <FaShoppingBag />
        </div>
        <div className="notification-content">
          <p>
            <strong>Kayode Shank</strong> made payment for <strong>20 Votes</strong>
          </p>
          <p style={{ textAlign: "start" }}>10 mins</p>
        </div>
      </div>
    </div>
  );
};

export default Notify;
