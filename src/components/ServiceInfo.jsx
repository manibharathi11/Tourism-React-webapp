import React from "react";
import { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
function ServiceInfo() {
  const [typedContent, setTypedContent] = useState({
    title: "",
    content: "",
  });

  useEffect(() => {
    const fetchTypedContent = async () => {
      try {
        const snapshot = await firebase
          .database()
          .ref("Service_info")
          .once("value");
        if (snapshot.exists()) {
          const data = snapshot.val();
          setTypedContent(data);
        } else {
          console.error("service info data not found in database");
        }
      } catch (error) {
        console.error("Error fetching service info data:", error);
      }
    };

    fetchTypedContent();
  }, []);

  return (
    <>
      <div className="hero hero-inner " style={{ backgroundColor: "#6998ab" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mx-auto text-center">
              <div className="intro-wrap">
                <h1 className="mb-0">{typedContent.title}</h1>
                <p className="text-white text-justify">
                  {typedContent.content}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServiceInfo;
