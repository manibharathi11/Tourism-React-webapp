import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProfileForm from "../components/ProfileForm";
import HeroSection from "../components/HeroSection";
import firebase from "firebase/compat/app";
import { useEffect, useState } from "react";

function ProfilePage() {
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
      <ProfileForm />
      {/* <SpecialOffer /> */}
      <Footer />
    </>
  );
}

export default ProfilePage;
