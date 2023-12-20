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
import { url } from "../../utils";

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
  postID,
}) => {
  const [isPoostMenuDone, setIsPoostMenuDone] = useState(false);
  const [isLoading, setIsloading] = useState(false);
  const [responseData, setResponseData] = useState(null);
  const [commentText, setCommentText] = useState("");
  const handlePostMenuClickDone = (e) => {
    setIsPoostMenuDone(!isPoostMenuDone);
  };

  function handleLike() {
    const token = localStorage.getItem("authTOken");
    console.log(`Token ${token}`);
    const makeRequest = async () => {
      const formData = {
        post_id: parseInt(postID),
        reaction_type: "like",
      };

      try {
        const response = await fetch(`${url}/feed/react/post/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          const errorMessage = await response.text();
          console.error(`Error: ${errorMessage}`);
        }

        const responseBody = await response.json();
        setResponseData(responseBody);

        // Move setIsLoading inside the try block if you want it to be set only on success
        setIsloading(true);

        console.log(responseBody);
      } catch (error) {
        console.log(error);
        // Handle errors as needed
      } finally {
        // setIsLoading(true); // Move this line if needed based on your requirement
        console.log("Finally block executed");
      }
    };
    makeRequest();
  }

  return (
    <div className={`postcom ${redmar}`}>
      <div className="post-comp-container">
        <div className="profile-time">
          <div className="post-profile" style={{}}>
            {creator && creator.cover_image && (
              <img src={creator.cover_image.cover_image} alt="" />
            )}
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
            <img src="" alt="" />
          </div>
          <div className="post-media lay-post">
            {media && media[1] && <img src={media[1].media} alt="" />}
            <div className="over-lay-post flex">
              {media && media.length - 2 > 0 && media.length - 2}
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
          <div className="liker-name-and-total">
            Ademola Kola and 3.2k others
          </div>
        </div>
        <div className="post-likes-box">
          <div className="posted-likes-cont">
            <div className="icon-text">
              <BiLike onClick={() => handleLike()} className="like" />
              <div className="con-test">
                {post_reaction_count && post_reaction_count}
              </div>
            </div>
            <div className="icon-text">
              <BiMessageAlt className="mess" />
              <div className="con-test">
                {post_comment_count && post_comment_count}
              </div>
            </div>

            <div className="icon-text">
              <FiShare2 className="share" />
              <div className="con-test">
                {post_reaction_count && post_reaction_count}
              </div>
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
      <Comment disnone={disnone} postID={postID} />
    </div>
  );
};

export default PostComp;
