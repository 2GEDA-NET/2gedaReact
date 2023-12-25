const ActionButton = ({ bg, label, type }) => {
  return (
    <div className="act-btn-cont">
      <button type={type} className={`action-btn ${bg}`}>
        {label}
      </button>
    </div>
  );
};

export default ActionButton;
