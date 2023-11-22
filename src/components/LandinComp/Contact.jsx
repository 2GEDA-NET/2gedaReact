import ActionButton from "../Commons/Button";

const Contact = () => {
  return (
    <div className="contact-form-container flex" id="supp-section">
      <div className="im-start stt">
        <img src="images/star2.png" alt="" />
      </div>
      <div className="left-contact">
        <div className="supp-bx flex">
          <img src="images/em2.png" alt="" />
          <div className="txt-support">
            <div className="supp-main-txt">Contact support?</div>
            <div className="supp-bdy">
              For any questions, assistance, or feedback, our dedicated support
              team is here to help. Contact <b> EMEKA </b> anytime, and he'll
              promptly address your needs.
            </div>
          </div>
        </div>
      </div>
      <div className="right-contact">
        <form action="" className="contact-form">
          <div className="iput-cont">
            <input
              type="email"
              placeholder="Your email"
              className="contact-inpu"
            />
            <input
              type="text"
              placeholder="Your message"
              className="contact-inpu"
            />
          </div>
          <div className="contact-btn">
            <ActionButton label={"Send message"} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
