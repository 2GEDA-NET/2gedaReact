import React from "react";
import ActionButton from "../Commons/Button";
import support from "../../assets/support.png"
import phone from "../../assets/phone.png"
import wphone from "../../assets/wphone.png"
import logo from "../../assets/logo.png";
import {FaCartPlus, FaConnectdevelop, FaEnvelope, FaMusic, FaTicketAlt, FaVideo, FaVoteYea } from "react-icons/fa";
import Card from "../Card";
import { FaHeadset, FaPhone } from "react-icons/fa6";
import Box from "../Box";
import { Link } from "react-router-dom";

const AboutLanding = () => {
   const cardData = [
     {
       heading: "Connect",
       icon: <FaConnectdevelop />,
       paragraph: "Connect with other 2geda user in your neigborhood",
     },
     {
       heading: "Stereo",
       icon: <FaMusic />,
       paragraph:
         "2geda is your Go-To app when it comes to the best choice of music",
     },
     {
       heading: "Commerce",
       icon: <FaCartPlus />,
       paragraph: "Commerce is your marketplace. Buy and sell goods.",
     },
     {
       heading: "Tv",
       icon: <FaVideo />,
       paragraph:
         "Movie upload and viewing has been made so easy with 2geda polls",
     },
     {
       heading: "Tickets",
       icon: <FaTicketAlt />,
       paragraph: "Buy, sell and promote your event tickets on 2geda ",
     },
     {
       heading: "Voting",
       icon: <FaVoteYea />,
       paragraph:
         "Creating polls and vote casting has been made simplified on 2geda",
     },
   ];
   const boxData = [
     {
       icon: <FaEnvelope />,
       heading: "Email Us",
       paragraph: "Reach out to us for enquiries or assistance.",
       action: "support@geda.net",
     },
     {
       icon: <FaPhone />,
       heading: "Customer Support",
       paragraph: "Message or call us for assistance",
       action: "+2348132912188",
     },
     {
       icon: <FaHeadset />,
       heading: "2geda assistant",
       paragraph: "Emeka is available for your support.",
       action: "Contact Emeka",
     },
    
   ];
  return (
    <>
      <div id="about">
        <div className="about-container">
          <p className="colored-text">About 2geda</p>
          <h3 className="heading-tertiary">Know more about 2geda</h3>
          <div className="about-content">
            <div className="image-container">
              <div className="board">
                <img src={support} alt="support" className="img" />
              </div>
            </div>
            <div className="about-text-container">
              <p className="about-text" style={{textAlign: "start"}}>
                At 2GEDA, we're not just a social network; we're a global
                community fostering connections and meaningful interactions.
                Serving as your all-in-one platform, we're the marketplace for
                local commerce, the stage for events, the curator of music, and
                your go-to for polls and live prizes. Join us on 2GEDA, where
                connectivity meets a world of possibilities.
              </p>
              <ActionButton bg={"pruplr"} label={"Get started"} />
            </div>
          </div>
        </div>
      </div>

      <div id="features">
        <div className="why">
          <p className="text-purple" style={{ fontSize: "18px" }}>
            Our Features
          </p>
          <h2 className="heading-secondary">Unleash the Power of 2geda</h2>
        </div>
        <div className="flex feature flex-col md:flex-row items-stretch md:gap-8 h-full ">
          <div className="container mx-auto pt-9 md:flex-row items-center justify-center">
            <div className="cardGrid">
              {cardData.map((card, index) => (
                <Card 
                  key={index}
                  heading={card.heading}
                  icon={card.icon}
                  paragraph={card.paragraph } 
                  layout={card.layout}
                />
              ))}
            </div>
          </div>
          <img src={phone} className="imag" alt="Aid" />
        </div>
      </div>

      <div id="contact">
        <div className="why">
          <p className="text-purple" style={{ fontSize: "18px" }}>
            Contact us
          </p>
          <h2 className="heading-secondary">We are ready to help</h2>
        </div>
        <div className="boxCard">
          {boxData.map((box, index) => (
            <Box
              key={index}
              heading={box.heading}
              icon={box.icon}
              paragraph={box.paragraph}
              action={box.action}
            />
          ))}
        </div>
      </div>

      <div className="download">
        <div className="about-content">
          <div className="about-text-container">
            <h3 className="header">Experience 2GEDA Anywhere, Anytime</h3>
            <p className="download-text" style={{textAlign: "start"}}>
              Connect seamlessly on 2GEDA - your social hub for local and global
              interactions. Download now to experience a world of connectivity,
              commerce, and community. Stay connected, stay informed, stay 2GEDA
            </p>
            <div className="download-button">
              <ActionButton bg={"white"} label={"Download 2geda"} />
              <ActionButton bg={"border"} label={"Register now"} />
            </div>
          </div>
          <div className="image-container">
            <img src={wphone} alt="support" className="img" />
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="fdiv" >
        <div>
          <img src={logo} alt="logo" className="logo" />
          <h2>www.2geda.net</h2>
        </div>
        <div >
          <p className="heading-secondary" style={{textAlign: "center"}}>Quick Links</p>
          <div className="link">
            <Link to="/#features">Features</Link>
            <Link to="/#about">About</Link>
            <Link to="/#contact">Contact</Link>
            <Link to="/#faq">FAQ</Link>
          </div>
        </div>
        </div>
        <div className="subscribe">
          <h2>Subscribe</h2>
          <div className="subscribe-form">
            <input type="email" placeholder="Enter your email" />
            <span className="arrow">➡</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutLanding;
