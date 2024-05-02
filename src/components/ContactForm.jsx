import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "firebase/compat/auth";
function ContactForm() {
  const firebaseConfig = {
    apiKey: "AIzaSyBwCBvpBNEM0jkmHyXGMQAVbcIMoEzoaIs",
    authDomain: "travelagency-fd43c.firebaseapp.com",
    databaseURL: "https://travelagency-fd43c-default-rtdb.firebaseio.com",
    projectId: "travelagency-fd43c",
    storageBucket: "travelagency-fd43c.appspot.com",
    messagingSenderId: "623552649388",
    appId: "1:623552649388:web:f6f97e6f27915eb9eae709",
    measurementId: "G-CEY38LTBFJ",
  };
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  const [name, setName] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");

  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [latestId, setLatestId] = useState(0);

  useEffect(() => {
    const fetchLatestId = async () => {
      try {
        const snapshot = await firebase
          .database()
          .ref("ContactForm")
          .orderByChild("Contact_id")
          .limitToLast(1)
          .once("value");
        if (snapshot.exists()) {
          const latestEntry = snapshot.val();
          const latestIdValue = Object.values(latestEntry)[0].Contact_id;
          setLatestId(latestIdValue);
        } else {
          setLatestId(0);
        }
      } catch (error) {
        console.error("Error fetching latest ID:", error);
      }
    };

    fetchLatestId();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const db = firebase.database();

    try {
      console.log("Latest ID:", latestId);
      const newId = latestId + 1;
      console.log("New ID:", newId);
      // Push form data to the database
      await db.ref("ContactForm").push({
        Contact_id: newId,
        Contact_name: name,
        Contact_lname: lname,
        Contact_email: email,

        Contact_message: message,
      });

      // Clear form fields and set success message
      setName("");
      setLname("");
      setEmail("");

      setMessage("");
      setSuccessMessage("Message sent successfully!");
      setErrorMessage("");
    } catch (error) {
      console.error("Error storing form data:", error);
      setSuccessMessage("");
      setErrorMessage("Failed to send message. Please try again.");
    }
  };

  return (
    <>
      <div className="untree_co-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <form
                onSubmit={handleSubmit}
                className="contact-form"
                // data-aos="fade-up"
                data-aos-delay={200}
              >
                <div className="row">
                  <div className="col-6">
                    <div className="form-group">
                      <label className="text-black" htmlFor="fname">
                        First name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="fname"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group">
                      <label className="text-black" htmlFor="lname">
                        Last name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="lname"
                        value={lname}
                        onChange={(event) => setLname(event.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label className="text-black" htmlFor="email">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label className="text-black" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    name=""
                    className="form-control"
                    id="message"
                    cols={30}
                    rows={5}
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
                {successMessage && (
                  <div className="alert alert-success">{successMessage}</div>
                )}
                {errorMessage && (
                  <div className="alert alert-danger">{errorMessage}</div>
                )}
              </form>
            </div>
            <div className="col-lg-5 ml-auto">
              <div className="quick-contact-item d-flex align-items-center mb-4">
                <span className="flaticon-house" />
                <address className="text">
                  155 Market St #101, Paterson, NJ 07505, United States
                </address>
              </div>
              <div className="quick-contact-item d-flex align-items-center mb-4">
                <span className="flaticon-phone-call" />
                <address className="text">+1 202 2020 200</address>
              </div>
              <div className="quick-contact-item d-flex align-items-center mb-4">
                <span className="flaticon-mail" />
                <address className="text">@info@mydomain.com</address>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactForm;
