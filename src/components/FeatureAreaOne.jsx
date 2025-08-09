import React from "react";

const FeatureAreaOne = () => {
  return (
    <div className="feature-area-1">
      <div className="container">
        <div className="row gy-4 justify-content-center">
          <div className="col-xl-4">
            <div className="single-feature-wrap">
              <div className="thumb">
                <img src="assets/img/intro/01.png" alt="GIEO GITA UK" />
              </div>
              <div className="media-body">
                <h4>Promoting Religious Unity</h4>
                <p>Encouraging harmony and understanding among diverse faiths through the wisdom </p>
              </div>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="single-feature-wrap">
              <div className="thumb">
                <img src="assets/img/intro/02.png" alt="GIEO GITA UK" />
              </div>
              <div className="media-body">
                <h4>Universal Brotherhood</h4>
                <p>Bringing people together from all walks of life to foster love, respect, and compassion.</p>
              </div>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="single-feature-wrap">
              <div className="thumb">
                <img src="assets/img/intro/03.png" alt="GIEO GITA UK" />
              </div>
              <div className="media-body">
                <h4>Community Welfare</h4>
                <p>Working towards social upliftment and well-being through cultural, educational, and service initiatives.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureAreaOne;
