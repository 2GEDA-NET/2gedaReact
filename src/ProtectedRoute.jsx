import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthCtx } from "./Context/AuthContext";

const ProtectedRoute = ({ element }) => {
  const { userAuth } = useContext(AuthCtx);

  if (!userAuth.token) {
    return <Navigate to="/signin" />;
  }
  return element;
};

export default ProtectedRoute;
