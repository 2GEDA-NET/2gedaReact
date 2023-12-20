import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { AiOutlineArrowLeft } from "react-icons/ai";
import ActionButton from "../Commons/Button";
import { MdEdit } from "react-icons/md";
import { BsPersonFill } from "react-icons/bs";
import { useState } from "react";
import { url } from "../../utils";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";

const EditProfile = ({ handleEditProClose }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedMainFile, setSelectedMainFile] = useState(null);
  const [isLoading, setIsloading] = useState(null);
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [dob, setDOB] = useState("");
  const [gender, setGender] = useState(null);
  const [religion, setReligion] = useState(null);
  const [responseData, setResponseData] = useState(null);
  const [profileImage, setProfileImage] = useState([]);
  const [work, setWork] = useState(null);
  const [city, setCity] = useState(null);
  const [bio, setBio] = useState(null);
  const navigate = useNavigate();

  const handleImageChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleMainImageChange = (event) => {
    setSelectedMainFile(event.target.files[0]);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const formattedDate = date.toISOString().split("T")[0];
    return formattedDate;
  };

  function updateProfile() {
    const token = localStorage.getItem("authToken");
    console.log(`Token ${token}`);

    const makeRequest = async () => {
      const formData = {
        post_id: "hi",
        first_name: "like",
        last_name: "",
      };

      try {
        const FormData = require("form-data");
        let data = new FormData();

        console.log(selectedFile);
        console.log(dob);

        data.append("work", work);
        data.append("date_of_birth", dob);
        data.append("gender", gender);
        data.append("custom_gender", "male");
        data.append("religion", religion);
        data.append("first_name", firstName);
        data.append("last_name", lastName);
        data.append("cover_image", selectedMainFile);
        data.append("city", city);
        data.append("media", selectedFile);

        let config = {
          method: "put",
          maxBodyLength: Infinity,
          url: "http://127.0.0.1:8000/profile/update/",
          headers: {
            Authorization: `Token ${token}`,
          },
          data: data,
        };

        axios
          .request(config)
          .then((response) => {
            console.log(JSON.stringify(response.data));
            navigate("/");
          })
          .catch((error) => {
            console.log(error);
          });
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
    <div className="postFormModal-container status-modal-container">
      <div className="over-scr">
        {" "}
        <div className="busi-mod-header">
          <div className="busi-bxs">
            <AiOutlineArrowLeft
              className="cls-post"
              onClick={handleEditProClose}
            />
            <div className="fels">
              <div className="claim">Edit profile</div>
            </div>
            <img src="images/lo2.png" alt="" />
          </div>
        </div>
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
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="inp-label-box">
                <input
                  type="text"
                  className="claim-inp"
                  placeholder="Last name"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
            <div className="double-input">
              <div className="inp-label-box">
                <input
                  type="text"
                  className="claim-inp"
                  placeholder="Occupation"
                  onChange={(e) => setWork(e.target.value)}
                />
              </div>
              <div className="inp-label-box">
                <input
                  type="text"
                  className="claim-inp"
                  placeholder="Current city"
                  onChange={(e) => setCity(e.target.value)}
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
                  onChange={(e) => setDOB(formatDate(e.target.value))}
                />
              </div>
              <div className="inp-label-box">
                <label htmlFor="">Gender</label>
                <select
                  onChange={(e) => setGender(e.target.value)}
                  name=""
                  id=""
                  className="claim-inp"
                >
                  <option value="" disabled>
                    Select a gender
                  </option>
                  <option value="Driver_licence">Male</option>
                  <option value="NIN">Female</option>
                </select>
              </div>
            </div>
            <div className="double-input">
              <div className="inp-label-box txt-nnx">
                <textarea
                  onChange={(e) => {
                    setBio(e.target.value);
                  }}
                  type="text"
                  className="txt-rea"
                  placeholder="Bio"
                />
                <div className="maxxi">Max 50 words</div>
              </div>
            </div>
          </div>

          <div className="act-bttn-cl">
            <div className="act-btn-cont">
              <button
                type="submit"
                onClick={updateProfile}
                className={`action-btn`}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
