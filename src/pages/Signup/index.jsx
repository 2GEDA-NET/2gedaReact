import { useState } from "react";
import NonAuthNavbar from "../../Layout/NonAuthNav/NonAuthNavbar";
import SignForm from "../../components/SignUpInComp/SignForm";
import WelcomeComp from "../../components/SignUpInComp/WelcomeComp";
import ErrorModal from "./ErrorModal";
import "./style.css";

const Signup = () => {
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleErrorClick = (message) => {
    setErrorMessage(message);
    setIsError(true);
  };
  const handleErrorClose = () => {
    setIsError(false);
  };
  return (
    <>
      {isError && (
        <div className="modal-full-container mv-to-up">
          <ErrorModal
            message={errorMessage}
            handleErrorClose={handleErrorClose}
          />
        </div>
      )}
      <div className="top-mrg"></div>

      <div className="signup-container">
        <NonAuthNavbar nono={"nono"} />
        <div className="welc-form-containr">
          {/* <WelcomeComp /> */}
          {/* <div className="rit-txt-box">
          <div className="ad-text-main rddx">
            Explore Our Inclusive Business Directory <br />
            Discover a diverse array of businesses in our inclusive directory
            today.
          </div>
        </div> */}
          <SignForm handleErrorClick={handleErrorClick} />
        </div>
      </div>
    </>
  );
};

export default Signup;
