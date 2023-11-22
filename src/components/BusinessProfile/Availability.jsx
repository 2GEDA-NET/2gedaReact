import { useState } from "react";
const Data = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];

const Availability = () => {
  //   const [isChecked, setIsChecked] = useState(false);

  //   const handleToggle = () => {
  //     setIsChecked((prev) => !prev);
  //   };
  const [toggles, setToggles] = useState(
    Data.map(() => {
      return { isChecked: false };
    })
  );

  const handleToggle = (index) => {
    const newToggles = [...toggles];
    newToggles[index].isChecked = !newToggles[index].isChecked;
    setToggles(newToggles);
  };
  return (
    <div>
      {Data.map((day, index) => (
        <div key={index} className="select-day-avail flex">
          <div>
            <label className="switch_avail">
              <input
                type="checkbox"
                checked={toggles[index].isChecked}
                onChange={() => handleToggle(index)}
              />
              <span className="slider_avail round">
                {toggles[index].isChecked ? (
                  <div className="on-sl">{day}</div>
                ) : (
                  <div className="off-sl">{day}</div>
                )}
              </span>
            </label>
          </div>
          <div className="time-rang-bx-con">
            <input type="time" className="time-range-inp" />
            <span>To</span>
            <input type="time" className="time-range-inp" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Availability;
