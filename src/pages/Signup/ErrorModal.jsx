import { AiOutlineCloseCircle } from "react-icons/ai";

const ErrorModal = ({ message, handleErrorClose }) => {
  return (
    <div className="succ-ver-modal-container err-bg flex">
      <div className="mess-tst">{message}</div>
      <AiOutlineCloseCircle className="check-very" onClick={handleErrorClose} />
    </div>
  );
};

export default ErrorModal;
