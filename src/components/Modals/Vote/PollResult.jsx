import React from 'react'
import Stick from '../../Dashboard/Stick'
import { FaArrowLeftLong, FaChevronDown } from 'react-icons/fa6';

const PollResult = () => {
  return (
    <div style={{ maxWidth: "500px"  }}>
      <div
        className="createTop"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "40px",
          paddingBottom: "20px",
        }}
      >
        <FaArrowLeftLong style={{ fontSize: "20px" }} />
        <span style={{ fontSize: "20px" }}>Poll Result</span>
      </div>

      <div>
        <h3>What is your preferred programming language</h3>
        <p style={{ textAlign: "start" }}>252 Votes</p>
      </div>

      <div
            style={{
                border: "1px solid #ccc",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "10px 30px"
        }}
      >
        <div>
          <h3>Python</h3>
          <p style={{ textAlign: "start" }}>220 votes</p>
        </div>
        <FaChevronDown style={{fontSize: "20px"}} />
      </div>
      <Stick />
      <Stick />
      <Stick />
      <Stick />
      <Stick />
    </div>
  );
}

export default PollResult
