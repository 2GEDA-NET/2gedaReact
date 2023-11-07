import { useNavigate } from "react-router-dom";
import ActionButton from "../Commons/Button";

const AboutLanding = () => {
  const navigate = useNavigate();
  const goToCreate = () => {
    navigate("/signup");
  };
  return (
    <div className="about-landing-container" id="about-section">
      <div className="about-box-con">
        <div className="hr-ab-con">
          <hr className="about-hr" />
          <div className="abt-us-cont">
            <div className="abt-text">About Us</div>
            <div className="learn-mor">Learn more about 2geda</div>
          </div>
        </div>

        <div className="about-body">
          2GEDA is a Business Social Networking Service (BSNS) provider or
          Social Networking Site (SNS) serving as an online vehicle for
          connecting, creating relationships with other people with a view to
          sharing Views, Social, Political Business, Religion, Culture, and any
          other interaction of personal or / and important interest. It is
          categorically a Business Social Media Website; Business Directory, and
          website listing of information which displays businesses within niche
          based category and other categories. 2GEDA helps users to get updated
          with the latest Business Directory, Social Media, Entertainment,
          Politics, lifestyle and happenings around the world.AS THE UNIVERSE IS
          CONNECTED!At 2GEDA, We believe that Our togetherness as Families,
          Peers, Social Groups, and communities in different locality around the
          world is the most important. We also implement Social Media marketing
          for clients adding values to potential and existing stakeholders.
        </div>
      </div>
      <div className="about-btn flex">
        <ActionButton
          label={"Register on 2geda"}
          bg={"wd-add"}
          onclick={goToCreate}
        />
      </div>
    </div>
  );
};

export default AboutLanding;
