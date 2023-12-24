import React from "react";
import { useState } from "react";
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
                <CantVote onClick={openModal} />
                <CantVote />
              </div>
            </div>

            <div className="tabs">
              <div className="oval purple">All</div>
              <div className="oval">Public</div>
              <div className="oval">Private</div>
            </div>

            <div className="col">
              <CanVote />
              <CanVote />
              <Poll />
              <CanVote />
              <img src="images/jumia.png" alt="" className="ads-img" />
              <CanVote />
              <CanVote onClick={openModal} />
              <CanVote />
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

export default Voting;
