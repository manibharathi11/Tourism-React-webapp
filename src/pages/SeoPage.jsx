import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Image URL
const backgroundImageUrl =
  "https://cdn.pixabay.com/photo/2015/08/19/15/44/seo-896174_640.png";

function SeoPage() {
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
      'meta[name="primaryKeywords"]'
    );
    const secondaryKeywordsMeta = document.querySelector(
      'meta[name="secondaryKeywords"]'
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

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const metaDataRef = firebase.database().ref("metadata");

    metaDataRef
      .update({
        metaTitle: metaTitle,
        keywords: keywords,
        primaryKeywords: primaryKeywords,
        secondaryKeywords: secondaryKeywords,
      })
      .then(() => {
        setMessage3("Metadata updated successfully");
      })
      .catch((error) => {
        console.error("Error updating metadata:", error);
        setMessage3("Error updating metadata");
      });
  };

  return (
    <div
      style={{
        backgroundColor: "grey",
      }}
    >
      <Navbar />
      <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light ">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-5"></div>
          <h3 className="text-center p-2">Update SEO </h3>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title mb-4">Metadata details</h5>
                  <form onSubmit={handleFormSubmit}>
                    <div className="mb-3">
                      <label htmlFor="metaTitle" className="form-label">
                        Meta Title
                      </label>
                      <input
                        type="text"
                        id="metaTitle"
                        value={metaTitle}
                        onChange={(e) => setMetaTitle(e.target.value)}
                        className="form-control"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="keywords" className="form-label">
                        Keywords
                      </label>
                      <input
                        type="text"
                        id="keywords"
                        value={keywords}
                        onChange={(e) => setKeywords(e.target.value)}
                        className="form-control"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="primaryKeywords" className="form-label">
                        Primary Keywords
                      </label>
                      <input
                        type="text"
                        id="primaryKeywords"
                        value={primaryKeywords}
                        onChange={(e) => setPrimaryKeywords(e.target.value)}
                        className="form-control"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="secondaryKeywords" className="form-label">
                        Secondary Keywords
                      </label>
                      <input
                        type="text"
                        id="secondaryKeywords"
                        value={secondaryKeywords}
                        onChange={(e) => setSecondaryKeywords(e.target.value)}
                        className="form-control"
                      />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">
                      Submit
                    </button>
                  </form>
                  {message3 && <p className="mt-3 text-center">{message3}</p>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SeoPage;
