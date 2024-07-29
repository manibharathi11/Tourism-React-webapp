import React, { useState, useEffect } from "react";
import "../css/style.css";
import firebase from "firebase/compat/app";
import "firebase/compat/database";

function HeroSection() {
  const [aboutContent, setAboutContent] = useState({
    title: "",
    content: "",
  });

  useEffect(() => {
    const fetchAboutContent = async () => {
      try {
        const snapshot = await firebase
          .database()
          .ref("About_section")
          .once("value");
        if (snapshot.exists()) {
          const data = snapshot.val();
          setAboutContent({
            title: data.title || "",
            content: data.Content || "",
          });
        } else {
          console.error("About section data not found in database");
        }
      } catch (error) {
        console.error("Error fetching About section data:", error);
      }
    };

    fetchAboutContent();
  }, []);

  return (
    <div>
      <div className="hero hero-inner" style={{ backgroundColor: "#6998ab" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mx-auto text-center">
              <div className="intro-wrap">
                <h1 className="mb-0">{aboutContent.title}</h1>
                <p className="text-white text-justify">
                  {aboutContent.content}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
