import NonAuthNavbar from "../../Layout/NonAuthNav/NonAuthNavbar";
import SignForm from "../../components/SignUpInComp/SignForm";
import WelcomeComp from "../../components/SignUpInComp/WelcomeComp";
import "./style.css";

const Signup = () => {
  return (
    <>
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
          <SignForm />
        </div>
      </div>
    </>
  );
};

export default Signup;
