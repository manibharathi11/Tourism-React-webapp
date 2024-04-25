import React from "react";

function ElementGallery() {
  return (
    <div>
      <>
        <div className="custom-block">
          <h2 className="section-title">Gallery</h2>
          <div className="row gutter-v2 gallery">
            <div className="col-4">
              <a
                href="images/gal_1.jpg"
                className="gal-item"
                data-fancybox="gal"
              >
                <img src="images/gal_1.jpg" alt="Image" className="img-fluid" />
              </a>
            </div>
            <div className="col-4">
              <a
                href="images/gal_2.jpg"
                className="gal-item"
                data-fancybox="gal"
              >
                <img src="images/gal_2.jpg" alt="Image" className="img-fluid" />
              </a>
            </div>
            <div className="col-4">
              <a
                href="images/gal_3.jpg"
                className="gal-item"
                data-fancybox="gal"
              >
                <img src="images/gal_3.jpg" alt="Image" className="img-fluid" />
              </a>
            </div>
            <div className="col-4">
              <a
                href="images/gal_4.jpg"
                className="gal-item"
                data-fancybox="gal"
              >
                <img src="images/gal_4.jpg" alt="Image" className="img-fluid" />
              </a>
            </div>
            <div className="col-4">
              <a
                href="images/gal_5.jpg"
                className="gal-item"
                data-fancybox="gal"
              >
                <img src="images/gal_5.jpg" alt="Image" className="img-fluid" />
              </a>
            </div>
            <div className="col-4">
              <a
                href="images/gal_6.jpg"
                className="gal-item"
                data-fancybox="gal"
              >
                <img src="images/gal_6.jpg" alt="Image" className="img-fluid" />
              </a>
            </div>
          </div>
        </div>
        <>
          <div className="custom-block">
            <h2 className="section-title">Video</h2>
            <a
              href="https://vimeo.com/342333493"
              data-fancybox=""
              className="video-wrap"
            >
              <span className="play-wrap">
                <span className="icon-play" />
              </span>
              <img
                src="images/bg_1.jpg"
                alt="Image"
                className="img-fluid rounded"
              />
            </a>
          </div>
        </>
      </>
    </div>
  );
}

export default ElementGallery;
