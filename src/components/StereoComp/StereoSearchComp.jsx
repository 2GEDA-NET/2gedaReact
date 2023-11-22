import { MdLogout } from "react-icons/md";
import { BiSearch } from "react-icons/bi";
import { BsFileEarmarkMusic } from "react-icons/bs";

const StereoSearchComp = ({
  label,
  add,
  setSearchText,
  searchText,
  handleKeyPress,
  handleSearchResult,
  handleLibraryOpen,
}) => {
  return (
    <div className="buy-sell-comp-cont tic-sea">
      <div className="logout-cont flex">
        <div className="back-title">
          <div className="bc-ico">
            {/* <AiOutlineArrowLeft className="ti-bc" /> */}
          </div>
          <div className="head-line">{label}</div>
        </div>
        <div className="library-art-bx flex">
          <button className="log-out-bttn flex">
            <MdLogout />
            Logout
          </button>
          <BsFileEarmarkMusic className="lib-mus" onClick={handleLibraryOpen} />
        </div>
      </div>
      <div className={`search-product ticccc ${add} `}>
        <div className="sear-input-pro">
          <input
            type="text"
            className="inp-pro"
            placeholder="Search Events"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={handleKeyPress}
          />
        </div>
        <BiSearch className="seah-con" onClick={handleSearchResult} />
      </div>
    </div>
  );
};

export default StereoSearchComp;
