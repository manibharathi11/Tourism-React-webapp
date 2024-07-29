import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/database";

function ServiceText() {
  const [serviceTexts, setServiceTexts] = useState([]);

  useEffect(() => {
    const fetchServiceTexts = async () => {
      try {
        const snapshot = await firebase
          .database()
          .ref("Service_text")
          .once("value");
        if (snapshot.exists()) {
          const data = snapshot.val();
          // Filter out null entries
          const filteredData = data.filter((entry) => entry !== null);
          setServiceTexts(filteredData);
        } else {
          console.error("Service text data not found in database");
        }
      } catch (error) {
        console.error("Error fetching service text data:", error);
      }
    };

    fetchServiceTexts();
  }, []);

  return (
    <div className="untree_co-section">
      <div className="container">
        <div className="row">
          {serviceTexts.map((service) => (
            <div className="col-6 col-md-6 col-lg-3" key={service.id}>
              <div className="service text-center">
                <span className="icon-paper-plane" />
                <h3>{service.title}</h3>
                <p>{service.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServiceText;
