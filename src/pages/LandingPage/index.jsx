import NonAuthNavbar from "../../Layout/NonAuthNav/NonAuthNavbar";
import AboutLanding from "../../components/LandinComp/About";
import Contact from "../../components/LandinComp/Contact";
import Download from "../../components/LandinComp/Download";
import FAQ from "../../components/LandinComp/FAQ";
import FooterLand from "../../components/LandinComp/FooterLand";
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
      <Contact />
      <FAQ />
      <FooterLand />
    </div>
  );
};

export default Landing;
