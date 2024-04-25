import React from "react";
import "../css/style.css";
function TeamSection() {
  return (
    <>
      <div className="untree_co-section">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-md-6 text-center">
              <h2 className="section-title mb-3 text-center">Team</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 mb-4">
              <div className="team">
                <img
                  src="images/person_1.jpg"
                  alt="Image"
                  className="img-fluid mb-4 rounded-20"
                />
                <div className="px-3">
                  <h3 className="mb-0">James Watson</h3>
                  <p>Co-Founder &amp; CEO</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 mb-4">
              <div className="team">
                <img
                  src="images/person_2.jpg"
                  alt="Image"
                  className="img-fluid mb-4 rounded-20"
                />
                <div className="px-3">
                  <h3 className="mb-0">Carl Anderson</h3>
                  <p>Co-Founder &amp; CEO</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 mb-4">
              <div className="team">
                <img
                  src="images/person_4.jpg"
                  alt="Image"
                  className="img-fluid mb-4 rounded-20"
                />
                <div className="px-3">
                  <h3 className="mb-0">Michelle Allison</h3>
                  <p>Co-Founder &amp; CEO</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 mb-4">
              <div className="team">
                <img
                  src="images/person_3.jpg"
                  alt="Image"
                  className="img-fluid mb-4 rounded-20"
                />
                <div className="px-3">
                  <h3 className="mb-0">Drew Wood</h3>
                  <p>Co-Founder &amp; CEO</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TeamSection;
