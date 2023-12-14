import React, { useState, useRef } from "react";
import {
  BsCardImage,
  BsMic,
  BsFillFileEarmarkPdfFill,
  BsAndroid2,
  BsFiletypeExe,
} from "react-icons/bs";
import { FaVideo, FaMusic, FaFileAlt } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { PiMicrosoftPowerpointLogo } from "react-icons/pi";
import { SiMicrosoftword, SiMicrosoftexcel } from "react-icons/si";
import "./style.css";
import PostFeedFormCont from "../PostFeedForm";
import { url } from "../../utils";

const FirstSide = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState(null);
  const fileInput = useRef(null);

  const handleIconClick = (icon) => {
    setSelectedIcon(icon);
  };

  const handleMainContainerClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseMainContainerClick = () => {
    setIsModalOpen(false);
  };

  const handlePost = async () => {

    const myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Token 65b55bb46605a175c3d5f16be2bcb83e7015305c"
    );
    myHeaders.append(
      "Cookie",
      "csrftoken=0tQF8jDzX38l95IB6wx5xqAxebxqHdM2; sessionid=si1y25m97ctl3faemkc2aby35ejiti6x"
    );

    const formdata = new FormData();
    formdata.append("media", fileInput.current.files[0], "[PROXY]");
    formdata.append("content", "Hello world");
    formdata.append("url", "https://example.com");
    formdata.append("hashtags", "@Waw");
    formdata.append("is_business_post", "True");
    formdata.append("tagged_users", '["bigkid"]');
    formdata.append("media", fileInput.current.files[0], "[PROXY]");
    formdata.append("media", fileInput.current.files[0], "[PROXY]");
    formdata.append("hashtags", "@kayode");
    formdata.append("hashtags", "@Werey");

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    try {
      const response = await fetch(`${url}`, requestOptions);
      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <PostFeedFormCont
        hdClose={handleCloseMainContainerClick}
        isModalOpen={isModalOpen}
        selectedIcon={selectedIcon}
        handleIconClick={handleIconClick}
      />
      <div className="first-side-container" onClick={handleMainContainerClick}>
        <div className="post-feed-container">
          <div className="post-ead">Post on feed</div>
          <div className="down-post-feed">
            <div className="icon-post-feed">
              <BsCardImage
                className="pic-vid"
                onClick={() => handleIconClick("photo")}
              />
              <FaVideo
                className="pic-vid"
                onClick={() => handleIconClick("photo")}
              />
              <IoLocation
                className="loca"
                onClick={() => handleIconClick("location")}
              />
              <FaMusic
                className="music"
                onClick={() => handleIconClick("music")}
              />
              <BsMic className="mic" onClick={() => handleIconClick("rec")} />
              <FaFileAlt
                className="fil"
                onClick={() => handleIconClick("allfiles")}
              />
              <SiMicrosoftword
                className="word"
                onClick={() => handleIconClick("word")}
              />
              <SiMicrosoftexcel
                className="excel"
                onClick={() => handleIconClick("excel")}
              />
              <PiMicrosoftPowerpointLogo
                className="prese"
                onClick={() => handleIconClick("power")}
              />
              <BsFillFileEarmarkPdfFill
                className="pdf"
                onClick={() => handleIconClick("pdf")}
              />
              <BsAndroid2
                className="apk"
                onClick={() => handleIconClick("apk")}
              />
              <BsFiletypeExe
                className="apk"
                onClick={() => handleIconClick("exe")}
              />
            </div>
            <input type="file" ref={fileInput} style={{ display: "none" }} />
            <button className="post-btn" type="submit" onClick={handlePost}>
              Post
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstSide;
