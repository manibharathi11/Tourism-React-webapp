import React from "react";
import "../css/bootstrap.min.css";
import "../fonts/flaticon/font/flaticon.css";
import "../fonts/icomoon/style.css";
import "../css/style.css";
import "../css/daterangepicker.css";
import "../css/jquery.fancybox.min.css";
//import "../css/aos.css";
import Navbar from "../components/Navbar";
import ContactUs from "../components/ContactUs";
import ContactForm from "../components/ContactForm";
import TestimonialsSection from "../components/TestimonialsSection";
import Footer from "../components/Footer";

function ContactPage() {
  return (
    <div>
      <Navbar />
      <ContactUs />
      <ContactForm />

      <TestimonialsSection />
      <Footer />
    </div>
  );
}

export default ContactPage;
