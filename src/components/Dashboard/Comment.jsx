import ComBtn from "../Commons/ComBtn";

const Comment = ({ disnone }) => {
  return (
    <div className={`comment-container ${disnone}`}>
      <div className="post-ead">Comment</div>
      <div className="inp-coment">
        <textarea
          name=""
          className="comment-inp"
          id=""
          placeholder="Your comment goes here"
        ></textarea>
        <ComBtn />
      </div>
    </div>
  );
};

export default Comment;
