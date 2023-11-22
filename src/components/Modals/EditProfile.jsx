import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { AiOutlineArrowLeft } from "react-icons/ai";
import ActionButton from "../Commons/Button";
import { MdEdit } from "react-icons/md";
import { BsPersonFill } from "react-icons/bs";
import { useState } from "react";

const EditProfile = ({ handleEditProClose }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedMainFile, setSelectedMainFile] = useState(null);

  const handleImageChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleMainImageChange = (event) => {
    setSelectedMainFile(event.target.files[0]);
  };

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
                />
              </div>
              <div className="inp-label-box">
                <input
                  type="text"
                  className="claim-inp"
                  placeholder="Last name"
                />
              </div>
            </div>
            <div className="double-input">
              <div className="inp-label-box">
                <input
                  type="text"
                  className="claim-inp"
                  placeholder="Occupation"
                />
              </div>
              <div className="inp-label-box">
                <input
                  type="text"
                  className="claim-inp"
                  placeholder="Current city"
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
                />
              </div>
              <div className="inp-label-box">
                <label htmlFor="">Gender</label>
                <select name="" id="" className="claim-inp">
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
                <textarea type="text" className="txt-rea" placeholder="Bio" />
                <div className="maxxi">Max 50 words</div>
              </div>
            </div>
          </div>

          <div className="act-bttn-cl">
            <ActionButton label={"Save"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
