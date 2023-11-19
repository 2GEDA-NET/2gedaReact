import MainLayout from "../../Layout/MainLayout";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import ActionButton from "../../components/Commons/Button";
import "./style.css";
import { useRef, useState } from "react";
import RewardCard from "../../components/RewardComp/RewardCard";
import { CiLogin } from "react-icons/ci";
import { BsPostcardFill } from "react-icons/bs";
import { GoCopy } from "react-icons/go";
import EarnHow from "../../components/RewardComp/EarnHow";
const Data = [
  {
    comp: <CiLogin />,
    title: "Login",
    bdy: "Daily login bonus",
    pro: 5,
    tot: 25,
  },
  {
    comp: <BsPostcardFill />,
    title: "Post creation",
    bdy: "Create a new post",
    pro: 10,
    tot: 10,
  },
  {
    comp: <BsPostcardFill />,
    title: "Comments",
    bdy: "Comment on 20 posts on 2geda",
    pro: 10,
    tot: 20,
  },
];

const Reward = () => {
  const [showBalance, setShowBalance] = useState(false);
  const [showPhoneNumberInput, setShowPhoneNumberInput] = useState(false);

  const [url, setUrl] = useState("2geda.net/faithawokunle");
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(url);
      console.log("URL copied to clipboard:", url);
      setIsCopied(true);
      // Reset the "Copied" text after a certain time if needed
      setTimeout(() => {
        setIsCopied(false);
      }, 2000); // Set your desired timeout duration here
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  const handleTogglePhoneNumberInput = () => {
    setShowPhoneNumberInput(!showPhoneNumberInput);
  };

  const handleToggleBalance = () => {
    setShowBalance(!showBalance);
  };
  return (
    <div className="home-container new-bg">
      <MainLayout>
        <div className="main-containe bus-box-con stereo-bxbxb">
          <div className="left-side-container buss-all-container ster-container-man">
            <>
              <div className="back-title">
                <div className="bc-ico">
                  <AiOutlineArrowLeft className="ti-bc" />
                </div>
                <div className="head-line">Rewards</div>
              </div>
              <div className="pay-top-box">
                <div className="avail-bal-cont flex">
                  <div className="avail-bal">Balance</div>
                  <div className="view-roy">View history</div>
                </div>
                <div className="coin-bal-view flex">
                  <img src="images/oni.png" alt="" />
                  <div
                    className={`avail-bal-ivi ${showBalance ? "dis-view" : ""}`}
                  >
                    {showBalance ? "0.00" : "*****"}
                  </div>
                  <div className="view-or-not">
                    {showBalance ? (
                      <FaEyeSlash onClick={handleToggleBalance} />
                    ) : (
                      <FaEye onClick={handleToggleBalance} />
                    )}
                  </div>
                </div>
                <div className="btn-request-rew flex">
                  <ActionButton label={"Request withdrawal"} bg={"bg-te"} />
                </div>

                <div className="first-cir-pay"></div>
                <div className="sec-cir-pay"></div>
              </div>
              <div className="all-reward-box">
                <div className="view-all-tic-bx mvwn">
                  <div className="product-ind">Rewards</div>
                  <div className="view-ll pup">View more</div>
                </div>
                <div className="reward-card-row">
                  {Data.map((item, index) => (
                    <RewardCard
                      key={index}
                      comp={item.comp}
                      title={item.title}
                      bdy={item.bdy}
                      pro={item.pro}
                      tot={item.tot}
                    />
                  ))}
                </div>
              </div>
              <div className="refer-container">
                <div className="refer-input-bx flex">
                  <div className="refer-ern-bx">
                    <div className="main-re-tst">Refer and Earn</div>
                    <div className="reward-refer-txt">
                      Refer friends, earn rewards.
                    </div>
                  </div>
                  <form action="" className="flex rf-frm">
                    <div className="form-refer-bx flex">
                      {showPhoneNumberInput ? (
                        <input
                          type="tel"
                          placeholder="Enter phone number"
                          className="refer-inp"
                        />
                      ) : (
                        <input
                          type="email"
                          placeholder="Enter email address"
                          className="refer-inp"
                        />
                      )}

                      <button className="refer-send">Send</button>
                    </div>
                    <div
                      className="use-num-sted"
                      onClick={handleTogglePhoneNumberInput}
                    >
                      {showPhoneNumberInput
                        ? "Use email instead"
                        : "Use phone number instead"}
                    </div>
                    {/* <div className="use-num-sted">Use phone number instead</div> */}
                  </form>
                </div>
                <div className="refer-bx-cont">
                  <div className="refer-link-bx flex">
                    <div className="link-ref">{url}</div>
                    <GoCopy className="cp-clik" onClick={handleCopyClick} />
                  </div>
                  {isCopied && <div className="copied">Copied</div>}
                </div>
              </div>
            </>
          </div>

          <div className="right-side-container right-stereo">
            <div className="how-earn-container">
              <div className="earn-ow-txt">How to earn</div>
              <div className="earn-how-row">
                <EarnHow />
                <EarnHow />
                <EarnHow />
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
};

export default Reward;
