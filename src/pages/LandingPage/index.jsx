import NonAuthNavbar from "../../Layout/NonAuthNav/NonAuthNavbar";
import AboutLanding from "../../components/LandinComp/About";
import Download from "../../components/LandinComp/Download";
import HeroSection from "../../components/LandinComp/HeroSection";
import OurFeature from "../../components/LandinComp/OurFeature";
import "./style.css";

const Landing = () => {
  return (
    <div className="landing-container">
      <NonAuthNavbar />
      <div className="top-mrg"></div>
      <HeroSection />
      <AboutLanding />
      <OurFeature />
      <Download />
    </div>
  );
};

export default Landing;
