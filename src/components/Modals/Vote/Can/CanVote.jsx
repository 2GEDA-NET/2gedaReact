import React, { useState } from "react";
import Avatar from "react-avatar";
import "./styles.css";
import { FaCheckCircle, FaClock } from "react-icons/fa";

const CanVote = () => {
  const [votes, setVotes] = useState([0, 0]);

  const handleVote = (index) => {
    const updatedVotes = [...votes];
    updatedVotes[index] += 1;
    setVotes(updatedVotes);
  };

  const getTotalVotes = () => {
    return votes.reduce((total, vote) => total + vote, 0);
  };

  const getPercentage = (index) => {
    const totalVotes = getTotalVotes();
    return totalVotes === 0 ? 0 : (votes[index] / totalVotes) * 100;
  };

  const getHighestIndex = () => {
    const highest = votes.indexOf(Math.max(...votes));
    return highest === -1 ? -1 : highest;
  };

  return (
    <div className="can-vote">
      <div className="info">
        <div className="use">
          <Avatar name="John Doe" size="25" round className="avatar" />
          <p>John Doe</p>
        </div>
        <p>Today @ 12:09PM</p>
      </div>

      <div className="vote">
        <p className="details">What is your preferred programming language</p>
        <div className="poll">
          <div className="lylac" onClick={() => handleVote(0)}>
            <p style={{ fontSize: "12px", textAlign: "start" }}>Python</p>
            <div
              className={`egg-bg ${getHighestIndex() === 0 ? "highest" : ""}`}
            >
              {getHighestIndex() === 0 && (
                <FaCheckCircle className="verified-icon" />
              )}
              <div
                className="egg-bg-before"
                style={{ width: `${getPercentage(0)}%` }}
              ></div>
              <p
                style={{
                  color: "white",
                  position: "absolute",
                  top: "50%",
                  right: "5px",
                  transform: "translateY(-50%)",
                  textAlign: "center",
                }}
              >
                {getPercentage(0).toFixed(2)}%
              </p>
            </div>
          </div>
          <div className="lylac" onClick={() => handleVote(1)}>
            <p style={{ fontSize: "12px", textAlign: "start" }}>JavaScript</p>
            <div
              className={`egg-bg egg-bge ${
                getHighestIndex() === 1 ? "highest" : ""
              }`}
            >
              {getHighestIndex() === 1 && (
                <FaCheckCircle className="verified-icon" />
              )}
              <div
                className="egg-bg-before"
                style={{ width: `${getPercentage(1)}%` }}
              ></div>
              <p
                style={{
                  color: "white",
                  position: "absolute",
                  top: "50%",
                  right: "5px",
                  transform: "translateY(-50%)",
                  textAlign: "center",
                }}
              >
                {getPercentage(1).toFixed(2)}%
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="info">
        <span>
          <p>
            <span style={{ paddingRight: "10px" }}>
              <FaClock />
            </span>
            2 days remaining
          </p>
        </span>
        <p>{getTotalVotes()} votes</p>
      </div>
    </div>
  );
};

export default CanVote;
