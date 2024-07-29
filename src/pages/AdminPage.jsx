import React from "react";
import AdminDashBoard from "../components/AdminDashBoard";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import AdminSec from "../components/AdminSec";

function AdminPage() {
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
    <>
      <Navbar />
      <AdminSec />
      {/* <OurServices /> */}
      <AdminDashBoard />
      <Footer />
    </>
  );
}

export default AdminPage;
