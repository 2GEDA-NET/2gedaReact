import { Routes, Route, useLocation } from "react-router-dom";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Landing from "./pages/LandingPage";
import Signin from "./pages/Signin";
import Verify from "./pages/Verify";
import ForgotPassword from "./pages/ForgotPassword";
import PersonalDetails from "./pages/PersonalDetails";
import SearchPage from "./pages/SearchPage";
import Chat from "./pages/Chat";
import { useEffect } from "react";
import Commerce from "./pages/Commerce";
import CategoryPage from "./pages/Commerce/Category";
import BusinessDirectory from "./pages/BussinessDirectory";
import Ticket from "./pages/Ticket";
import Profile from "./pages/Profile";
import BusinessProfile from "./pages/BusinessProfile";
import Connect from "./pages/Connect";
import Stereo from "./pages/Stereo";
import NonAuthStero from "./pages/Stereo/NonAuthStero";
import AddProfile from "./pages/Profile/AddProfile";
import EditProfile from "./components/Modals/EditProfile";
// import { AuthProvider } from "./Context/AuthContext";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      {/* <AuthProvider> */}
      <Routes>
        {/* <Route index path="/" element={<Home />} /> */}
        <Route index path="/" element={<Home />} />
        <Route index path="/signup" element={<Signup />} />
        <Route index path="/signin" element={<Signin />} />
        <Route index path="/landing" element={<Landing />} />
        <Route index path="/verify" element={<Verify />} />
        <Route index path="/forgot" element={<ForgotPassword />} />
        <Route index path="/personaldetail" element={<PersonalDetails />} />
        <Route index path="/search" element={<SearchPage />} />
        <Route index path="/chat" element={<Chat />} />
        <Route index path="/commerce" element={<Commerce />} />
        <Route index path="/category" element={<CategoryPage />} />
        <Route index path="/business" element={<BusinessDirectory />} />
        <Route index path="/ticket" element={<Ticket />} />
        <Route index path="/connect" element={<Connect />} />
        <Route index path="/addprofile" element={<AddProfile />} />
        <Route index path="/EditProfile" element={<EditProfile />} />
        <Route index path="/profile" element={<Profile />} />
        <Route index path="/stereo" element={<Stereo />} />
        <Route index path="/bussprofile" element={<BusinessProfile />} />
        <Route index path="/stereo/nonauth" element={<NonAuthStero />} />
      </Routes>
      {/* </AuthProvider> */}
    </div>
  );
}

export default App;
