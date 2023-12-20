import { useState } from "react";
import ActionButton from "../Commons/Button";
import InputField from "../Commons/InputField";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { url } from "../../utils";

const SignForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isUsingPhone, setIsUsingPhone] = useState(false);
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(phone);
  const navigate = useNavigate();
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
  };

  localStorage.setItem("username", username);

  const signupUser = async (event) => {
    event.preventDefault();
    let userData;

    if (isUsingPhone) {
      // User is using phone
      userData = {
        username: username,
        phone_number: phone,
        password: password,
      };
    } else {
      // User is using email
      userData = {
        username: username,
        email: email,
        password: password,
      };
    }

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(userData);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    const response = await fetch(`${url}/register/`, requestOptions);
    const responseBody = await response.json();
    console.log(responseBody);

    if (!response.ok) {
      console.log("response status :", response.status);
    } else {
      const token = responseBody.token;
      
      localStorage.setItem("authTOken", token);
      console.log("authTOken", token);


      navigate("/EditProfile");
      console.log(responseBody);
    }
    // // .then((response) => {
    // //   if (response.ok && response.status === 200) {
    // //     // If the response is OK, proceed with parsing JSON
    // //     return response.json();
    // //   } else {
    // //     throw new Error("Authentication failed");
    // //   }
    // // })
    // // .then((result) => {
    // //   // Check if the token is available in the result
    // //   const token = result.token;

    // //   if (token) {
    // //     // Save the token to local storage
    // //     localStorage.setItem("authToken", token);
    // //     console.log("authToken", token);

    // //     // Redirect to the profile page
    // //     navigate("/profile");
    // //   } else {
    // //     throw new Error("Token not found in the API response");
    // //   }
    // })
    // .catch((error) => {
    //   console.log("error", error);
    // });
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
            {/* <InputField placeholder={"Input Phone Number"} type={"tel"} /> */}
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
          {/* <button type="submit">Submit</button> */}
        </div>
        <div className="alr-ave">
          Already have an account?
          <span>Sign in</span>
        </div>
      </form>
    </div>
  );
};

export default SignForm;
