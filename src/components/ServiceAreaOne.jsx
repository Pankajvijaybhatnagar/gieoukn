import Link from "next/link";

const ServiceAreaOne = () => {
  return (
    <div className="service-area-1 space-top bg-smoke overflow-hidden">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="title-area text-center">
              <span className="sub-title">Our Initiatives</span>
              <h2 className="sec-title">
                Inspiring Spiritual Growth & Social Harmony
              </h2>
              <p>
                At GIEO GITA UK, we conduct meaningful activities that nurture values, promote unity, and uplift society — all rooted in the timeless wisdom of the Bhagwad Gita.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row gy-4 justify-content-center">
          
          {/* Spiritual Seminars */}
          <div className="col-lg-4 col-md-6">
            <div className="service-card">
              <div className="service-card_content">
                <div className="service-card_icon">
                  <img
                    src="assets/img/icon/service-icon_1-1.svg"
                    alt="Spiritual Seminars"
                  />
                </div>
                <h4 className="service-card_title h5">
                  <Link href="/service-details">Spiritual Seminars</Link>
                </h4>
                <p className="service-card_text">
                  Interactive sessions to explore the Bhagwad Gita’s wisdom, empowering people to lead balanced and purposeful lives.
                </p>
                <Link href="/service-details" className="link-btn">
                  Learn More <i className="fas fa-arrow-right" />
                </Link>
              </div>
              <div className="service-card_img">
                <img src="assets/img/service/spiritual-seminar.png" alt="Spiritual Seminars" />
              </div>
            </div>
          </div>

          {/* Gau Seva Program */}
          <div className="col-lg-4 col-md-6">
            <div className="service-card">
              <div className="service-card_content">
                <div className="service-card_icon">
                  <img
                    src="assets/img/icon/service-icon_1-2.svg"
                    alt="Gau Seva"
                  />
                </div>
                <h4 className="service-card_title h5">
                  <Link href="/service-details">Gau Seva Program</Link>
                </h4>
                <p className="service-card_text">
                  Promoting compassion through service to cows, preserving tradition, and supporting sustainable rural livelihoods.
                </p>
                <Link href="/service-details" className="link-btn">
                  Learn More <i className="fas fa-arrow-right" />
                </Link>
              </div>
              <div className="service-card_img">
                <img src="assets/img/service/gauseva.png" alt="Gau Seva" />
              </div>
            </div>
          </div>

          {/* Cultural Harmony Events */}
          <div className="col-lg-4 col-md-6">
            <div className="service-card">
              <div className="service-card_content">
                <div className="service-card_icon">
                  <img
                    src="assets/img/icon/service-icon_1-3.svg"
                    alt="Cultural Harmony"
                  />
                </div>
                <h4 className="service-card_title h5">
                  <Link href="/service-details">Cultural Harmony Events</Link>
                </h4>
                <p className="service-card_text">
                  Festivals, music, and arts that celebrate unity in diversity, fostering mutual respect among communities.
                </p>
                <Link href="/service-details" className="link-btn">
                  Learn More <i className="fas fa-arrow-right" />
                </Link>
              </div>
              <div className="service-card_img">
                <img src="assets/img/service/cultural-harmony.png" alt="Cultural Harmony" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ServiceAreaOne;
