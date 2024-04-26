import React from "react";
import ServiceInfo from "../components/ServiceInfo";
import Navbar from "../components/Navbar";
import Images from "../components/Images";
import ServiceText from "../components/ServiceText";
import MoreServices from "../components/MoreServices";
import CtaSection from "../components/CtaSection";
import Footer from "../components/Footer";

import "../css/bootstrap.min.css";
import "../fonts/flaticon/font/flaticon.css";
import "../fonts/icomoon/style.css";
import "../css/bootstrap.min.css";
import "../css/style.css";
import "../css/daterangepicker.css";
import "../css/jquery.fancybox.min.css";
import "../css/aos.css";

//import "../css/owl.carousel.min.css";
//import "../css/owl.theme.default.min.css";

function ServicePage() {
  return (
    <>
      <Navbar />
      <ServiceInfo />
      <Images />
      <ServiceText />
      <MoreServices />
      <CtaSection />
      <Footer />
    </>
  );
}

export default ServicePage;
