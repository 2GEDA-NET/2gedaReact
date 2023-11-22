import { useState } from "react";

import CategoryMajorCard from "../../components/Commerce/CategoryMajorCard";
import MyStoreDetail from "../../components/Commerce/MyStoreDetail";
import MyStoreSearchComp from "../../components/Commerce/MyStoreSearchComp";
import EditSellItem from "../../components/Modals/EditSellItem";
import SellItemStepTwo from "../../components/Modals/SellItemStepTwo";
import SellItemStepThree from "../../components/Modals/SellItemStepThree";

const MyStore = ({ handleStoreClose }) => {
  const [isProductOpen, setIsProductOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPModalOpen, setIsPModalOpen] = useState(false);
  const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false);

  const handleSellPreviewClick = () => {
    setIsPreviewModalOpen(true);
  };
  const handleCloseSellPreviewClick = () => {
    setIsPreviewModalOpen(false);
  };
  const handleSellContainerClick = () => {
    setIsPModalOpen(true);
  };
  const handleCloseSellContainerClick = () => {
    setIsPModalOpen(false);
  };

  const handleMainContainerClick = () => {
    setIsModalOpen(true);
  };
  const handleCloseMainContainerClick = () => {
    setIsModalOpen(false);
  };

  const handleProductClick = () => {
    setIsProductOpen(true);
  };
  const handleProductClose = () => {
    setIsProductOpen(false);
  };

  return (
    <>
      {isProductOpen && (
        <MyStoreDetail
          handleProductClose={handleProductClose}
          handleMainContainerClick={handleMainContainerClick}
        />
      )}
      {isModalOpen && (
        <div className="modal-full-container">
          <EditSellItem
            handleCloseMainContainerClick={handleCloseMainContainerClick}
            handleSellContainerClick={handleSellContainerClick}
          />
        </div>
      )}
      {isPModalOpen && (
        <div className="modal-full-container">
          <SellItemStepTwo
            handleCloseMainContainerClick={handleCloseSellContainerClick}
            handleSellPreviewClick={handleSellPreviewClick}
          />
        </div>
      )}
      {isPreviewModalOpen && (
        <div className="modal-full-container">
          <SellItemStepThree
            handleCloseMainContainerClick={handleCloseSellPreviewClick}
          />
        </div>
      )}
      {!isProductOpen && (
        <>
          <MyStoreSearchComp
            handleStoreClose={handleStoreClose}
            label={"My Store"}
          />
          <div className="all-row-cat-select">
            <CategoryMajorCard handleProductClick={handleProductClick} />
            <CategoryMajorCard handleProductClick={handleProductClick} />
            <CategoryMajorCard handleProductClick={handleProductClick} />
            <CategoryMajorCard handleProductClick={handleProductClick} />
            <CategoryMajorCard handleProductClick={handleProductClick} />
            <CategoryMajorCard handleProductClick={handleProductClick} />
            <CategoryMajorCard handleProductClick={handleProductClick} />
            <CategoryMajorCard handleProductClick={handleProductClick} />
          </div>
          <div className="prod-ads">
            <img src="images/ads5.png" alt="" />
          </div>
          <div className="all-row-cat-select">
            <CategoryMajorCard handleProductClick={handleProductClick} />
            <CategoryMajorCard handleProductClick={handleProductClick} />
            <CategoryMajorCard handleProductClick={handleProductClick} />
            <CategoryMajorCard handleProductClick={handleProductClick} />
            <CategoryMajorCard handleProductClick={handleProductClick} />
            <CategoryMajorCard handleProductClick={handleProductClick} />
            <CategoryMajorCard handleProductClick={handleProductClick} />
            <CategoryMajorCard handleProductClick={handleProductClick} />
          </div>{" "}
        </>
      )}
    </>
  );
};

export default MyStore;
