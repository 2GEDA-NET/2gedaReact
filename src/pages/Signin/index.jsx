import { useState } from "react";
import NonAuthNavbar from "../../Layout/NonAuthNav/NonAuthNavbar";
import SigninForm from "../../components/SignUpInComp/SigninForm ";
import ErrorModal from "../Signup/ErrorModal";
import SuccessModalSuc from "../Signup/SuccessModalSuc";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSucc, setIsSucc] = useState(false);
  const [succMessage, setSuccMessage] = useState("");
  const navigate = useNavigate();

  const handleSuccClick = (message) => {
    setSuccMessage(message);
    setIsSucc(true);
    setTimeout(() => {
      navigate("/home");
    }, 1000);
  };
  const handleSuccClose = () => {
    setIsSucc(false);
  };

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
      {isSucc && (
        <div className="modal-full-container mv-to-up">
          <SuccessModalSuc
            message={succMessage}
            handleSuccClose={handleSuccClose}
          />
        </div>
      )}
      <div className="top-mrg"></div>
      <div className="signup-container">
        <NonAuthNavbar nono={"nono"} />
        <div className="welc-form-containr">
          {/* <WelcomeComp /> */}
          <SigninForm
            handleErrorClick={handleErrorClick}
            handleSuccClick={handleSuccClick}
          />
        </div>
      </div>
    </>
  );
};

export default Signin;
