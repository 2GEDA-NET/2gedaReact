const ActionButton = ({ bg, label, type, onclick }) => {
  return (
    <div className="act-btn-cont">
      <button type={type} className={`action-btn ${bg}`} onClick={onclick}>
        {label}
      </button>
    </div>
  );
};

export default ActionButton;
