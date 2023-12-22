import "./style.css";
import SmallTicketCard from "../Dashboard/smallTicket";
import SmallTicketPromoteCard from "../Dashboard/smallTicketsPromoted";
import { url } from "../../utils";
import { useState, useEffect } from "react";

const PromoteTicket = ({
  handleContainerClick,
  handleEventDetailContainerClick,
}) => {
  const [responseData, setResponseData] = useState([]);
  const [isLoading, setIsloading] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("authTOken");
    console.log(`Token ${token}`);
    const makeRequest = async () => {
      try {
        const response = await fetch(`${url}/ticket/event-past/`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
          },
        });

        if (!response.ok) {
          console.log("Response not ok");
        }

        const responseBody = await response.json();
        console.log(responseBody);
        setResponseData(responseBody);
        console.log("response data", responseData);
        // Move setIsLoading inside the try block if you want it to be set only on success
        setIsloading(true);

        // Check if responseData is not null before mapping
      } catch (error) {
        console.log(error);
      } finally {
        console.log("We goood");
      }
    };

    // Call the async function
    makeRequest();
  }, []);

  return (
    <div className="trending-product-container">
      <div className="view-all-tic-bx">
        <div className="product-ind">Promoted events</div>
        <div className="view-ll" onClick={handleContainerClick}>
          View all
        </div>
      </div>
      <div className="product-card-row">
        {responseData !== null && responseData.length > 0 ? (
          responseData.map((item, index) => (
            <SmallTicketPromoteCard
              key={index} // Add a unique key for each item in the map function
              description={item.desc}
              eventId = {item.id}
              formatedDate={item.formated_date}
              location={item.location}
              eventImage={item.image}
              handleEventDetailContainerClick={handleEventDetailContainerClick}
            />
          ))
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
};

export default PromoteTicket;
