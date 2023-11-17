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
import AudioPlayer from "./audioPlayer";
import {
  BsFillFileEarmarkPdfFill,
  BsAndroid2,
  BsFiletypeExe,
} from "react-icons/bs";
import { SiMicrosoftword, SiMicrosoftexcel } from "react-icons/si";
import { PiMicrosoftPowerpointLogo } from "react-icons/pi";
import { AllPost } from "../../services/GetApis";

const PostComp = ({ disnone, redmar, handleFeedOpen }) => {
  const [isPoostMenuDone, setIsPoostMenuDone] = useState(false);
  const videoRef = useRef(null);
  const audioSource = "music/zino.mp3";
  const postData = AllPost();

  console.log("all:", postData);

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

  const formatRelativeTime = (timestamp) => {
    const postTime = new Date(`2023-01-01T${timestamp}`); // Assuming a specific date, adjust as needed
    const currentTime = new Date();

    const timeDifference = Math.abs(currentTime - postTime);
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(weeks / 4);
    const years = Math.floor(months / 12);

    if (years > 0) {
      return `${years} year${years > 1 ? "s" : ""} ago`;
    } else if (months > 0) {
      return `${months} month${months > 1 ? "s" : ""} ago`;
    } else if (weeks > 0) {
      return `${weeks} week${weeks > 1 ? "s" : ""} ago`;
    } else if (days > 0) {
      return `${days} day${days > 1 ? "s" : ""} ago`;
    } else if (hours > 0) {
      return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    } else if (minutes > 0) {
      return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
    } else {
      return "Just now";
    }
  };
  return (
    <>
      {" "}
      {postData.map((post) => (
        <div className={`postcom ${redmar}`} key={post.id}>
          <div className="post-comp-container">
            <div className="profile-time">
              <div className="post-profile">
                <img
                  src="https://image.cnbcfm.com/api/v1/image/107228941-1682027700192-_DSC5658.jpg?v=1682427601&w=1920&h=1080"
                  alt=""
                />
                <div className="post-profile-details">
                  <div className="post-profile-name">
                    {post.post__user__username}
                  </div>
                  <div className="autor-ooby">Pharmacist</div>
                  <div className="autor-location">Lagos, Nigeria</div>
                </div>
              </div>
              <div className="time-posted">
                {formatRelativeTime(post.post__timestamp)}
              </div>
            </div>
            <hr className="feed-hr" />
            <div className="post-body-box" onClick={handleFeedOpen}>
              <div className="post-body-text">
                {post.post__content}
                <br />
                <br />
                <a href="www.ileifetech.com/freshmen">
                  www.ileifetech.com/freshmen
                </a>
              </div>
            </div>
            <div className="dob-img flex" onClick={handleFeedOpen}>
              <div className="post-media ">
                <img src={post.media} alt="" />
              </div>
              <div className="post-media">
                {/* vjs-theme-fantasy */}

                <video
                  className="da-video video-js vjs-theme-fantas "
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
              {/* <div className="post-media lay-post">
            <img src="images/post1.png" alt="" />
            <div className="over-lay-post flex">
              <span>+2</span>
            </div>
          </div> */}
              {/* <div className="post-media lay-post">
            <img src="images/post1.png" alt="" />
            <div className="over-lay-post flex">
              <span>+2</span>
            </div>
          </div> */}
            </div>
            <div className="audi-post-box">
              <AudioPlayer
                audioSrc={audioSource}
                volume={0.7}
                startTime={0}
                duration={34}
              />
            </div>
            <div className="dra-im">
              <BsFillFileEarmarkPdfFill className="icon-dw pdf" />
              <div className="or-dr">pdfFile.name</div>
            </div>
            <div className="dra-im">
              <SiMicrosoftword className="icon-dw word" />
              <div className="or-dr">{"wordFile.name"}</div>
            </div>
            <div className="dra-im">
              <PiMicrosoftPowerpointLogo className="icon-dw prese" />
              <div className="or-dr">{"powerpointFile.name"}</div>
            </div>
            <div className="dra-im">
              <SiMicrosoftexcel className="icon-dw excel" />
              <div className="or-dr">{"excelFile.name"}</div>
            </div>
            <div className="dra-im">
              <BsAndroid2 className="icon-dw apk" />
              <div className="or-dr">{"apkFile.name"}</div>
            </div>
            <div className="dra-im">
              <BsFiletypeExe className="icon-dw exe" />
              <div className="or-dr">{post.media}</div>
            </div>
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
      ))}
    </>
  );
};

export default PostComp;
