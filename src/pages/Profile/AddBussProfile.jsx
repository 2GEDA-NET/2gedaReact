import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { AiOutlineArrowLeft, AiFillCloseCircle } from "react-icons/ai";
import { MdEdit } from "react-icons/md";
import {
  BsPersonFill,
  BsShieldFillCheck,
  BsFillCheckCircleFill,
  BsEyeFill,
  BsEyeSlashFill,
} from "react-icons/bs";

import { useState } from "react";
import ActionButton from "../../components/Commons/Button";
import Availability from "../../components/BusinessProfile/Availability";

const AddBussProfile = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedMainFile, setSelectedMainFile] = useState(null);
  const [BusinessName, setBusinessName] = useState("");
  const [founded, setFounded] = useState("");
  const [bio, setBio] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isAlwaysAvailable, setIsAlwaysAvailable] = useState(false);

  const handleAlwaysAvailableChange = () => {
    setIsAlwaysAvailable(!isAlwaysAvailable);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleBusinessNameChange = (event) => {
    setBusinessName(event.target.value);
  };

  const handleFoundedChange = (event) => {
    setFounded(event.target.value);
  };

  const handleBioChange = (event) => {
    setBio(event.target.value);
  };

  const handleImageChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleMainImageChange = (event) => {
    setSelectedMainFile(event.target.files[0]);
  };

  const authToken = localStorage.getItem("authToken");
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      user: {
        first_name: BusinessName,
      },
      selectedFile,
      selectedMainFile,
      date_of_birth: founded,
      bio,
    };
    console.log(formData);
    // Perform the update request to the backend here
    try {
      const response = await fetch(
        "https://shark-app-ia4iu.ondigitalocean.app/user-profile/update/",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${authToken}`,
          },
          body: JSON.stringify(formData),
        }
      );
      console.log("after", formData);

      const data = await response.json();
      console.log("Success:", data);
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
              <AiOutlineArrowLeft
                className="cls-post"
                //   onClick={handleEditProClose}
              />
              <div className="fels">
                <div className="claim">Edit Bussiness Profile</div>
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
                      placeholder="Business name"
                      value={BusinessName}
                      onChange={handleBusinessNameChange}
                    />
                  </div>
                  <div className="inp-label-box">
                    <select name="" id="" className="claim-inp">
                      <option value="" disabled>
                        Category
                      </option>
                      <option value="Muslim">Muslim</option>
                      <option value="Christian">Christian</option>
                      <option value="Tra">Tra</option>
                    </select>
                  </div>
                </div>

                <div className="double-input aligh-end">
                  <div className="inp-label-box">
                    <label htmlFor="">Founded On</label>
                    <input
                      type="date"
                      className="claim-inp"
                      value={founded}
                      onChange={handleFoundedChange}
                    />
                  </div>
                  <div className="inp-label-box">
                    <input
                      type="text"
                      className="claim-inp"
                      placeholder="Address"
                    />
                  </div>
                </div>
                <div className="double-input aligh-end">
                  <div className="pass-con inp-label-box cnt-inp">
                    <label htmlFor="">Create username</label>
                    <input
                      type="text"
                      className="claim-inp"
                      placeholder="Username"
                    />

                    <div
                      className="eye-box bx-ey"
                      onClick={togglePasswordVisibility}
                    >
                      {passwordVisible ? (
                        <AiFillCloseCircle className="ck-icon ddo" />
                      ) : (
                        <BsFillCheckCircleFill className="ck-icon" />
                      )}
                    </div>
                    <div className="try-user">
                      Try: User123, 2gedauser, Hoto412
                    </div>
                  </div>
                  <div className="pass-con inp-label-box cnt-inp">
                    <input
                      type="password"
                      className="claim-inp"
                      placeholder="Password"
                    />
                    <div
                      className="eye-box bx-ey"
                      onClick={togglePasswordVisibility}
                    >
                      {passwordVisible ? (
                        <BsEyeSlashFill className="eye-icon" />
                      ) : (
                        <BsEyeFill className="eye-icon" />
                      )}
                    </div>
                  </div>
                </div>
                <div className="double-input ">
                  <div className="inp-label-box txt-nnx">
                    <textarea
                      type="text"
                      className="txt-rea "
                      placeholder="Bio"
                      value={bio}
                      onChange={handleBioChange}
                    />
                    <div className="maxxi">Max 50 words</div>
                  </div>
                </div>
                <div className="availability-box">
                  <div className="fels">
                    <div className="claim">Set Business Availability</div>
                  </div>
                  <div className="alway-avail flex">
                    <div className="txt-alw">Always available</div>
                    <input
                      type="checkbox"
                      onChange={handleAlwaysAvailableChange}
                    />
                  </div>
                  {!isAlwaysAvailable && <Availability />}
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
                <ActionButton label={"Create business"} type={"submit"} />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBussProfile;
