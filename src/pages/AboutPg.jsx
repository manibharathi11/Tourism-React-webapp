import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import AboutSection from "../components/AboutSection";
import TeamSection from "../components/TeamSection";
import TestimonialsSection from "../components/TestimonialsSection";
import VideoSection from "../components/VideoSection";
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

function AboutPg() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TeamSection />
      <TestimonialsSection />
      <VideoSection />
      <CtaSection />
      <Footer />
    </>
  );
}

export default AboutPg;
