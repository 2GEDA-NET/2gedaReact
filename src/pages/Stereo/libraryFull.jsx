import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { BiSearch } from "react-icons/bi";
import { AiOutlineArrowLeft } from "react-icons/ai";
import TopStero from "../../components/StereoComp/TopStero";
import Artisist from "../../components/StereoComp/Artisist";

const LibraryFull = ({ handleLibraryClose }) => {
  const [activeListTab, setActiveListTab] = useState("All");

  const handleListTabClick = (text) => {
    setActiveListTab(text);
  };
  const DataPlay = [
    {
      text: "All",
    },
    {
      text: "Playlists",
    },
    {
      text: "Albums",
    },
    {
      text: "Artists",
    },
    {
      text: "Downloaded",
    },
  ];
  return (
    <div className="library-full-container">
      <div className="view-all-tic-bx">
        <div className="back-title flex">
          <AiOutlineArrowLeft className="ti-bc" onClick={handleLibraryClose} />
          <div className="head-line">Your library</div>
        </div>
        <div className="product-ind">
          <FaPlus />
        </div>
      </div>
      <div className="select-what-display w-dis">
        <div className="ma-ma-wd flex">
          {DataPlay.map((item, index) => (
            <div
              key={index}
              className={`tab-item ${
                item.text === activeListTab
                  ? "sel-act inc-wid"
                  : "anot-wid add-bor  inc-wid"
              }`}
              onClick={() => handleListTabClick(item.text)}
            >
              <div className="dis-sel-name conn-t-txt">{item.text}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="search-container-right flex">
        <BiSearch className="search-icon-right" />
        <input
          type="text"
          className="right-inp-sear"
          placeholder="Search here"
        />
      </div>
      {activeListTab === "All" ? (
        <div className="top-row-container flex">
          <TopStero />
          <TopStero />
          <TopStero />
        </div>
      ) : null}
      {activeListTab === "Playlists" ? (
        <div className="top-row-container flex">
          <TopStero />
          <TopStero />
          <TopStero />
        </div>
      ) : null}
      {activeListTab === "Albums" ? (
        <div className="top-row-container flex">
          <TopStero />
          <TopStero />
          <TopStero />
        </div>
      ) : null}
      {activeListTab === "Artists" ? (
        <div className="top-row-container flex">
          <Artisist />
          <Artisist />
          <Artisist />
          <Artisist />
          <Artisist />
          <Artisist />
        </div>
      ) : null}
      {activeListTab === "Downloaded" ? (
        <div className="top-row-container flex">
          <TopStero />
          <TopStero />
          <TopStero />
        </div>
      ) : null}
    </div>
  );
};

export default LibraryFull;
