import AboutPg from "./pages/AboutPg";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ServicePage from "./pages/ServicePage";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import Elements from "./pages/Elements";
import SignIn from "./pages/SignIn";
import Signup from "./pages/Signup";
import ProfilePage from "./pages/ProfilePage";
import AdminPage from "./pages/AdminPage";
import SeoPage from "./pages/SeoPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPg />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/element" element={<Elements />} />
          <Route path="/profile" element={<ProfilePage />} />

          <Route path="/admin" element={<AdminPage />} />
          <Route path="/seo" element={<SeoPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
