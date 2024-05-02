import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProfileForm from "../components/ProfileForm";
import SpecialOffer from "../components/SpecialOffer";

function ProfilePage() {
  return (
    <>
      <ProfileForm />
      <SpecialOffer />
      <Footer />
    </>
  );
}

export default ProfilePage;
