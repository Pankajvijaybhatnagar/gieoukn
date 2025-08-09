import Link from "next/link";

const AboutThree = () => {
  return (
    <div className="about-area-1 space">
      {/* <div className="about1-shape-img shape-mockup">
        <img
          className="about1-shape-img-1 spin"
          src="assets/img/normal/about_shape1-2.svg"
          alt="GIEO GITA UK"
        />
        <img
          className="about1-shape-img-2 spin2"
          src="assets/img/normal/about_shape1-1.svg"
          alt="GIEO GITA UK"
        />
      </div> */}
      <div className="container">
        <div className="row gx-60 align-items-center flex-row-reverse">
          <div className="col-xl-7 text-xl-center">
            <div className="about-thumb3 mb-40 mb-xl-0">
              <div className="about-img-1">
                <img src="assets/img/normal/wcu-3.png" alt="GIEO GITA UK" />
              </div>
            </div>
          </div>
          <div className="col-xl-5">
            <div className="about-content-wrap">
              <div className="title-area me-xl-5 mb-30">
                <span className="sub-title">Know About Us</span>
                <h2 className="sec-title">Our Mission & Values</h2>
                <p className="sec-text">
                  GIEO GITA UK is dedicated to spreading the timeless wisdom of the Bhagwad Gita, promoting religious unity, universal brotherhood, and the welfare of all. We connect like-minded individuals worldwide to foster harmony, cultural understanding, and spiritual growth.
                </p>
              </div>
              <div className="row gy-4 justify-content-md-between justify-content-end align-items-center flex-row-reverse">
                <div className="col-md-auto">
                  <div className="checklist style2">
                    <ul>
                      <li>
                        <i className="fas fa-check-double" />
                        Promoting Religious Unity
                      </li>
                      <li>
                        <i className="fas fa-check-double" />
                        Encouraging Universal Brotherhood
                      </li>
                      <li>
                        <i className="fas fa-check-double" />
                        Inspiring Spiritual Growth
                      </li>
                      <li>
                        <i className="fas fa-check-double" />
                        Organising Cultural Festivals
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-auto col-lg-6">
                  <div className="checklist style2">
                    <ul>
                      <li>
                        <i className="fas fa-check-double" />
                        Educational & Social Welfare Programs
                      </li>
                      <li>
                        <i className="fas fa-check-double" />
                        Connecting Global Communities
                      </li>
                      <li>
                        <i className="fas fa-check-double" />
                        Preserving Cultural Heritage
                      </li>
                      <li>
                        <i className="fas fa-check-double" />
                        Inspiring Future Generations
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="btn-wrap mt-40">
                <Link href="/about" className="btn style2">
                  Read More <i className="fas fa-arrow-right ms-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutThree;
