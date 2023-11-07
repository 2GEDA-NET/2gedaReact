import { useNavigate } from "react-router-dom";

const Download = () => {
  const navigate = useNavigate();
  const goToCreate = () => {
    navigate("/signup");
  };
  const androidLink =
    "https://play.google.com/store/apps/details?id=com.africa_tech_city.togeda";
  const iosLink = "https://apps.apple.com/ng/app/2geda/id6449421569";

  const getOSLink = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Check if the user is on an Android device
    if (/android/i.test(userAgent)) {
      window.location.href = androidLink;
    } else {
      // User is on iOS or any other platform
      window.location.href = iosLink;
    }
  };
  return (
    <div className="doownload-container flex">
      <div className="im-start">
        <img src="images/star1.png" alt="" />
      </div>
      <div className="im-leff">
        <img src="images/star1.png" alt="" />
      </div>
      <div className="im-dwn">
        <img src="images/star1.png" alt="" />
      </div>
      <div className="left-download">
        <div className="main-txt-down">Excited already?</div>
        <div className="main-txt-down">Want to explore more?</div>
        <div className="btn-download flex">
          <button className="download-btnnt" onClick={getOSLink}>
            Download 2geda
          </button>
          <button className="download-btnnt no-bg" onClick={goToCreate}>
            Register now
          </button>
        </div>
      </div>
      <div className="right-downlaod"></div>
      <img src="images/dow.png" alt="" />
    </div>
  );
};

export default Download;
