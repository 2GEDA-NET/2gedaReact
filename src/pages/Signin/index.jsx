import NonAuthNavbar from "../../Layout/NonAuthNav/NonAuthNavbar";
import SigninForm from "../../components/SignUpInComp/SigninForm ";

const Signin = () => {
  return (
    <>
      <div className="top-mrg"></div>
      <div className="signup-container">
        <NonAuthNavbar nono={"nono"} />
        <div className="welc-form-containr">
          {/* <WelcomeComp /> */}
          <SigninForm />
        </div>
      </div>
    </>
  );
};

export default Signin;
