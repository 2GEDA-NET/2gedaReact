import FeatureCard from "./FeatureCard";

const OurFeature = () => {
  return (
    <div className="about-landing-container">
      <div className="about-box-con">
        <div className="hr-ab-con">
          <hr className="about-hr" />
          <div className="abt-us-cont fet-wd">
            <div className="abt-text">Our Features</div>
            <div className="learn-mor">What we offer</div>
          </div>
        </div>
      </div>
      <div className="feature-card-row flex">
        <FeatureCard />
      </div>
    </div>
  );
};

export default OurFeature;
