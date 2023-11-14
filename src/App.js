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
import ProtectedRoute from "./ProtectedRoute";
import Privacy from "./pages/privacy/Privacy";
import AddBussProfile from "./pages/Profile/AddBussProfile";
import Education from "./pages/Education";
import Upload from "./pages/Upload";

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
      <Routes>
        <Route index path="/home" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/" element={<Landing />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        <Route path="/personaldetail" element={<PersonalDetails />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/chat" element={<ProtectedRoute element={<Chat />} />} />
        {/* <Route path="/chat" element={<Chat />} /> */}
        <Route path="/commerce" element={<Commerce />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/business" element={<BusinessDirectory />} />
        <Route path="/ticket" element={<Ticket />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="/addprofile" element={<AddProfile />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/stereo" element={<Stereo />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/bussprofile" element={<BusinessProfile />} />
        <Route path="/addbussprofile" element={<AddBussProfile />} />
        <Route path="/stereo/nonauth" element={<NonAuthStero />} />
        <Route path="/educate" element={<Education />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </div>
  );
}

export default App;
