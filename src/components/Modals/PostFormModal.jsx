import {
  BsCardImage,
  BsMic,
  BsFillFileEarmarkPdfFill,
  BsAndroid2,
  BsFiletypeExe,
} from "react-icons/bs";
import { FaMusic, FaFileAlt } from "react-icons/fa";
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
  const [textareaValue, setTextareaValue] = useState("");
  const [audioBlob, setAudioBlob] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [wordFile, setWordFile] = useState(null);
  const [excelFile, setExcelFile] = useState(null);
  const [powerpointFile, setPowerpointFile] = useState(null);
  const [pdfFile, setPdfFile] = useState(null);
  const [apkFile, setApkFile] = useState(null);
  const [exeFile, setExeFile] = useState(null);

  console.log(exeFile);
  // console.log(powerpointFile);
  // console.log(excelFile);
  // console.log(wordFile);
  // console.log(audioBlob);
  // console.log(textareaValue);
  // console.log(audioFile);
  // console.log(images);
  // console.log(addedTags);
  // console.log(checkedFriends);
  // console.log(selectedFile);

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
      <div className="postFormModal-container ">
        <div className="over-scr">
          <div className="post-clos-box">
            <div className="post-ead">Post on feed</div>
            <AiOutlineClose
              className="cls-post"
              onClick={handleCloseMainContainerClick}
            />
          </div>
          <textarea
            name="post-text"
            id="post-text-id"
            placeholder="Write up to 1,000 words"
            className="text-area"
            value={textareaValue}
            onChange={(event) => setTextareaValue(event.target.value)}
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
            {selectedIcon === "rec" && (
              <PostFormRecModal
                audioBlob={audioBlob}
                setAudioBlob={setAudioBlob}
              />
            )}
            {selectedIcon === "word" && (
              <PostFormWordModal
                wordFile={wordFile}
                setWordFile={setWordFile}
              />
            )}
            {selectedIcon === "excel" && (
              <PostFormExcelModal
                excelFile={excelFile}
                setExcelFile={setExcelFile}
              />
            )}
            {selectedIcon === "power" && (
              <PostFormPowerModal
                powerpointFile={powerpointFile}
                setPowerpointFile={setPowerpointFile}
              />
            )}
            {selectedIcon === "pdf" && (
              <PostFormPdfModal pdfFile={pdfFile} setPdfFile={setPdfFile} />
            )}
            {selectedIcon === "apk" && (
              <PostFormApkModal apkFile={apkFile} setApkFile={setApkFile} />
            )}
            {selectedIcon === "exe" && (
              <PostFormExeModal exeFile={exeFile} setExeFile={setExeFile} />
            )}
            {selectedIcon === "location" && <PostFormLocationModal />}
            {selectedIcon === "allfiles" && (
              <PostFormFilesModal
                selectedFile={selectedFile}
                setSelectedFile={setSelectedFile}
              />
            )}
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
          <div className="down-post-feed post-form-bx">
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
      </div>
    </>
  );
};

export default PostFormModal;
