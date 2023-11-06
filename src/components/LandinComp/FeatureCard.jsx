const Data = [
  {
    title: "Connect",
    image: "images/connect.png",
    body: "Connect with other nearby users on 2geda",
  },
  {
    title: "Commerce",
    image: "images/commerce.png",
    body: "Outlet is your Marketplace. Buy and sell Goods at a touch. Services can also be posted.",
  },
  {
    title: "Business directory",
    image: "images/busdir.png",
    body: "Explore and connect with businesses all around the world",
  },
  {
    title: "Tickets",
    image: "images/tic.png",
    body: "Buy and sell your event tickets on 2geda",
  },
  {
    title: "Stereo",
    image: "images/stereo.png",
    body: "2geda serves as your go-to app when it comes to the best choice of music",
  },
  {
    title: "Tv",
    image: "images/tv.png",
    body: "Movie upload and viewing been made easy with the 2geda Tv",
  },
  {
    title: "Voting",
    image: "images/connect.png",
    body: "Creating polls and vote casting been simplified on 2geda",
  },
  {
    title: "Livestream",
    image: "images/live.png",
    body: "Create, participate and win live prizes on the 2geda livestream feature",
  },
  {
    title: "Education",
    image: "images/edu.png",
    body: "Your go-to resource for educational updates and resources ",
  },
];
const FeatureCard = () => {
  return (
    <>
      {Data.map((data, index) => (
        <div className="our-fearture-card" key={index}>
          <div className="top-txtt">{data.title}</div>
          <div className="icon-image-feat">
            <img src={data.image} alt="" />
          </div>
          <div className="fear-card-tst">{data.body}</div>
        </div>
      ))}
    </>
  );
};

export default FeatureCard;
