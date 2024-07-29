import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "firebase/compat/auth";
import "../css/bootstrap.min.css";
import "../css/style.css";

function ProfileForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const currentUser = firebase.auth().currentUser;
    if (currentUser) {
      const userId = currentUser.uid;
      const userRef = firebase.database().ref("users/" + userId);

      userRef.once(
        "value",
        (snapshot) => {
          const userData = snapshot.val();
          if (userData) {
            setFirstName(userData.firstName || "");
            setLastName(userData.lastName || "");
            setEmail(userData.email || "");
            setAge(userData.age || "");
            setPhoneNumber(userData.phoneNumber || "");
            setGender(userData.gender || "");
            setLocation(userData.location || "");
          } else {
            setMessage("User data not found");
          }
        },
        (error) => {
          console.error("Error fetching user data:", error);
          setMessage("Error fetching user data");
        }
      );
    } else {
      setMessage("User not authenticated");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "profileFormData",
      JSON.stringify({
        firstName,
        lastName,
        email,
        age,
        phoneNumber,
        gender,
        location,
      })
    );
  }, [firstName, lastName, email, age, phoneNumber, gender, location]);

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const userId = firebase.auth().currentUser.uid;
    const userRef = firebase.database().ref("users/" + userId);

    userRef
      .update({
        firstName,
        lastName,
        email,
        age,
        phoneNumber,
        gender,
        location,
      })
      .then(() => {
        setMessage("Profile updated successfully");
      })
      .catch((error) => {
        console.error("Error updating profile:", error);
        setMessage("Error updating profile");
      });
  };

  return (
    <section className="ftco-section">
      <div className="container">
        <div className="row justify-content-center mb-5 pb-5">
          <div className="col-md-7 text-center heading-section ftco-animate"></div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-7">
            <div className="card">
              <h2 className=" p-4">My Profile</h2>
              <div className="card-body">
                <form onSubmit={handleUpdateProfile}>
                  <div className="mb-3">
                    <label htmlFor="firstName" className="form-label">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                  <div className="form-group1">
                    <label htmlFor="lastName">Last Name:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                  <div className="form-group1">
                    <label htmlFor="email">Email:</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group1">
                    <label htmlFor="age">Age:</label>
                    <input
                      type="number"
                      className="form-control"
                      id="age"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                    />
                  </div>
                  <div className="form-group1">
                    <label htmlFor="phoneNumber">Phone Number:</label>
                    <input
                      type="tel"
                      className="form-control"
                      id="phoneNumber"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </div>
                  <div className="form-group1">
                    <label>Gender:</label>
                    <div className="radio-container">
                      <input
                        type="radio"
                        id="male"
                        name="gender"
                        value="male"
                        checked={gender === "male"}
                        onChange={(e) => setGender(e.target.value)}
                      />
                      <label htmlFor="male" className="radio-label">
                        Male
                      </label>
                    </div>
                    <div className="radio-container">
                      <input
                        type="radio"
                        id="female"
                        name="gender"
                        value="female"
                        checked={gender === "female"}
                        onChange={(e) => setGender(e.target.value)}
                      />
                      <label htmlFor="female" className="radio-label">
                        Female
                      </label>
                    </div>
                  </div>
                  <div className="form-group1 mb-5">
                    <label htmlFor="location">Location:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="location"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    />
                  </div>
                  <div>
                    <button type="submit" className="btn btn-primary">
                      Update Profile
                    </button>
                  </div>
                  <p>{message}</p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfileForm;
