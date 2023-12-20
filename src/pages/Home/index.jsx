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
import { NavLink } from "react-router-dom";
import StatusContainer from "../../components/Dashboard/StatusContainer";
import FeedDetail from "./FeedDetail";
import { useState } from "react";
import { useEffect } from "react";
import { url } from "../../utils";

const Home = () => {
  const [isFeedOpen, setIsFeedOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("All Posts");

  const [responseData, setResponseData] = useState(null);
  const [isLoading, setIsloading] = useState(false);

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

    const token = localStorage.getItem("authTOken");
    console.log(`Token ${token}`);
    const makeRequest = async () => {
      try {
        const response = await fetch(`${url}/feed/create_post/`, {
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
        setResponseData(responseBody);

        // Move setIsLoading inside the try block if you want it to be set only on success
        setIsloading(true);

        // Check if responseData is not null before mapping
        if (responseBody !== null) {
          responseBody.map((item, index) => console.log(item.user.username));
        }
      } catch (error) {
        console.log(error);
        // Handle errors as needed
      } finally {
        // setIsLoading(true); // Move this line if needed based on your requirement
        console.log("Finally block executed");
      }
    };

    // Call the async function
    makeRequest();
  }, []);
  return (
    <div className="home-container">
      <MainLayout>
        <div className="main-containe">
          <div className="left-side-container feed-box">
            {isFeedOpen && <FeedDetail handleFeedClose={handleFeedClose} />}
          </div>
          {!isFeedOpen && (
            <div className="left-side-container">
              <FirstSide />
              <img src="images/jumia.png" alt="" className="ads-img" />
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
                  {responseData !== null && responseData.length > 0 ? (
                    responseData.map((item, index) => (
                      <PostComp
                        handleFeedOpen={handleFeedOpen}
                        key={index}
                        postID = {item.id}
                         creator={item.user}
                        comment={item.comment_text}
                        media={item.each_media}
                        hashtag={item.hashtags}
                        content={item.content}
                        reaction={item.Reaction}
                        post_reaction_count={item.post_reaction_count}
                        post_comment_count={item.post_comment_count}
                        time_since={item.time_since}
                      />
                    ))
                  ) : (
                    <></>
                  )}

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
                  <div className="you-may-know">
                    <div className="post-ead">People you may know</div>
                    <div className="may-know-box">
                      <Stick />
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
            <img src="images/ads1.png" alt="" />
            <img src="images/ads2.png" alt="" />
            <img src="images/ads3.png" alt="" />
          </div>
          <div className="right-side-container">
            <SelectCategory />
            <Follower />
            <div className="mess-bxx-conn">
              <DashMessage />
            </div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
};

export default Home;
