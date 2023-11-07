import { useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

const FAQ = () => {
  const [isClick, SetIsClick] = useState(false);

  const handleClick = () => {
    SetIsClick(!isClick);
  };
  return (
    <div className="faq-container" id="faq-section">
      <div className="faq-top-txt">Frequently asked questions</div>
      <div className="can-faq-cont">
        <div className="faq-bx-arr flex">
          <div className="faq-txt-arr">How can I get started with 2geda?</div>
          {isClick ? (
            <AiOutlineUp onClick={handleClick} className="dw-clk" />
          ) : (
            <AiOutlineDown onClick={handleClick} className="dw-clk" />
          )}
        </div>
        {isClick && (
          <div className="faq-txt-dw">
            Getting started is easy! Visit our homepage and create an account to
            access all the features and opportunities 2geda has to offer.
          </div>
        )}
      </div>
    </div>
  );
};

export default FAQ;
