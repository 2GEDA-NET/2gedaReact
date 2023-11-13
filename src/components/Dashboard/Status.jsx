const Status = ({ handleStickerStatusClick, data }) => {
  return (
    <div className="life-satus" onClick={handleStickerStatusClick}>
      <div className="em-im">
        <img src={data.profile_image} alt="" />
      </div>
      <div className="status-text">{data.name}</div>
    </div>
  );
};

export default Status;
