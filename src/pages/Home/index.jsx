import MainLayout from "../../Layout/MainLayout";
import DashMessage from "../../components/Dashboard/DasMess";
import FirstSide from "../../components/Dashboard/FirstSide";
import Follower from "../../components/Dashboard/Follower";
import PostComp from "../../components/Dashboard/PostComp";
import SelectCategory from "../../components/Dashboard/SelectCategory";
import "./style.css";
import MusicDash from "../../components/Dashboard/MusicDas";
import SmallTicketCard from "../../components/Dashboard/smallTicket";
import ProductDash from "../../components/Dashboard/ProductDAs";
import MovieDashCard from "../../components/Dashboard/MovieDas";
import Stick from "../../components/Dashboard/Stick";
import MovieSlider from "../../components/Dashboard/Slider";
import Data from "../../utils/datahome.json";
import StatusContainer from "../../components/Dashboard/StatusContainer";
import FeedDetail from "./FeedDetail";
import { useContext, useState } from "react";
import { useEffect } from "react";
import SharedPostComp from "../../components/Dashboard/SharedPostComp";
import ProfileStick from "../../components/Commons/ProfileStick";
import ChatHeader from "../../components/ChatComp/ChatHeader";
import MainChat from "../../components/ChatComp/MainChat";
import { AuthCtx } from "../../Context/AuthContext";

const Home = () => {
  const [isFeedOpen, setIsFeedOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("All Posts");
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [showMainChatMess, setShowMainChatMess] = useState(false);
  const { userAuth } = useContext(AuthCtx);
  console.log(userAuth);

  const handleGotoMessagBox = () => {
    setShowMainChatMess(true);
  };
  const handleCloseMessagBox = () => {
    setShowMainChatMess(false);
  };

  const handleProfileClose = () => {
    setIsProfileOpen(false);
  };

  const handleProfileClick = () => {
    setIsProfileOpen(true);
  };

  const handleFeedOpen = () => {
    setIsFeedOpen(true);
  };
  const handleFeedClose = () => {
    setIsFeedOpen(false);
  };
  const handleTabClick = (text) => {
    setActiveTab(text);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="home-container">
      <MainLayout>
        <div className="main-containe">
          {isFeedOpen && (
            <div className="left-side-container feed-box">
              <FeedDetail handleFeedClose={handleFeedClose} />
            </div>
          )}
          {isProfileOpen && (
            <div className="left-side-container">
              <ProfileStick handleProfileClose={handleProfileClose} />
            </div>
          )}
          {showMainChatMess && (
            <div className="left-side-container">
              <div className="main-chat-mess">
                <ChatHeader handleCloseMessagBox={handleCloseMessagBox} />
                <MainChat />
              </div>
            </div>
          )}
          {!isFeedOpen && !isProfileOpen && !showMainChatMess && (
            <div className="left-side-container">
              <FirstSide />
              <img src="/images/jumia.png" alt="" className="ads-img nw-dn" />
              <div className="status-row">
                <StatusContainer />
              </div>
              <div className="select-what-display">
                {Data.map((item, index) => (
                  <div
                    key={index}
                    className={`tab-item ${
                      item.text === activeTab ? "sel-act" : "anot-wid"
                    }`}
                    onClick={() => handleTabClick(item.text)}
                  >
                    <div className="dis-sel-name">{item.text}</div>
                  </div>
                ))}
              </div>
              {activeTab === "All Posts" ? (
                <>
                  <PostComp handleFeedOpen={handleFeedOpen} />
                  <SharedPostComp />

                  <div className="music-das-row">
                    <MusicDash />
                    <MusicDash />
                    <MusicDash />
                    <MusicDash />
                    <MusicDash />
                  </div>
                  <PostComp />
                  <div className="ticket-das-row">
                    <SmallTicketCard />
                    <SmallTicketCard />
                    <SmallTicketCard />
                    <SmallTicketCard />
                    <SmallTicketCard />
                    <SmallTicketCard />
                    <SmallTicketCard />
                  </div>
                  <PostComp />
                  <div className="ticket-das-row">
                    <ProductDash />
                    <ProductDash />
                    <ProductDash />
                    <ProductDash />
                    <ProductDash />
                  </div>
                  <PostComp />
                  <div className="movie-slid-box">
                    <div className="post-ead">Trending movies</div>
                    <MovieSlider />
                  </div>
                  <div className="mov-bxx">
                    <div className="post-ead">Trending movies</div>
                    <div className="movie-das-row">
                      <MovieDashCard />
                      <MovieDashCard />
                      <MovieDashCard />
                      <MovieDashCard />
                      <MovieDashCard />
                    </div>
                  </div>
                  <img src="/images/jumia.png" alt="" className="ads-img" />

                  <div className="you-may-know">
                    <div className="post-ead">People you may know</div>
                    <div className="may-know-box stic-ind">
                      <Stick />
                      <Stick />
                      <Stick />
                      <Stick />
                    </div>
                  </div>
                </>
              ) : null}
              {activeTab === "Images" ? (
                <PostComp handleFeedOpen={handleFeedOpen} />
              ) : null}
              {activeTab === "Products" ? (
                <div className="ticket-das-row">
                  <ProductDash />
                  <ProductDash />
                  <ProductDash />
                  <ProductDash />
                  <ProductDash />
                </div>
              ) : null}
            </div>
          )}
          <div className="middle-side-container">
            <img src="/images/ads1.png" alt="" />
            <img src="/images/ads2.png" alt="" />
            <img src="/images/ads3.png" alt="" />
          </div>
          <div className="right-side-container">
            <SelectCategory />
            <Follower handleProfileClick={handleProfileClick} />
            <div className="mess-bxx-conn">
              <DashMessage handleGotoMessagBox={handleGotoMessagBox} />
            </div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
};

export default Home;
