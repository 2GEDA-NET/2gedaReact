import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { MdEdit } from "react-icons/md";
import {
  BsPersonFill,
  BsShieldFillCheck,
  BsFillCheckCircleFill,
} from "react-icons/bs";
import { useState, useEffect } from "react";
import ActionButton from "../../components/Commons/Button";
import { url } from "../../utils";

const AddProfile = ({ onClose, onSave, userData }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedMainFile, setSelectedMainFile] = useState(null);
  const [activeButton, setActiveButton] = useState(null);
  const [customGender, setCustomGender] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [religion, setReligion] = useState("");
  const [occupation, setOccupation] = useState("");
  const [currentCity, setCurrentCity] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [bio, setBio] = useState("");

  useEffect(() => {
    setFirstName(userData.username);
  }, [userData]);

  const handleFirstNameChange = (event) => setFirstName(event.target.value);
  const handleLastNameChange = (event) => setLastName(event.target.value);
  const handleOccupationChange = (event) => setOccupation(event.target.value);
  const handleReligionChange = (event) => setReligion(event.target.value);
  const handleCurrentCityChange = (event) => setCurrentCity(event.target.value);
  const handleDateOfBirthChange = (event) => setDateOfBirth(event.target.value);
  const handleBioChange = (event) => setBio(event.target.value);

  const handleImageChange = (event) => setSelectedFile(event.target.files[0]);
  const handleMainImageChange = (event) =>
    setSelectedMainFile(event.target.files[0]);

  const handleButtonClick = (buttonName) => setActiveButton(buttonName);

  const handleCustomGenderChange = (event) =>
    setCustomGender(event.target.value);

  const authToken = localStorage.getItem("authToken");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("work", occupation);
    formData.append("date_of_birth", dateOfBirth);
    formData.append("gender", activeButton);
    formData.append("custom_gender", customGender);
    formData.append("religion", religion);
    formData.append("first_name", firstName);
    formData.append("last_name", lastName);
    formData.append("cover_image", selectedFile);
    formData.append("profile_image", selectedMainFile);

    try {
      const authToken = localStorage.getItem("authToken");
      const response = await fetch(`${url}/user-profile/update/`, {
        method: "PUT",
        headers: {
          Authorization: `Token ${authToken}`,
        },
        body: formData,
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      onSave(data);
      onClose(); 
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="add-profil-container">
      <div className="postFormModal-container status-modal-container">
        <div className="over-scr">
          <div className="busi-mod-header">
            <div className="busi-bxs">
              <AiOutlineArrowLeft />
              <div className="fels">
                <div className="claim"></div>
              </div>
              <img src="images/lo2.png" alt="" />
            </div>
          </div>
          <form action="" onSubmit={handleSubmit}>
            <div className="edit-pro-container">
              <div className="profile-all-image-box">
                <div className="post-img-cont-bo">
                  {selectedFile ? (
                    <div className="cover-profile-image">
                      <img src={URL.createObjectURL(selectedFile)} alt="" />
                    </div>
                  ) : (
                    <>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        style={{ display: "none" }}
                        id="image-input"
                      />
                      <label htmlFor="image-input" className="dra-im domm">
                        <MdOutlineAddPhotoAlternate className="ddd" />
                        <div className="add-vid dad">Add Photos</div>
                        <div className="ed-img flex">
                          <MdEdit />
                        </div>
                      </label>
                    </>
                  )}
                </div>

                {selectedMainFile ? (
                  <div className="main-pro-image ">
                    <div className="main-img-bxb">
                      <img src={URL.createObjectURL(selectedMainFile)} alt="" />
                      <div className="ed-img flex">
                        <MdEdit />
                      </div>
                    </div>
                  </div>
                ) : (
                  <>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleMainImageChange}
                      style={{ display: "none" }}
                      id="image-main-input"
                    />
                    <div className="main-pro-image new-vb">
                      <div className="main-img-bxb">
                        <div className="pure-profile-con">
                          <div className="main-edit-bx">
                            <BsPersonFill />
                          </div>
                        </div>
                        <label htmlFor="image-main-input">
                          <div className="ed-img flex">
                            <MdEdit />
                          </div>
                        </label>
                      </div>
                    </div>
                  </>
                )}
              </div>
              <div className="deatil-profile">
                <div className="prof-user-txt cennc">
                  Add profile picture (you can select up to 5)
                </div>
              </div>

              <div className="input-containe-claim">
                <div className="double-input">
                  <div className="inp-label-box">
                    <input
                      type="text"
                      className="claim-inp"
                      placeholder="First name"
                      value={firstName}
                      onChange={handleFirstNameChange}
                    />
                  </div>
                  <div className="inp-label-box">
                    <input
                      type="text"
                      className="claim-inp"
                      placeholder="Last name"
                      value={lastName}
                      onChange={handleLastNameChange}
                    />
                  </div>
                </div>
                <div className="double-input">
                  <div className="inp-label-box">
                    <input
                      type="text"
                      className="claim-inp"
                      placeholder="Occupation"
                      value={occupation}
                      onChange={handleOccupationChange}
                    />
                  </div>
                  <div className="inp-label-box">
                    <input
                      type="text"
                      className="claim-inp"
                      placeholder="Current city"
                      value={currentCity}
                      onChange={handleCurrentCityChange}
                    />
                  </div>
                </div>
                <div className="double-input">
                  <div className="inp-label-box">
                    <label htmlFor="">Date of Birth</label>
                    <input
                      type="date"
                      className="claim-inp"
                      placeholder="Occupation"
                      value={dateOfBirth}
                      onChange={handleDateOfBirthChange}
                    />
                  </div>
                  <div className="inp-label-box">
                    <label htmlFor="">Religion</label>
                    <select
                      name=""
                      id=""
                      className="claim-inp"
                      value={religion}
                      onChange={handleReligionChange}
                    >
                      <option value="" disabled>
                        Select a religion
                      </option>
                      <option value="Muslim">Muslim</option>
                      <option value="Christian">Christian</option>
                      <option value="Tra">Tra</option>
                    </select>
                  </div>
                </div>
                <div className="inp-label-box ">
                  <label htmlFor="">I identify as</label>
                  <div className="select-gender-container flex">
                    <div className="but-bx flex">
                      <button
                        className={`gen-sel-btn ${
                          activeButton === "Male" ? "acttvv" : ""
                        }`}
                        type="button"
                        onClick={() => handleButtonClick("Male")}
                      >
                        <div className="gender-selc">Male</div>
                        {activeButton === "Male" && <BsFillCheckCircleFill />}
                      </button>
                      <button
                        className={`gen-sel-btn ${
                          activeButton === "Female" ? "acttvv" : ""
                        }`}
                        type="button"
                        onClick={() => handleButtonClick("Female")}
                      >
                        <div className="gender-selc">Female</div>
                        {activeButton === "Female" && <BsFillCheckCircleFill />}
                      </button>
                      <button
                        className={`gen-sel-btn ad-wd ${
                          activeButton === "Rather not say" ? "acttvv" : ""
                        }`}
                        type="button"
                        onClick={() => handleButtonClick("Rather not say")}
                      >
                        <div className="gender-selc">Rather not say</div>
                        {activeButton === "Rather not say" && (
                          <BsFillCheckCircleFill />
                        )}
                      </button>
                    </div>

                    <div className="inp-label-box">
                      <label htmlFor="">Custom gender? please specify</label>

                      <input
                        type="text"
                        className="claim-inp"
                        placeholder="Type something here"
                        value={customGender}
                        onChange={handleCustomGenderChange}
                      />
                    </div>
                  </div>
                </div>
                <div>{activeButton}</div>
                <div className="double-input">
                  <div className="inp-label-box txt-nnx">
                    <textarea
                      type="text"
                      className="txt-rea"
                      placeholder="Bio"
                      value={bio}
                      onChange={handleBioChange}
                    />
                    <div className="maxxi">Max 50 words</div>
                  </div>
                </div>
                <div className="auth-act flex">
                  <BsShieldFillCheck />
                  <div className="au-act-txt">
                    Your data is protected under the Standard International User
                    Act
                  </div>
                </div>
              </div>

              <div className="act-bttn-cl">
                <ActionButton label={"Save"} type={"submit"} />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProfile;
