import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CreatePoll.css";
import { FaArrowLeftLong } from "react-icons/fa6";
import SearchBox from "../../../SearchComp/searchBox";
import Notify from "../Notification/Notify";
import MainLayout from "../../../../Layout/MainLayout";
import { url } from "../../../../utils";

const CreatePoll = () => {
  const navigate = useNavigate();

  const [pollData, setPollData] = useState({
    question: "",
    options: ["", ""],
    duration: "",
    type: "",
    media: null,
  });

  const handleInputChange = (field, value) => {
    setPollData({
      ...pollData,
      [field]: value,
    });
  };

  const handleAddOption = () => {
    setPollData({
      ...pollData,
      options: [...pollData.options, ""],
    });
  };

  const handleMediaChange = (e) => {
    const file = e.target.files[0];
    setPollData({
      ...pollData,
      media: file,
    });
  };

 const handleCreatePoll = async () => {
   try {
     const token = localStorage.getItem("authToken");
     const response = await fetch(`${url}/poll/polls`, {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
         Authorization: `Bearer ${token}`, 
       },
       body: JSON.stringify(pollData),
     });

     if (response.ok) {
       navigate("/Voting");
     } else {
       const errorData = await response.json(); 
       console.error("API request failed:", errorData);
     }
   } catch (error) {
     console.error("Error making API request:", error);
   }
 };


  return (
    <div className="home-container" style={{ background: "whiteSmoke" }}>
      <MainLayout>
        <div className="main-containe bus-box-con">
          <div className="left-side-container buss-all-container">
            <div className="create-poll-container">
              <div className="form-wrapper">
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
                  <span style={{ fontSize: "20px" }}>Create Poll</span>
                </div>
                <div className="form-field">
                  <label htmlFor="question">Poll question</label>
                  <input
                    type="text"
                    id="question"
                    placeholder="Enter your question"
                    value={pollData.question}
                    onChange={(e) =>
                      handleInputChange("question", e.target.value)
                    }
                  />
                </div>

                {pollData.options.map((option, index) => (
                  <div className="form-field" key={`option-${index}`}>
                    <label htmlFor={`option-${index}`}>{`Option ${
                      index + 1
                    }`}</label>
                    <input
                      type="text"
                      id={`option-${index}`}
                      placeholder="Type option"
                      value={option}
                      onChange={(e) => {
                        const updatedOptions = [...pollData.options];
                        updatedOptions[index] = e.target.value;
                        handleInputChange("options", updatedOptions);
                      }}
                    />
                  </div>
                ))}

                <div className="add-option" onClick={handleAddOption}>
                  <div className="option-icon"></div>
                  <div className="option-text">Add option</div>
                </div>

                <div className="form-field">
                  <label htmlFor="duration">Poll duration</label>
                  <select
                    id="duration"
                    value={pollData.duration}
                    onChange={(e) =>
                      handleInputChange("duration", e.target.value)
                    }
                  >
                    <option value="">Select one</option>
                    <option value="1">1 hour</option>
                    <option value="24">24 hours</option>
                    <option value="72">72 hours</option>
                  </select>
                </div>

                <div className="form-field">
                  <label htmlFor="type">Poll type</label>
                  <select
                    id="type"
                    value={pollData.type}
                    onChange={(e) => handleInputChange("type", e.target.value)}
                  >
                    <option value="">Select one</option>
                    <option value="multiple">Multiple Choice</option>
                    <option value="binary">Binary (Yes/No)</option>
                  </select>
                </div>

                <div className="form-field">
                  <label htmlFor="media">Add image or video</label>
                  <input
                    type="file"
                    id="media"
                    accept="image/*, video/*"
                    onChange={handleMediaChange}
                  />
                </div>

                <div className="create-poll-btn" onClick={handleCreatePoll}>
                  Create poll
                </div>
              </div>
            </div>
          </div>

          <div
            className="left-side-container"
            style={{ maxWidth: "525px", padding: "20px", background: "#fff" }}
          >
            <SearchBox />
            <Notify />
          </div>
        </div>
      </MainLayout>
    </div>
  );
};

export default CreatePoll;
