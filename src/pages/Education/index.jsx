import { useEffect, useState } from "react";
import MainLayout from "../../Layout/MainLayout";
import "./style.css";
import EduExamCard from "../../components/EduComp/EduExamCard";
import EduMainCard from "../../components/EduComp/EduMainCard";
import EduOrderCard from "../../components/EduComp/EduOrderCard ";

const Education = () => {
  const Data = [
    {
      id: 1,
      title: "WAEC results are out",
      mainImg:
        "https://cdn.planetspark.in/editor_assets/pictures/3566/content.jpg",
      topImg: "images/weac.png",
      body: "2023 WAEC results are out. Check yours now!",
    },

    {
      id: 2,
      title: "NECO results are out",
      mainImg:
        "https://img.freepik.com/premium-photo/opened-book-with-flying-pages-butterflies-dark-backgroundgenerative-ai_391052-12859.jpg",
      topImg: "https://nairametrics.com/wp-content/uploads/2021/06/NECO.png",
      body: "2023 NECO results are out. Check yours now!",
    },
    {
      id: 3,
      title: "WAEC results are out",
      body: "2023 WAEC results are out. Check yours now!",
      mainImg:
        "https://st2.depositphotos.com/1105977/5461/i/450/depositphotos_54615585-stock-photo-old-books-on-wooden-table.jpg",
      topImg: "images/weac.png",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Update the current index, cycling back to 0 when reaching the end
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Data.length);
    }, 5000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [currentIndex, Data.length]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="home-container back-edu-ound">
        <MainLayout>
          <div className="main-containe bus-box-con stereo-bxbxb edu-main-bbx">
            <div className="left-side-container buss-all-container ster-container-man edu-bxbxb">
              <>
                <div className="head-line">Education</div>
                <div className="carosel-custom-container">
                  <div className="img-caro-cust">
                    <div className="log-over-bx-edu">
                      <img src={Data[currentIndex].topImg} alt="" />
                    </div>
                    <img
                      src={Data[currentIndex].mainImg}
                      alt={`Slide ${currentIndex + 1}`}
                    />
                    <div className="overlay-edu-bx">
                      <div className="nain-edu-over">
                        {Data[currentIndex].title}
                      </div>
                      <div className="body-over-edu">
                        {Data[currentIndex].body}
                      </div>
                    </div>
                  </div>

                  <div className="indic-edu-bx">
                    {Data.map((_, index) => (
                      <div
                        key={index}
                        className={`indica-edu ${
                          index === currentIndex ? "indi-edu-act" : ""
                        }`}
                      ></div>
                    ))}
                  </div>
                </div>
                <div className="popular-edu-container">
                  <div className="head-line">Popular examinations</div>
                  <div className="card-exan-">
                    <EduExamCard />
                    <EduExamCard />
                  </div>
                </div>
                <div className="im-stereo-ads">
                  <img src="images/ads8.png" alt="" />
                </div>
                <div className="main-containe-oter">
                  <div className="head-line">Other examinations</div>

                  <div className="mainedu-card-row flex">
                    <EduMainCard />
                    <EduMainCard />
                    <EduMainCard />
                    <EduMainCard />
                  </div>
                </div>
              </>
            </div>

            <div className="right-side-container right-stereo right-edu">
              <div className="head-line">Resources</div>
              <div className="row-order-edu">
                <EduOrderCard />
                <EduOrderCard />
                <EduOrderCard />
                <EduOrderCard />
                <EduOrderCard />
                <EduOrderCard />
                <EduOrderCard />
                <EduOrderCard />
              </div>
            </div>
          </div>
        </MainLayout>
      </div>
    </>
  );
};

export default Education;
