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

const PostComp = ({
  disnone,
  redmar,
  handleFeedOpen,
  creator,
  comment,
  media,
  hashtag,
  content,
  reaction,
  post_reaction_count,
  post_comment_count,
  time_since,
}) => {
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
              src="https://image.cnbcfm.com/api/v1/image/107228941-1682027700192-_DSC5658.jpg?v=1682427601&w=1920&h=1080"
              alt=""
            />
            <div className="post-profile-details">
              {creator && creator.username && (
                <div className="post-profile-name">{creator.username}</div>
              )}

              {creator && creator.username && (
                <div className="autor-ooby">Pharmacist</div>
              )}

              {creator && creator.address && (
                <div className="autor-location">
                  {creator.address.current_city},{creator.address.country}
                </div>
              )}
            </div>
          </div>
          {time_since && <div className="time-posted">{time_since}</div>}
        </div>
        <hr className="feed-hr" />
        <div className="post-body-box" onClick={handleFeedOpen}>
          {content && (
            <div className="post-body-text">
              {content}
              <br />
              <br />
              <a href="www.ileifetech.com/freshmen">
                www.ileifetech.com/freshmen
              </a>
            </div>
          )}
        </div>
        <div className="dob-img flex" onClick={handleFeedOpen}>
          <div className="post-media">
            <img src={} alt="" />
          </div>
          <div className="post-media lay-post">
            <img src="images/pic1.png" alt="" />
            <div className="over-lay-post flex">+2</div>
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
