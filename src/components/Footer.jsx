import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/database"; // Import the Firebase database module

function Footer() {
  const [footerContent, setFooterContent] = useState({
    footer_title: "",
    footer_content: "",
  });
  const [footerResourceSection, setFooterResourceSection] = useState([]);
  const [footerContactSection, setFooterContactSection] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch Footer_section
        const footerSnapshot = await firebase
          .database()
          .ref("Footer_section")
          .once("value");
        if (footerSnapshot.exists()) {
          const footerData = footerSnapshot.val();
          setFooterContent(footerData);
        } else {
          console.error("Footer section data not found in database");
        }

        // Fetch Footer_resource_section
        const resourceSnapshot = await firebase
          .database()
          .ref("Footer_resource_section")
          .once("value");
        if (resourceSnapshot.exists()) {
          const resourceData = resourceSnapshot
            .val()
            .filter((item) => item !== null);
          setFooterResourceSection(resourceData);
        } else {
          console.error("Footer resource section data not found in database");
        }

        // Fetch Footer_contact_section
        const contactSnapshot = await firebase
          .database()
          .ref("Footer_contact_section")
          .once("value");
        if (contactSnapshot.exists()) {
          const contactData = contactSnapshot
            .val()
            .filter((item) => item !== null);
          setFooterContactSection(contactData);
        } else {
          console.error("Footer contact section data not found in database");
        }
      } catch (error) {
        console.error("Error fetching footer data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures useEffect runs only once

  return (
    <div className="site-footer">
      <div className="inner first">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <div className="widget">
                <h3 className="heading">{footerContent.footer_title}</h3>
                <p className="text-justify">{footerContent.footer_content}</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-2 pl-lg-5">
              <div className="widget">
                <h3 className="heading">Pages</h3>
                <ul className="links list-unstyled">
                  {footerResourceSection.map((item) => (
                    <li key={item.id}>
                      <a href="#">{item.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-2">
              <div className="widget">
                <h3 className="heading">Contacts</h3>
                <ul className="links list-unstyled">
                  {footerContactSection.map((item) => (
                    <li key={item.id}>
                      <div>
                        {item.mail && <a href="#">{item.mail}</a>}
                        {item.phno && <a href="#">{item.phno}</a>}
                        {item.st && <a href="#">{item.st}</a>}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="widget ">
                <ul className="list-unstyled social ">
                  <li>
                    <a href="#">
                      <span className="icon-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon-instagram" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon-youtube" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
