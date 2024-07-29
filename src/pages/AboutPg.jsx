import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import AboutSection from "../components/AboutSection";
import TeamSection from "../components/TeamSection";
import TestimonialsSection from "../components/TestimonialsSection";
import VideoSection from "../components/VideoSection";
import CtaSection from "../components/CtaSection";
import Footer from "../components/Footer";

import "../fonts/flaticon/font/flaticon.css";
import "../fonts/icomoon/style.css";
import "../css/bootstrap.min.css";
import "../css/style.css";
import "../css/daterangepicker.css";
import "../css/jquery.fancybox.min.css";
import "../css/aos.css";
import firebase from "firebase/compat/app";
import { useEffect, useState } from "react";

function AboutPg() {
  const [metaTitle, setMetaTitle] = useState("");
  const [keywords, setKeywords] = useState("");
  const [primaryKeywords, setPrimaryKeywords] = useState("");
  const [secondaryKeywords, setSecondaryKeywords] = useState("");
  const [message3, setMessage3] = useState("");

  useEffect(() => {
    const metaDataRef = firebase.database().ref("metadata");

    // Fetch metadata from the database
    metaDataRef
      .once("value")
      .then((snapshot) => {
        const metaData = snapshot.val();
        if (metaData) {
          setMetaTitle(metaData.metaTitle || "");
          setKeywords(metaData.keywords || "");
          setPrimaryKeywords(metaData.primaryKeywords || "");
          setSecondaryKeywords(metaData.secondaryKeywords || "");
        }
      })
      .catch((error) => {
        console.error("Error fetching metadata:", error);
      });
  }, []);
  useEffect(() => {
    document.title = metaTitle;

    const keywordsMeta = document.querySelector('meta[name="keywords"]');
    const primaryKeywordsMeta = document.querySelector(
      'meta[name="primary keywords"]'
    );
    const secondaryKeywordsMeta = document.querySelector(
      'meta[name="secondary keywords"]'
    );

    console.log(
      "Keywords meta content:",
      keywordsMeta ? keywordsMeta.content : null
    );
    console.log(
      "Primary keywords meta content:",
      primaryKeywordsMeta ? primaryKeywordsMeta.content : null
    );
    console.log(
      "Secondary keywords meta content:",
      secondaryKeywordsMeta ? secondaryKeywordsMeta.content : null
    );

    if (keywordsMeta) {
      keywordsMeta.setAttribute("content", keywords);
    }

    if (primaryKeywordsMeta) {
      primaryKeywordsMeta.setAttribute("content", primaryKeywords);
    }

    if (secondaryKeywordsMeta) {
      secondaryKeywordsMeta.setAttribute("content", secondaryKeywords);
    }
  }, [metaTitle, keywords, primaryKeywords, secondaryKeywords]);
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
