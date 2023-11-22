import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthCtx } from "./Context/AuthContext";

export const API_BASE_URL = "https://king-prawn-app-venn6.ondigitalocean.app";

const ProtectedRoute = ({ element }) => {
  const { userAuth } = useContext(AuthCtx);

  if (!userAuth.token) {
    return <Navigate to="/signin" />;
  }
  return element;
};

export default ProtectedRoute;
