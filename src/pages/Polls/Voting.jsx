import React, { useState, useEffect } from "react";
import "./styles.css";
import MainLayout from "../../Layout/MainLayout";
import PollsSearch from "../../components/PollsComp/PollsSearch";
import CantVote from "../../components/Modals/Vote/Cant/CantVote";
import CanVote from "../../components/Modals/Vote/Can/CanVote";
import Poll from "../../components/Modals/Vote/Can/Poll";
import SearchBox from "../../components/SearchComp/searchBox";
import Notify from "../../components/Modals/Vote/Notification/Notify";
import { Modal } from "react-bootstrap";

const Voting = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [responseData, setResponseData] = useState(null);
  const [promoted, setPromoted] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const token = localStorage.getItem("authTOken");
    console.log(`Token ${token}`);
    const makeRequest = async () => {
      try {
        const promotedResponse = await fetch(
          `http://127.0.0.1:8000/poll/promoted/`,
          {
            method: "GET",
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Token ${token}`,
            },
          }
        );

        const response = await fetch(`http://127.0.0.1:8000/poll/polls/`, {
          method: "GET",
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Token ${token}`,
          },
        });

        if (!response.ok) {
          console.log("Response not ok");
        }

        const responseBody = await response.json();
        console.log(responseBody);
        setResponseData(responseBody);

        const promotedResponseBody = await promotedResponse.json();
        setPromoted(promotedResponseBody);
        // Check if responseData is not null before mapping
      } catch (error) {
        console.log(error);
        // Handle errors as needed
      } finally {
        // setIsLoading(true); // Move this line if needed based on your requirement
        console.log("Finally block executed");
      }
    };

    makeRequest();
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="home-container" style={{ background: "whiteSmoke" }}>
      <MainLayout>
        <div className="main-containe bus-box-con">
          <div className="left-side-container buss-all-container">
            <h2 className="head-line bus-dir">Voting</h2>
            <PollsSearch />
            <img src="images/jumia.png" alt="" className="ads-img" />

            <div className="pollsBox">
              <h2 className="head-line bus-dir">Suggested polls</h2>
              <div className="grid">
                <CantVote />
                <CantVote />
              </div>
            </div>

            <div className="pollsBox">
              <h2 className="head-line bus-dir">Promoted polls</h2>
              <div className="grid">
                {promoted &&
                  promoted.length > 1 &&
                  promoted.map((item, index) => (
                    <CanVote
                      key={index}
                      voteOptions={item.options_list ? item.options_list : []}
                      creator={item.user ? item.user : "unknown user"}
                      question={item.question ? item.question : ""}
                      duration={item.duration ? item.duration : ""}
                    />
                  ))}
              </div>
            </div>

            <div className="tabs">
              <div className="oval purple">All</div>
              <div className="oval">Public</div>
              <div className="oval">Private</div>
            </div>

            <div className="col">
              {responseData &&
                responseData.length > 1 &&
                responseData.map((item, index) => (
                  <CanVote
                    key={index}
                    voteOptions={item.options_list ? item.options_list : []}
                    creator={item.user ? item.user : "unknown user"}
                    question={item.question ? item.question : ""}
                    duration={item.duration ? item.duration : ""}
                  />
                ))}

              {/* <img src="images/jumia.png" alt="" className="ads-img" />
              <CanVote />
              <CanVote onClick={openModal} />
              <CanVote /> */}
            </div>
          </div>

          <div
            className="left-side-container"
            style={{
              maxWidth: "525px",
              padding: "20px",
              background: "#fff",
            }}
          >
            <SearchBox />
            <Notify />
          </div>

          <Modal
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            contentLabel="Connect Modal"
          >
            <CanVote />
            <button onClick={closeModal}>Close Modal</button>
          </Modal>
        </div>
      </MainLayout>
    </div>
  );
};

const Votingg = () => {
  const [responseData, setResponseData] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const token = localStorage.getItem("authTOken");
    console.log(`Token ${token}`);
    const makeRequest = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/poll/polls/`, {
          method: "GET",
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Token ${token}`,
          },
        });

        if (!response.ok) {
          console.log("Response not ok");
        }

        const responseBody = await response.json();
        console.log(responseBody);
        setResponseData(responseBody);

        // Check if responseData is not null before mapping
      } catch (error) {
        console.log(error);
        // Handle errors as needed
      } finally {
        // setIsLoading(true); // Move this line if needed based on your requirement
        console.log("Finally block executed");
      }
    };

    makeRequest();
  }, []);

  return (
    <>
      {responseData &&
        responseData.length > 1 &&
        responseData.map((item, index) => <p>Voting</p>)}
    </>
  );
};

export default Voting;
