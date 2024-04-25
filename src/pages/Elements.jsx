import React from "react";
import Navbar from "../components/Navbar";
import ElementsInfo from "../components/ElementsInfo";
import Footer from "../components/Footer";
import CtaSection from "../components/CtaSection";
import TeamSection from "../components/TeamSection";
import PhotosSection from "../components/PhotosSection";
import Accordion from "../components/Accordion";
import "../css/bootstrap.min.css";
import "../fonts/flaticon/font/flaticon.css";
import "../fonts/icomoon/style.css";
import "../css/bootstrap.min.css";
import "../css/style.css";
import "../css/daterangepicker.css";
import "../css/jquery.fancybox.min.css";

import ElementContactForm from "../components/ElementContactForm";
import ElementGallery from "../components/ElementGallery";
function Elements() {
  return (
    <div>
      <Navbar />
      <ElementsInfo />
      <PhotosSection />
      <Accordion />
      <ElementGallery />
      <ElementContactForm />
      <TeamSection />
      <CtaSection />
      <Footer />
    </div>
  );
}

export default Elements;
