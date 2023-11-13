import { AiOutlineRight } from "react-icons/ai";
import ActionButton from "../Commons/Button";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useState } from "react";

const SortByModal = ({ handleFilterClose }) => {
  const [ageRange, setAgeRange] = useState([18, 60]); // Initial age range

  const handleSliderChange = (value) => {
    setAgeRange(value);
  };
  const handleSortByAge = () => {
    console.log("Sorting by age range:", ageRange);
  };

  return (
    <div className="sort-modal-container">
      <div className="sort-by-reset flex">
        <div className="sort-by-txt">Sort by</div>
        <div className="reset-txt">Reset</div>
      </div>
      <hr className="line-ran"></hr>
      <div className="gender-sel">
        <div className="gend-txt">Gender</div>
        <div className="gen-sel-bx flex">
          <div className="gend-btn flex activ-gend">Female</div>
          <div className="gend-btn flex">Male</div>
          <div className="gend-btn flex">Others</div>
        </div>
      </div>
      <hr className="line-ran"></hr>

      <div className="age-range-container">
        <div className="sort-by-reset flex">
          <div className="gend-txt">Age range</div>
          <div className="range-score">
            {ageRange[0]} <span>to</span> {ageRange[1]}
          </div>
        </div>
        <div className="age-range-bx">
          <div className="main-slider">
            <Slider
              range
              min={18}
              max={60}
              defaultValue={ageRange}
              onChange={handleSliderChange}
              trackStyle={[
                { backgroundColor: "rgba(56, 53, 53, 0.20)", height: "5px" },
              ]} // Track color
              handleStyle={[
                {
                  borderColor: "#383535",
                  backgroundColor: "#383535",
                  marginLeft: "6px",
                  width: "20px",
                  height: "20px",
                  marginTop: "-8px",
                }, // Handle color
                {
                  borderColor: "#383535",
                  backgroundColor: "#383535",
                  marginLeft: "-6px",
                  width: "20px",
                  height: "20px",
                  marginTop: "-8px",
                },
              ]}
              railStyle={{ backgroundColor: "rgba(56, 53, 53, 0.0))" }} // Rail color
            />
          </div>
        </div>
      </div>
      <div className="out">{ageRange[0]}</div>
      <hr className="line-ran"></hr>

      <div className="loca-row-cont">
        <div className="sort-by-reset flex">
          <div className="gend-txt">Location</div>
          <div className="show-all-bx flex">
            <div className="so-all-txt">Show all</div>
            <AiOutlineRight />
          </div>
        </div>
      </div>
      <hr className="line-ran"></hr>

      <div className="verify-acc-container">
        <div className="sort-by-reset flex">
          <div className="gend-txt">Verified Account</div>
          <input type="checkbox" name="" id="" />
        </div>
      </div>
      <div className="apply-btn-cont flex" onClick={handleFilterClose}>
        <ActionButton label={"Apply"} />
      </div>
    </div>
  );
};

export default SortByModal;
