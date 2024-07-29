import React from "react";
import "../css/style.css";
import { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
function CtaSection() {
  const [ctaContent, setCtaContent] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    const fetchCtaContent = async () => {
      try {
        const snapshot = await firebase
          .database()
          .ref("Cta_section")
          .once("value");
        if (snapshot.exists()) {
          const data = snapshot.val();

          const { cta_title, content } = data;

          setCtaContent({
            title: cta_title || "",
            description: content || "",
          });
        } else {
          console.error("About section content not found in database");
        }
      } catch (error) {
        console.error("Error fetching about section content:", error);
      }
    };

    fetchCtaContent();
  }, []);
  return (
    <>
      <div className="py-5 cta-section" style={{ backgroundColor: "#6998ab" }}>
        <div className="container">
          <div className="row text-center">
            <div className="col-md-12">
              <h2 className="mb-2 text-white">{ctaContent.title}</h2>
              <p className="mb-4 lead text-white  ">{ctaContent.description}</p>
              <p className="mb-0">
                <a
                  href="booking.html"
                  className="btn btn-outline-white text-white btn-md font-weight-bold"
                >
                  Get in touch
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CtaSection;
