import {
  BiSolidLike,
  BiLike,
  BiMessageAlt,
  BiDotsHorizontalRounded,
} from "react-icons/bi";
import { FiShare2 } from "react-icons/fi";
import Comment from "./Comment";
import PostMenu from "../Modals/PostMenu";
import { useState } from "react";
import "video.js/dist/video-js.css";
import "@videojs/themes/dist/fantasy/index.css";
import { useRef } from "react";
import { useEffect } from "react";

const PostComp = ({ disnone, redmar, handleFeedOpen }) => {
  const [isPoostMenuDone, setIsPoostMenuDone] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        // Create a variable to hold the current value of videoRef.current
        const currentVideoRef = videoRef.current;

        if (entry.isIntersecting) {
          // Video is in the viewport, play it
          if (currentVideoRef) {
            currentVideoRef.play();
          }
        } else {
          // Video is out of the viewport, pause it
          if (currentVideoRef) {
            currentVideoRef.pause();
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    // Observe the video element
    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    // Cleanup the observer when the component unmounts
    return () => {
      // Use the same variable to hold the current value of videoRef.current
      const currentVideoRef = videoRef.current;
      if (currentVideoRef) {
        observer.unobserve(currentVideoRef);
      }
    };
  }, []);

  const handlePostMenuClickDone = (e) => {
    setIsPoostMenuDone(!isPoostMenuDone);
  };
  return (
    <div className={`postcom ${redmar}`}>
      <div className="post-comp-container">
        <div className="profile-time">
          <div className="post-profile">
            <img
              src="https://image.cnbcfm.com/api/v1/image/107228941-1682027700192-_DSC5658.jpg?v=1682427601&w=1920&h=1080"
              alt=""
            />
            <div className="post-profile-details">
              <div className="post-profile-name">Dr. Salem Lawal</div>
              <div className="autor-ooby">Pharmacist</div>
              <div className="autor-location">Lagos, Nigeria</div>
            </div>
          </div>
          <div className="time-posted">1hr ago</div>
        </div>
        <hr className="feed-hr" />
        <div className="post-body-box" onClick={handleFeedOpen}>
          <div className="post-body-text">
            This is the Opportunity to Join the World Leading Tech Professionals
            in 2022. All you need do is to register with the link below <br />
            <br />
            <a href="www.ileifetech.com/freshmen">
              www.ileifetech.com/freshmen
            </a>
          </div>
        </div>
        <div className="dob-img flex" onClick={handleFeedOpen}>
          <div className="post-media">
            {/* vjs-theme-fantasy */}
            <video
              className="da-video video-js vjs-theme-fantasy "
              data-setup="{}"
              controls
              autoPlay={true}
              ref={videoRef}
              playsInline
              loop
              muted
            >
              <source src="video/vid.mp4" type="" />
            </video>
          </div>
          <div className="post-media">
            <video
              className="da-video video-js"
              data-setup="{}"
              controls
              autoPlay={true}
              loop
              playsInline
              muted
              ref={videoRef}
            >
              <source src="video/vid.mp4" type="" />
            </video>
          </div>

          {/* <div className="post-media lay-post">
            <img src="images/post1.png" alt="" />
            <div className="over-lay-post flex">
              <span>+2</span>
            </div>
          </div> */}
        </div>
        {/* <video className="da-video ">
              <source src="video/vid.mp4" type="" />
            </video> */}
        <div className="post-likes-co">
          <div className="likes-per-post">
            <div className="likes-bx">
              <BiSolidLike className="likes" />
            </div>
            <div className="smil">🥰</div>
            <div className="smil">&#x1F60A;</div>
          </div>
          <div className="liker-name-and-total">
            Ademola Kola and 3.2k others
          </div>
        </div>
        <div className="post-likes-box">
          <div className="posted-likes-cont">
            <div className="icon-text">
              <BiLike className="like" />
              <div className="con-test">23k</div>
            </div>
            <div className="icon-text">
              <BiMessageAlt className="mess" />
              <div className="con-test">115</div>
            </div>

            <div className="icon-text">
              <FiShare2 className="share" />
              <div className="con-test">1.3k</div>
            </div>
          </div>
          <div className="click-dot" onClick={handlePostMenuClickDone}>
            <BiDotsHorizontalRounded className="dot" />
          </div>

          {isPoostMenuDone && (
            <div className="post-menu-cont-bx">
              <PostMenu />
            </div>
          )}
        </div>
      </div>
      <Comment disnone={disnone} />
    </div>
  );
};

export default PostComp;
