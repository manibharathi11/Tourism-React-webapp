import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/database";

function ContactUs() {
  const [contactUsHeader, setContactUsHeader] = useState({
    title: "",
    content: "",
  });

  useEffect(() => {
    const fetchContactUsHeader = async () => {
      try {
        const snapshot = await firebase
          .database()
          .ref("Contact_us_header")
          .once("value");
        if (snapshot.exists()) {
          const data = snapshot.val();
          setContactUsHeader(data);
        } else {
          console.error("Contact us header not found in database");
        }
      } catch (error) {
        console.error("Error fetching contact us header:", error);
      }
    };

    fetchContactUsHeader();
  }, []);

  return (
    <div>
      <div className="hero hero-inner " style={{ backgroundColor: "#6998ab" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mx-auto text-center">
              <div className="intro-wrap">
                <h1 className="mb-0">{contactUsHeader.title}</h1>
                <p className="text-white text-justify">
                  {contactUsHeader.content}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
