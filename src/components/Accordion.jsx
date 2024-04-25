import React from "react";

function Accordion() {
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-lg-4">
          <div className="custom-block" /*data-aos="fade-up"*/>
            <h2 className="section-title">Accordion</h2>
            <div className="custom-accordion" id="accordion_1">
              <div className="accordion-item">
                <h2 className="mb-0">
                  <button
                    className="btn btn-link"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    How to download and register?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="collapse show"
                  aria-labelledby="headingOne"
                  data-parent="#accordion_1"
                >
                  <div className="accordion-body">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live in Bookmarksgrove right at the
                    coast of the Semantics, a large language ocean.
                  </div>
                </div>
              </div>{" "}
              {/* .accordion-item */}
              <div className="accordion-item">
                <h2 className="mb-0">
                  <button
                    className="btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    How to create your paypal account?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="collapse"
                  aria-labelledby="headingTwo"
                  data-parent="#accordion_1"
                >
                  <div className="accordion-body">
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia. It is a paradisematic
                    country, in which roasted parts of sentences fly into your
                    mouth.
                  </div>
                </div>
              </div>{" "}
              {/* .accordion-item */}
              <div className="accordion-item">
                <h2 className="mb-0">
                  <button
                    className="btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    How to link your paypal and bank account?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="collapse"
                  aria-labelledby="headingThree"
                  data-parent="#accordion_1"
                >
                  <div className="accordion-body">
                    When she reached the first hills of the Italic Mountains,
                    she had a last view back on the skyline of her hometown
                    Bookmarksgrove, the headline of Alphabet Village and the
                    subline of her own road, the Line Lane. Pityful a rethoric
                    question ran over her cheek, then she continued her way.
                  </div>
                </div>
              </div>{" "}
              {/* .accordion-item */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accordion;
