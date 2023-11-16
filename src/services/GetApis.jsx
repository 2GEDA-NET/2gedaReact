// api.js
import { useState, useEffect } from "react";
import { API_BASE_URL } from "../ProtectedRoute";
import { useNavigate } from "react-router-dom";

const useUserData = () => {
  const [userData, setUserData] = useState(null);
  const authToken = localStorage.getItem("authToken");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/userinfo/`, {
          headers: {
            Authorization: `Token ${authToken}`,
          },
        });

        if (response.status === 401) {
          // Redirect to signin page if status code is 401
          navigate("/signin");
          return;
        }
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, [authToken, navigate]);

  return userData;
};

export default useUserData;
