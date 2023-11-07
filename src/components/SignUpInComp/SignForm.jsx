import { useContext, useState } from "react";
import ActionButton from "../Commons/Button";
import InputField from "../Commons/InputField";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useNavigate } from "react-router-dom";
import { AuthCtx } from "../../Context/AuthContext";

const SignForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isUsingPhone, setIsUsingPhone] = useState(false);
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { userAuth, setUserAuth } = useContext(AuthCtx);
  console.log(userAuth);

  console.log(phone);
  const navigate = useNavigate();
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const gotoSignIn = () => {
    navigate("/signin");
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
  };
  const signupUser = (event) => {
    event.preventDefault();
    let userData;
    if (email === "") {
      userData = { username, password, phone_number: phone };
    } else {
      userData = { username, email, password };
    }
    console.log(userData);
    fetch("https://shark-app-ia4iu.ondigitalocean.app/register/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      // .then((response) => response.json())
      // .then((data) => {
      //   console.log(data.token);
      //   localStorage.setItem("authToken", data?.token);
      //   setUserAuth({ token: data?.token });
      //   console.log(userAuth);
      //   {
      //     data?.token?.ok && navigate("/verify");
      //   }
      // })
      // .catch((error) => {
      //   console.error("Error:", error);
      // });
      .then((response) => response.json())
      .then((data) => {
        console.log(data.token);
        localStorage.setItem("authToken", data?.token);
        setUserAuth({ token: data?.token });
        console.log(userAuth);
        data?.token?.ok && navigate("/verify");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div className="sign-form">
      <div className="create-ead-txt">Create an Account</div>
      <div className="greet-txt">
        Welcome to 2geda. To continue, please provide your details
      </div>

      <form action="" onSubmit={signupUser}>
        {isUsingPhone ? (
          <div className="inp-phone">
            <PhoneInput
              defaultCountry="NG"
              className="custom-phone-input"
              name="phone"
              style={{ height: "40px" }}
              onChange={(phone) => setPhone(phone)}
              placeholder="+234 80 2015 5501"
              required
            />
            <div className="ins-bx-txt">
              We’ll verify the phone provided to be sure it belongs to you
            </div>
          </div>
        ) : (
          <div className="inp-email">
            <InputField
              placeholder={"Input email address"}
              type={"text"}
              value={email}
              onChange={handleEmailChange}
            />
            <div className="ins-bx-txt">
              We’ll verify the email provided to be sure it belongs to you
            </div>
          </div>
        )}

        <div className="use-phone" onClick={handleUsePhoneClick}>
          {isUsingPhone
            ? "Use Email address instead"
            : "Use Phone number instead"}
        </div>

        <InputField
          placeholder={"Username"}
          type={"text"}
          name="username"
          value={username}
          onChange={handleUsernameChange}
        />
        <div className="pass-con">
          <InputField
            placeholder={"Create Password"}
            type={passwordVisible ? "text" : "password"}
            name="password"
            value={password}
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
        <div className="btn-continu">
          <ActionButton label={"Continue"} bg={"ma-d"} type={"submit"} />
        </div>
        <div className="alr-ave">
          Already have an account? <span onClick={gotoSignIn}>Sign in</span>
        </div>
      </form>
    </div>
  );
};

export default SignForm;
