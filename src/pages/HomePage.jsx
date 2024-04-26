import React from "react";
import Navbar from "../components/Navbar";
import "../css/bootstrap.min.css";
import "../fonts/flaticon/font/flaticon.css";
import "../fonts/icomoon/style.css";
import "../css/bootstrap.min.css";
import "../css/style.css";
import "../css/daterangepicker.css";
import "../css/jquery.fancybox.min.css";
import "../css/aos.css";
import "react-typewriter-effect";
import ReactOwlCarousel from "react-owl-carousel";
import TypedEffect from "../components/TypedEffect";
import OurServices from "../components/OurServices";
import ServicesHome from "../components/ServicesHome";
import CtaSection from "../components/CtaSection";
import Footer from "../components/Footer";
import VideoSection from "../components/VideoSection";
import TestimonialsSection from "../components/TestimonialsSection";
import SpecialOffer from "../components/SpecialOffer";
import PopularDestination from "../components/PopularDestination";
import StatsInfo from "../components/StatsInfo";

function HomePage() {
  return (
    <>
      <Navbar />
      <TypedEffect />
      <OurServices />
      <ServicesHome />
      <StatsInfo />
      <PopularDestination />
      <TestimonialsSection />
      <SpecialOffer />
      <VideoSection />
      <CtaSection />
      <Footer />
    </>
  );
}

export default HomePage;
