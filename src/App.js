import "bootstrap/dist/css/bootstrap.css";

import "aos/dist/aos.css";
import AboutPg from "./pages/AboutPg";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ServicePage from "./pages/ServicePage";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import Elements from "./pages/Elements";
import SignIn from "./pages/SignIn";
import Signup from "./pages/Signup";

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
        </Routes>
      </Router>
    </>
  );
}

export default App;
