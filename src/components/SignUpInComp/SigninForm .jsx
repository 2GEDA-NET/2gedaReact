import { useContext, useState } from "react";
import ActionButton from "../Commons/Button";
import InputField from "../Commons/InputField";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_BASE_URL } from "../../App";
import { AuthCtx } from "../../Context/AuthContext";

const SigninForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isUsingPhone, setIsUsingPhone] = useState(false);
  const [isUsingUsername, setIsUsingUsername] = useState(false);
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { userAuth, setUserAuth } = useContext(AuthCtx);

  const navigate = useNavigate();
  console.log(API_BASE_URL);
  const goToForgot = () => {
    navigate("/forgot");
  };
  const gotoSignUp = () => {
    navigate("/signup");
  };
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleUsePhoneClick = () => {
    setIsUsingPhone(!isUsingPhone);
    setIsUsingUsername(false);
  };

  const handleUseUsernameClick = () => {
    setIsUsingUsername(!isUsingUsername);
    setIsUsingPhone(false);
  };
  const phone_number = phone;

  const handleLogin = async (e) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append("username", username || phone_number || email);
    formData.append("password", password);
    try {
      const response = await axios.post(`${API_BASE_URL}/login/`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log(phone_number);
      localStorage.setItem("authToken", response.data?.token);
      setUserAuth({ token: response.data?.token });
      console.log(response.data);
      console.log(userAuth);
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.error);
      } else {
        console.log("An error occurred during the login process.");
      }
    }
  };
  return (
    <div className="sign-form">
      <div className="create-ead-txt">Login</div>
      <div className="greet-txt">
        Welcome back. Enter your details to continue.
      </div>

      <form action="" onSubmit={handleLogin}>
        {isUsingPhone && !isUsingUsername && (
          <div className="inp-phone">
            <PhoneInput
              defaultCountry="NG"
              className="custom-phone-input"
              value={phone}
              style={{ height: "40px" }}
              onChange={(phone) => setPhone(phone)}
              placeholder="+1 201-555-0123"
              required
            />
          </div>
        )}

        {!isUsingPhone && !isUsingUsername && (
          <div className="inp-email">
            <InputField
              placeholder={"Input email address"}
              type={"email"}
              value={email}
              onChange={handleEmailChange}
            />
          </div>
        )}

        {isUsingUsername && (
          <div className="inp-username">
            <InputField
              placeholder={"Username"}
              type={"text"}
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
        )}

        <div className="pass-con">
          <InputField
            placeholder={"Password"}
            type={passwordVisible ? "text" : "password"}
            onChange={handlePasswordChange}
          />
          <div className="eye-box" onClick={togglePasswordVisibility}>
            {passwordVisible ? (
              <BsEyeSlashFill className="eye-icon" />
            ) : (
              <BsEyeFill className="eye-icon" />
            )}
          </div>
        </div>
        <div className="forg-pas-contan" onClick={goToForgot}>
          Forgot password?
        </div>
        <div className="use-phone" onClick={handleUsePhoneClick}>
          {isUsingPhone
            ? "Use Email Address Instead"
            : isUsingUsername
            ? "Use Email Address Instead"
            : "Use Phone Number Instead"}
        </div>
        <div
          className="use-phone"
          onClick={
            isUsingUsername ? handleUsePhoneClick : handleUseUsernameClick
          }
        >
          {isUsingUsername
            ? "Use Phone Number Instead"
            : "Use Username Instead"}
        </div>

        <div className="btn-continu">
          <ActionButton label={"Continue"} bg={"ma-d"} />
        </div>
        <div className="alr-ave">
          New user? <span onClick={gotoSignUp}>Sign up</span>
        </div>
      </form>
    </div>
  );
};

export default SigninForm;
