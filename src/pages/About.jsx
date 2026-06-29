import React, { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    // Initialize AOS animations
    if (window.AOS) {
      window.AOS.init({
        duration: 600,
        easing: 'ease-in-out',
        once: true,
      });
      window.AOS.refresh();
    }

    // Initialize PureCounter for stats
    if (window.PureCounter) {
      try {
        new window.PureCounter();
      } catch (e) {
        console.error("Failed to initialize PureCounter:", e);
      }
    }
  }, []);

  return (
    <>
      {/* Page Title */}
      <div className="page-title" data-aos="fade">
        <div className="heading">
          <div className="container">
            <div className="row d-flex justify-content-center text-center">
              <div className="col-lg-8">
                <h1>About Us</h1>
                <p className="mb-0">
                  EstateAgency is one of India's leading real estate platforms, trusted by thousands of homeowners and investors. We leverage creative strategies and local market insights to deliver premium property solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
        <nav className="breadcrumbs">
          <div className="container">
            <ol>
              <li><a href="#home">Home</a></li>
              <li className="current">About</li>
            </ol>
          </div>
        </nav>
      </div>

      {/* About Section */}
      <section id="about" className="about section">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-6 content" data-aos="fade-up" data-aos-delay="100">
              <p className="who-we-are">Who We Are</p>
              <h3>Unleashing Potential with Creative Strategy</h3>
              <p className="fst-italic">
                Providing trustworthy, seamless, and customer-centric property services across Kerala and major metropolitan areas in India.
              </p>
              <ul>
                <li><i className="bi bi-check-circle"></i> <span>Comprehensive buying, selling, and rental support matching local legal standards.</span></li>
                <li><i className="bi bi-check-circle"></i> <span>Transparent transaction handling with zero hidden charges or unexpected agency fees.</span></li>
                <li><i className="bi bi-check-circle"></i> <span>Custom financial consultation to help choose properties with high future growth potential.</span></li>
              </ul>
            </div>

            <div className="col-lg-6 about-images" data-aos="fade-up" data-aos-delay="200">
              <div className="row gy-4">
                <div className="col-lg-6">
                  <img src="/assets/img/about-company-1.jpg" className="img-fluid rounded" alt="Company meeting" />
                </div>
                <div className="col-lg-6">
                  <div className="row gy-4">
                    <div className="col-lg-12">
                      <img src="/assets/img/about-company-2.jpg" className="img-fluid rounded" alt="Modern room" />
                    </div>
                    <div className="col-lg-12">
                      <img src="/assets/img/about-company-3.jpg" className="img-fluid rounded" alt="Property keys" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="stats section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
            <div className="col-lg-3 col-md-6">
              <div className="stats-item d-flex align-items-center w-100 h-100">
                <i className="bi bi-emoji-smile color-blue flex-shrink-0"></i>
                <div>
                  <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1.5" className="purecounter">0</span>
                  <p>Happy Clients</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="stats-item d-flex align-items-center w-100 h-100">
                <i className="bi bi-journal-richtext color-orange flex-shrink-0"></i>
                <div>
                  <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1.5" className="purecounter">0</span>
                  <p>Properties Managed</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="stats-item d-flex align-items-center w-100 h-100">
                <i className="bi bi-headset color-green flex-shrink-0"></i>
                <div>
                  <span data-purecounter-start="0" data-purecounter-end="1463" data-purecounter-duration="1.5" className="purecounter">0</span>
                  <p>Hours Of Support</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="stats-item d-flex align-items-center w-100 h-100">
                <i className="bi bi-people color-pink flex-shrink-0"></i>
                <div>
                  <span data-purecounter-start="0" data-purecounter-end="15" data-purecounter-duration="1.5" className="purecounter">0</span>
                  <p>Hard Workers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features section">
        <div className="container">
          <div className="row justify-content-around gy-4">
            <div className="features-image col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <img src="/assets/img/features-bg.jpg" className="img-fluid rounded" alt="Modern building" />
            </div>

            <div className="col-lg-5 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
              <h3>Why Choose Us for Your Real Estate Journey?</h3>
              <p>
                We stand out by maintaining legal integrity, focusing on client satisfaction, and offering deep market analytical assessments.
              </p>

              <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="300">
                <i className="bi bi-easel flex-shrink-0"></i>
                <div>
                  <h4><a href="#features" className="stretched-link" onClick={(e) => e.preventDefault()}>Wide Local Network</a></h4>
                  <p>Access to premier residential and commercial properties in premium localities before they hit public listings.</p>
                </div>
              </div>

              <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="400">
                <i className="bi bi-patch-check flex-shrink-0"></i>
                <div>
                  <h4><a href="#features" className="stretched-link" onClick={(e) => e.preventDefault()}>Verified Documentation</a></h4>
                  <p>Every listing undergoes structural safety vetting and rigorous property title deed screening for peace of mind.</p>
                </div>
              </div>

              <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="500">
                <i className="bi bi-brightness-high flex-shrink-0"></i>
                <div>
                  <h4><a href="#features" className="stretched-link" onClick={(e) => e.preventDefault()}>Customer-First Approach</a></h4>
                  <p>Dedicated customer support to assist with local municipal filings, utility setups, and tax updates.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
