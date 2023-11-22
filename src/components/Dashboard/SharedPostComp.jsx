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

const SharedPostComp = ({ disnone, redmar, handleFeedOpen }) => {
  const [isPoostMenuDone, setIsPoostMenuDone] = useState(false);

  const handlePostMenuClickDone = (e) => {
    setIsPoostMenuDone(!isPoostMenuDone);
  };
  return (
    <div className={`postcom ${redmar}`}>
      <div className="post-comp-container">
        <div className="profile-time">
          <div className="post-profile">
            <img
              src="https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
            />
            <div className="post-profile-details">
              <div className="post-profile-name">
                Smith Lord <span>shared</span>
              </div>
              <div className="autor-ooby">Developer</div>
              <div className="autor-location">Ibadan, Nigeria</div>
            </div>
          </div>
          <div className="time-posted">2m ago</div>
        </div>
        <div className=" shared-container">
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
              This is the Opportunity to Join the World Leading Tech
              Professionals in 2022. <br />
              <br />
              <a href="www.ileifetech.com/freshmen">
                www.ileifetech.com/freshmen
              </a>
            </div>
          </div>
          <div className="dob-img flex" onClick={handleFeedOpen}>
            <div className="post-media">
              <img src="images/pic3.png" alt="" />
            </div>
            <div className="post-media lay-post">
              <img src="images/post1.png" alt="" />
              <div className="over-lay-post flex">
                <span>+2</span>
              </div>
            </div>
          </div>
        </div>
        <div className="post-likes-co">
          <div className="likes-per-post">
            <div className="likes-bx">
              <BiSolidLike className="likes" />
            </div>
            <div className="smil">🥰</div>
            <div className="smil">&#x1F60A;</div>
          </div>
          <div className="liker-name-and-total">Silentcoder and 2k others</div>
        </div>
        <div className="post-likes-box">
          <div className="posted-likes-cont">
            <div className="icon-text">
              <BiLike className="like" />
              <div className="con-test">105</div>
            </div>
            <div className="icon-text">
              <BiMessageAlt className="mess" />
              <div className="con-test">5</div>
            </div>

            <div className="icon-text">
              <FiShare2 className="share" />
              <div className="con-test">1k</div>
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

export default SharedPostComp;
