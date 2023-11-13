import ShortMessage from "../Commons/ShortMessage";

const DashMessage = ({ handleGotoMessagBox }) => {
  return (
    <div className="das-mess-container">
      <div className="mess-unread">
        <div className="mess-headline">Messages</div>
        <div className="unread-box">6</div>
      </div>
      <div className="list-people-st">
        <ShortMessage handleGotoMessagBox={handleGotoMessagBox} />
        <ShortMessage handleGotoMessagBox={handleGotoMessagBox} />
        <ShortMessage handleGotoMessagBox={handleGotoMessagBox} />
        <ShortMessage handleGotoMessagBox={handleGotoMessagBox} />
        <ShortMessage handleGotoMessagBox={handleGotoMessagBox} />
        <ShortMessage handleGotoMessagBox={handleGotoMessagBox} />
        <ShortMessage handleGotoMessagBox={handleGotoMessagBox} />
      </div>
    </div>
  );
};

export default DashMessage;
