import { createContext, useState } from "react";

const authToken = localStorage.getItem("authToken");

export const AuthCtx = createContext();

export const AuthProvider = ({ children }) => {
  const [userAuth, setUserAuth] = useState({
    token: { authToken },
  });

  const value = { userAuth, setUserAuth };
  return <AuthCtx.Provider value={value}>{children}</AuthCtx.Provider>;
};
