import { useEffect, useState } from "react";
import MainLayout from "../../Layout/MainLayout";
import "./style.css";
import StereoSearchComp from "../../components/StereoComp/StereoSearchComp";
import QuickStereoCard from "../../components/StereoComp/QuickStereoCard";
import MusicStero from "../../components/StereoComp/MusicStero";
import { FaPlus } from "react-icons/fa6";
import TopStero from "../../components/StereoComp/TopStero";
import { BiSearch } from "react-icons/bi";
import Artisist from "../../components/StereoComp/Artisist";
import QuickPicks from "./QuickPicks";
import BigHit from "./bigHit";
import QuickPickCol from "../../components/StereoComp/QuickPickCol";

const Data = [
  {
    text: "Home",
  },
  {
    text: "Explore",
  },
  {
    text: "New",
  },
  {
    text: "Top tracks",
  },
  {
    text: "Charts",
  },
  {
    text: "Artists",
  },
];
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
const Stereo = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const [activeListTab, setActiveListTab] = useState("All");
  const [isBigOpen, setIsBigOpen] = useState(false);
  const [isHitOpen, setIsHitOpen] = useState(false);

  const handleHitOpen = () => {
    setIsHitOpen(true);
  };
  const handleHitClose = () => {
    setIsHitOpen(false);
  };

  const handleBigOpen = () => {
    setIsBigOpen(true);
  };
  const handleBigClose = () => {
    setIsBigOpen(false);
  };

  const handleListTabClick = (text) => {
    setActiveListTab(text);
  };

  const handleTabClick = (text) => {
    setActiveTab(text);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="home-container">
        <MainLayout>
          <div className="main-containe bus-box-con stereo-bxbxb">
            <div className="left-side-container buss-all-container ster-container-man">
              <>
                {isBigOpen && <QuickPicks handleBigClose={handleBigClose} />}
                {isHitOpen && <BigHit handleHitClose={handleHitClose} />}
                {!isBigOpen && !isHitOpen && (
                  <>
                    <div>
                      <StereoSearchComp label={"Stereo"} />
                    </div>
                    <div className="select-what-display w-dis">
                      {Data.map((item, index) => (
                        <div
                          key={index}
                          className={`tab-item ${
                            item.text === activeTab
                              ? "sel-act connect-tab incr-wd"
                              : "anot-wid add-bor  connect-tab incr-wd"
                          }`}
                          onClick={() => handleTabClick(item.text)}
                        >
                          <div className="dis-sel-name conn-t-txt inliss">
                            {item.text}
                          </div>
                        </div>
                      ))}
                    </div>
                    {activeTab === "Home" ? (
                      <div className="stereo-quick-container">
                        <div className="view-all-tic-bx">
                          <div className="product-ind">Trending Songs</div>
                          {/* <div className="view-ll pup">More</div> */}
                        </div>
                        <div className="music-das-row">
                          <div className="quik-row-bx">
                            <QuickStereoCard />
                            <QuickStereoCard />
                            <QuickStereoCard />
                            <QuickStereoCard />
                          </div>
                        </div>
                        <div className="im-stereo-ads">
                          <img src="images/ads8.png" alt="" />
                        </div>
                        <div className="take-easy">
                          <div className="view-all-tic-bx">
                            <div className="product-ind">Today’s big hits</div>
                            <div
                              className="view-ll pup"
                              onClick={handleBigOpen}
                            >
                              More
                            </div>
                          </div>
                          <div className="music-das-row">
                            <MusicStero />
                            <MusicStero />
                            <MusicStero />
                            <MusicStero />
                            <MusicStero />
                          </div>
                        </div>
                        <div className="take-easy">
                          <div className="view-all-tic-bx">
                            <div className="product-ind">Top albums</div>
                            <div
                              className="view-ll pup"
                              onClick={handleHitOpen}
                            >
                              More
                            </div>
                          </div>
                          <div className="music-das-row">
                            <MusicStero />
                            <MusicStero />
                            <MusicStero />
                            <MusicStero />
                            <MusicStero />
                          </div>
                        </div>
                        <div className="take-easy">
                          <div className="head-line">Special picks for you</div>
                          <div className="music-das-row">
                            <MusicStero rem={"rem"} />
                            <MusicStero rem={"rem"} />
                            <MusicStero rem={"rem"} />
                            <MusicStero rem={"rem"} />
                            <MusicStero rem={"rem"} />
                          </div>
                        </div>
                      </div>
                    ) : null}
                    {activeTab === "Explore" ? (
                      <>
                        <div className="take-easy">
                          <div className="head-line">African Vibe</div>
                          <div className="music-das-row">
                            <MusicStero rem={"rem"} />
                            <MusicStero rem={"rem"} />
                            <MusicStero rem={"rem"} />
                            <MusicStero rem={"rem"} />
                            <MusicStero rem={"rem"} />
                          </div>
                        </div>
                        <div className="take-easy">
                          <div className="head-line">Best of Afrobeats</div>
                          <div className="music-das-row">
                            <MusicStero rem={"rem"} />
                            <MusicStero rem={"rem"} />
                            <MusicStero rem={"rem"} />
                            <MusicStero rem={"rem"} />
                            <MusicStero rem={"rem"} />
                          </div>
                        </div>
                        <div className="take-easy">
                          <div className="head-line">Recommended</div>
                          <div className="music-das-row">
                            <MusicStero rem={"rem"} />
                            <MusicStero rem={"rem"} />
                            <MusicStero rem={"rem"} />
                            <MusicStero rem={"rem"} />
                            <MusicStero rem={"rem"} />
                          </div>
                        </div>
                        <div className="take-easy">
                          <div className="head-line">Pop for you</div>
                          <div className="music-das-row">
                            <MusicStero rem={"rem"} />
                            <MusicStero rem={"rem"} />
                            <MusicStero rem={"rem"} />
                            <MusicStero rem={"rem"} />
                            <MusicStero rem={"rem"} />
                          </div>
                        </div>
                      </>
                    ) : null}
                    {activeTab === "New" ? (
                      <>
                        <div className="take-easy">
                          <div className="head-line">New release</div>
                          <div className="music-das-row">
                            <MusicStero />
                            <MusicStero />
                            <MusicStero />
                            <MusicStero />
                            <MusicStero />
                          </div>
                        </div>
                        <div className="im-stereo-ads">
                          <img src="images/ads8.png" alt="" />
                        </div>
                        <div className="take-easy">
                          <div className="head-line">Albums</div>
                          <div className="music-das-row">
                            <MusicStero />
                            <MusicStero />
                            <MusicStero />
                            <MusicStero />
                            <MusicStero />
                          </div>
                        </div>
                      </>
                    ) : null}

                    {activeTab === "Top tracks" ? (
                      <>
                        <div className="picks-row-cont">
                          <QuickPickCol />
                          <QuickPickCol />
                          <QuickPickCol />
                          <QuickPickCol />

                          <div className="im-stereo-ads">
                            <img src="images/ads8.png" alt="" />
                          </div>
                          <QuickPickCol />
                          <QuickPickCol />
                        </div>
                      </>
                    ) : null}
                  </>
                )}
              </>
            </div>

            <div className="right-side-container right-stereo">
              <div className="view-all-tic-bx">
                <div className="product-ind">Your library</div>
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
                <input type="text" className="right-inp-sear" />
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
          </div>
        </MainLayout>
      </div>
    </>
  );
};

export default Stereo;
