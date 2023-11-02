import {
  BsCardImage,
  BsMic,
  BsFillFileEarmarkPdfFill,
  BsAndroid2,
  BsFiletypeExe,
} from "react-icons/bs";
import { FaVideo, FaMusic, FaFileAlt } from "react-icons/fa";
import { PiMicrosoftPowerpointLogo } from "react-icons/pi";
import { SiMicrosoftword, SiMicrosoftexcel } from "react-icons/si";
import { IoLocation, IoCloseSharp } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import "./style.css";
import PostFormPhotoModal from "./PostFormPhotoModal";
import PostFormMusicModal from "./PostFormMusicModal";
import PostFormRecModal from "./PostFormRecModal";
import PostFormWordModal from "./PostFormWordModal";
import PostFormExcelModal from "./PostFormExcelModal";
import PostFormPowerModal from "./PostFormPowerModal";
import PostFormPdfModal from "./PostFormPdfModal";
import PostFormApkModal from "./PostFormApkModal";
import PostFormExeModal from "./PostFormExeModal";
import PostFormLocationModal from "./PostFormLocModal";
import PostFormFilesModal from "./PostFormFilesModal";
import { useState } from "react";
import HashtagModal from "./HashTagModal";
import TagFriends from "./TagFriends";
import data from "../../utils/tag.json";

const PostFormModal = ({
  handleCloseMainContainerClick,
  selectedIcon,
  handleIconClick,
}) => {
  const [userInput, setUserInput] = useState("");
  const [suggestedHashtags, setSuggestedHashtags] = useState([]);
  const [addedTags, setAddedTags] = useState([]);
  const [isTagsFrd, setIsTagsFrd] = useState(false);
  const [selectedSuggestion, setSelectedSuggestion] = useState("");
  const hashtags = ["#programming", "#technology", "#art", "#travel"];
  const [checkedFriends, setCheckedFriends] = useState([]);
  const [images, setImages] = useState([]);
  const [audioFile, setAudioFile] = useState(null);

  console.log(audioFile);
  console.log(images);

  const handleFriendCheck = (img) => {
    if (checkedFriends.includes(img)) {
      setCheckedFriends(checkedFriends.filter((friend) => friend !== img));
    } else {
      setCheckedFriends([...checkedFriends, img]);
    }
  };
  const handleRemoveTagFrd = (index) => {
    const updatedFriends = [...checkedFriends];
    updatedFriends.splice(index, 1);
    setCheckedFriends(updatedFriends);
  };

  console.log(checkedFriends);

  const handleInputChange = (event) => {
    const inputText = event.target.value;
    setUserInput(inputText);

    const filteredHashtags = hashtags.filter((tag) =>
      tag.toLowerCase().includes(inputText.toLowerCase())
    );
    setSuggestedHashtags(filteredHashtags);
  };
  const handleEnterPress = (event) => {
    if (event.key === "Enter" && userInput.length > 0) {
      setAddedTags([...addedTags, userInput]);
      setUserInput("");
    }
  };
  // console.log(setSelectedSuggestion);
  const handleRemoveTag = (index) => {
    const updatedTags = [...addedTags];
    updatedTags.splice(index, 1);
    setAddedTags(updatedTags);
  };
  const handleSuggestionClick = (suggestion) => {
    setAddedTags([...addedTags, suggestion]);
  };
  const handleTagFrdClick = () => {
    setIsTagsFrd(true);
  };
  const handleCloseTagFrdClick = () => {
    setIsTagsFrd(false);
  };

  return (
    <>
      <div className="postFormModal-container">
        <div className="post-clos-box">
          <div className="post-ead">Post on feed</div>
          <AiOutlineClose
            className="cls-post"
            onClick={handleCloseMainContainerClick}
          />
        </div>
        <textarea
          name=""
          id=""
          placeholder="Write up to 1,000 words"
          className="text-area"
        ></textarea>

        <div className="viwdt">
          {selectedIcon === "photo" && (
            <PostFormPhotoModal images={images} setImages={setImages} />
          )}
          {selectedIcon === "music" && (
            <PostFormMusicModal
              audioFile={audioFile}
              setAudioFile={setAudioFile}
            />
          )}
          {selectedIcon === "rec" && <PostFormRecModal />}
          {selectedIcon === "word" && <PostFormWordModal />}
          {selectedIcon === "excel" && <PostFormExcelModal />}
          {selectedIcon === "power" && <PostFormPowerModal />}
          {selectedIcon === "pdf" && <PostFormPdfModal />}
          {selectedIcon === "apk" && <PostFormApkModal />}
          {selectedIcon === "exe" && <PostFormExeModal />}
          {selectedIcon === "location" && <PostFormLocationModal />}
          {selectedIcon === "allfiles" && <PostFormFilesModal />}
        </div>
        <div className="hashtags-container">
          <div className="add-tags-btn">Add hashtag</div>
          {addedTags.map((tag, index) => (
            <div className="add-tags-btn added-tag-cont" key={index}>
              <div className="added-tag-tst">{tag}</div>
              <AiOutlineClose
                className="cls-tag"
                onClick={() => handleRemoveTag(index)}
              />
            </div>
          ))}
          <div className="add-tags-btn added-tag-cont">
            <div className="added-tag-tst">
              <input
                type="text"
                className="let-inp"
                value={selectedSuggestion || userInput}
                onChange={handleInputChange}
                onKeyDown={handleEnterPress}
                placeholder="Type here"
              />
            </div>
            <AiOutlineClose className="cls-tag" />
            {userInput.length > 0 && (
              <HashtagModal
                hashtags={suggestedHashtags}
                onHashtagClick={handleSuggestionClick}
              />
            )}
          </div>
        </div>
        {isTagsFrd && (
          <div className="modal-full-container">
            <TagFriends
              handleCloseTagFrdClick={handleCloseTagFrdClick}
              data={data}
              onFriendCheck={handleFriendCheck}
            />
          </div>
        )}
        <div className="hashtags-container" onClick={handleTagFrdClick}>
          <div className="add-tags-frd">Tag Friends</div>
        </div>
        <div className="taged-frd-box">
          {checkedFriends.map((img, index) => (
            <div className="tag-frd-cont" key={index}>
              <img src={img} alt="" />
              <IoCloseSharp
                className="cls-tag-fr"
                onClick={() => handleRemoveTagFrd(index)}
              />
            </div>
          ))}
        </div>
        <div className="down-post-feed">
          <div className="icon-post-feed">
            <BsCardImage
              className="pic-vid"
              onClick={() => handleIconClick("photo")}
            />
            {/* <FaVideo
              className="pic-vid"
              onClick={() => handleIconClick("photo")}
            /> */}
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
          <button className="post-btn" type="submit">
            Post
          </button>
        </div>
      </div>
    </>
  );
};

export default PostFormModal;
