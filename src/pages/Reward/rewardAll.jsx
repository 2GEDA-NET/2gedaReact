import { AiOutlineArrowLeft, AiFillLike } from "react-icons/ai";
import "./style.css";
import RewardCard from "../../components/RewardComp/RewardCard";
import { CiLogin } from "react-icons/ci";
import { BsPostcardFill, BsPersonCheck } from "react-icons/bs";
import { FaRegCommentAlt, FaRocketchat } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
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
    pro: 0,
    tot: 1,
  },
  {
    comp: <FaRegCommentAlt />,
    title: "Comments",
    bdy: "Comment on 20 posts on 2geda",
    pro: 12,
    tot: 20,
  },
  {
    comp: <FaRocketchat />,
    title: "Chat",
    bdy: "Message 10 people on 2geda",
    pro: 10,
    tot: 10,
  },
  {
    comp: <BsPersonCheck />,
    title: "Stick",
    bdy: "Stick 25 people on 2geda",
    pro: 12,
    tot: 25,
  },
  {
    comp: <AiFillLike />,
    title: "Likes",
    bdy: "Like 50 posts on 2geda",
    pro: 1,
    tot: 50,
  },
  {
    comp: <IoMdTime />,
    title: "Time rewards",
    bdy: "Spend 2 hours on 2geda",
    pro: 1,
    tot: 2,
  },
];

const RewardAll = ({ handleShowAlClose }) => {
  return (
    <>
      <div className="back-title">
        <div className="bc-ico">
          <AiOutlineArrowLeft className="ti-bc" onClick={handleShowAlClose} />
        </div>
        <div className="head-line">Rewards</div>
      </div>

      <div className="all-reward-box">
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
    </>
  );
};

export default RewardAll;
