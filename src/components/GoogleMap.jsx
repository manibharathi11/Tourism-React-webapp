// src/GoogleMap.js
import React from "react";

const GoogleMap = () => {
  return (
    <div className="container my-5 bg-light p-5">
      <div className="row justify-content-center">
        <h2 className="text-center text-dark mb-4">Find us at</h2>
        <div className="col-12 col-md-8">
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.642815352144!2d80.21951977410022!3d12.801681518582837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52510b7ea14dbd%3A0x49b38c5db4767675!2sDataDNA!5e0!3m2!1sen!2sin!4v1719557166118!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoogleMap;
