import React, { useEffect, useState } from "react";
import firebase from "firebase/compat/app";

function MoreServices() {
  const [moreServiceContent, setMoreServiceContent] = useState({
    title: "",
    description: "",
    services: {},
  });

  useEffect(() => {
    const fetchMoreServiceContent = async () => {
      try {
        const snapshot = await firebase
          .database()
          .ref("Our_service")
          .once("value");
        if (snapshot.exists()) {
          const data = snapshot.val();
          const { title, description, ...services } = data;

          setMoreServiceContent({
            title: title || "",
            description: description || "",
            services: services || {},
          });
        } else {
          console.error("More service section content not found in database");
        }
      } catch (error) {
        console.error("Error fetching about section content:", error);
      }
    };

    fetchMoreServiceContent();
  }, []);

  return (
    <div className="untree_co-section">
      <div className="container">
        <div className="row mb-5 justify-content-center">
          <div className="col-lg-6 text-center">
            <h2 className="section-title text-center mb-3">
              {moreServiceContent.title}
            </h2>
            <p className="text-justify">{moreServiceContent.description}</p>
          </div>
        </div>
        <div className="row align-items-stretch">
          <div className="col-lg-4 order-lg-1">
            <div className="h-100">
              <div className="frame h-100">
                {/* <div
                  className="feature-img-bg h-100"
                  style={{
                    backgroundImage: 'url("images/hero-slider-1.jpg")',
                  }}
                /> */}
              </div>
            </div>
          </div>
          <div className="row align-items-stretch">
            {Object.keys(moreServiceContent.services)
              .slice(0, 3) // Select only the first 3 services
              .map((serviceId) => {
                const service = moreServiceContent.services[serviceId];
                return (
                  <div key={serviceId} className="col-lg-4">
                    <div className="feature-1">
                      <div className="align-self-center">
                        {/* Icon */}
                        {service.Service_id === 1 && (
                          <span className="flaticon-house display-4 text-primary" />
                        )}
                        {service.Service_id === 2 && (
                          <span className="flaticon-mail display-4 text-primary" />
                        )}
                        {service.Service_id === 3 && (
                          <span className="flaticon-restaurant display-4 text-primary" />
                        )}
                        {/* Title */}
                        <h3>{service.Service_title}</h3>
                        <p className="text-justify">
                          {service.Service_description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoreServices;
