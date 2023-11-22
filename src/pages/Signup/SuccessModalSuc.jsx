import { AiOutlineCheckCircle } from "react-icons/ai";

const SuccessModalSuc = ({ handleSuccClose, message }) => {
  return (
    <div className="succ-ver-modal-container flex">
      <div className="mess-tst">{message}</div>
      <AiOutlineCheckCircle className="check-very" onClick={handleSuccClose} />
    </div>
  );
};

export default SuccessModalSuc;
