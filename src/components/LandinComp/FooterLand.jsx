import { useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const FooterLand = () => {
  const navigate = useNavigate();
  const goToCreate = () => {
    navigate("/signup");
  };
  const goToPrivacy = () => {
    navigate("/privacy");
  };
  const scrollOffset = -100;
  return (
    <div className="footer-land-container ">
      <div className=" bx-mig">
        <div className="image-container m-cont">
          <img src="images/hero3.jpg" alt="" />
        </div>
        <div className="image-container m-cont">
          <img src="images/hero4.jpg" alt="" />
        </div>
        <div className="image-container m-cont">
          <img src="images/hero3.jpg" alt="" />
        </div>
        <div className="image-container m-cont">
          <img src="images/hero4.jpg" alt="" />
        </div>
        <div className="image-container m-cont">
          <img src="images/hero3.jpg" alt="" />
        </div>
        <div className="image-container m-cont">
          <img src="images/hero4.jpg" alt="" />
        </div>
        <div className="image-container m-cont">
          <img src="images/hero3.jpg" alt="" />
        </div>
        <div className="image-container m-cont">
          <img src="images/hero4.jpg" alt="" />
        </div>
        <div className="image-container m-cont">
          <img src="images/hero4.jpg" alt="" />
        </div>{" "}
        <div className="image-container m-cont">
          <img src="images/hero4.jpg" alt="" />
        </div>
        <div className="image-container m-cont">
          <img src="images/hero4.jpg" alt="" />
        </div>{" "}
        <div className="image-container m-cont">
          <img src="images/hero4.jpg" alt="" />
        </div>{" "}
        <div className="image-container m-cont">
          <img src="images/hero4.jpg" alt="" />
        </div>{" "}
        <div className="image-container m-cont">
          <img src="images/hero4.jpg" alt="" />
        </div>{" "}
        <div className="image-container m-cont">
          <img src="images/hero4.jpg" alt="" />
        </div>
      </div>
      <div className="footer-land-bx ">
        <div className="image-lo-bx">
          <img src="images/lo4.png" alt="" />
          <div className="net">2geda.net</div>
        </div>
        <div className="quik-links-bx">
          <div className="each-link ql">Quick links</div>
          <div className="each-link" onClick={goToCreate}>
            Create account
          </div>
          <ScrollLink
            to="hero-section"
            smooth={true}
            duration={2}
            offset={scrollOffset}
          >
            <div className="each-link">Home</div>
          </ScrollLink>
          <ScrollLink
            to="about-section"
            smooth={true}
            duration={2}
            offset={scrollOffset}
          >
            <div className="each-link">About us</div>
          </ScrollLink>
        </div>
        <div className="quik-links-bx">
          <div className="each-link ql">Support</div>
          <ScrollLink
            to="faq-section"
            smooth={true}
            duration={2}
            offset={scrollOffset}
          >
            <div className="each-link">FAQ</div>
          </ScrollLink>
          <ScrollLink
            to="supp-section"
            smooth={true}
            duration={2}
            offset={scrollOffset}
          >
            <div className="each-link">Contact support</div>
          </ScrollLink>
          <div className="each-link" onClick={goToPrivacy}>
            Privacy Policy
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterLand;
