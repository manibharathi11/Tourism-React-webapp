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
  // useEffect(() => {
  //   const metaDataRef = firebase.database().ref("metadata");

  //   // Fetch metadata from the database
  //   metaDataRef
  //     .once("value")
  //     .then((snapshot) => {
  //       const metaData = snapshot.val();
  //       if (metaData) {
  //         setMetaTitle(metaData.metaTitle || "");
  //         setKeywords(metaData.keywords || "");
  //         setPrimaryKeywords(metaData.primaryKeywords || "");
  //         setSecondaryKeywords(metaData.secondaryKeywords || "");
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching metadata:", error);
  //     });
  // }, []);
  // useEffect(() => {
  //   document.title = metaTitle;

  //   const keywordsMeta = document.querySelector('meta[name="keywords"]');
  //   const primaryKeywordsMeta = document.querySelector(
  //     'meta[name="primary keywords"]'
  //   );
  //   const secondaryKeywordsMeta = document.querySelector(
  //     'meta[name="secondary keywords"]'
  //   );

  //   console.log(
  //     "Keywords meta content:",
  //     keywordsMeta ? keywordsMeta.content : null
  //   );
  //   console.log(
  //     "Primary keywords meta content:",
  //     primaryKeywordsMeta ? primaryKeywordsMeta.content : null
  //   );
  //   console.log(
  //     "Secondary keywords meta content:",
  //     secondaryKeywordsMeta ? secondaryKeywordsMeta.content : null
  //   );

  //   if (keywordsMeta) {
  //     keywordsMeta.setAttribute("content", keywords);
  //   }

  //   if (primaryKeywordsMeta) {
  //     primaryKeywordsMeta.setAttribute("content", primaryKeywords);
  //   }

  //   if (secondaryKeywordsMeta) {
  //     secondaryKeywordsMeta.setAttribute("content", secondaryKeywords);
  //   }
  // }, [metaTitle, keywords, primaryKeywords, secondaryKeywords]);
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
