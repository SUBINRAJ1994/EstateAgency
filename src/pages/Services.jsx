import React, { useEffect } from 'react';

const Services = ({ onPageChange }) => {
  useEffect(() => {
    if (window.AOS) {
      window.AOS.init({
        duration: 600,
        easing: 'ease-in-out',
        once: true,
      });
      window.AOS.refresh();
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
                <h1>Services</h1>
                <p className="mb-0">
                  Whether you are buying your first home, renting an office, or listing a commercial space, we offer professional advisory and procedural support.
                </p>
              </div>
            </div>
          </div>
        </div>
        <nav className="breadcrumbs">
          <div className="container">
            <ol>
              <li><a href="#home">Home</a></li>
              <li className="current">Services</li>
            </ol>
          </div>
        </nav>
      </div>

      {/* Services Section */}
      <section id="services" className="services section">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="bi bi-activity"></i>
                </div>
                <a href="#service" className="stretched-link" onClick={(e) => { e.preventDefault(); onPageChange('service-details'); }}>
                  <h3>Property Buying</h3>
                </a>
                <p>Guided purchase support for finding your dream home, including extensive site visits and pricing negotiations.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="bi bi-broadcast"></i>
                </div>
                <a href="#service" className="stretched-link" onClick={(e) => { e.preventDefault(); onPageChange('service-details'); }}>
                  <h3>Property Rental</h3>
                </a>
                <p>Seamless tenant matchmaking, rent valuation services, and comprehensive rent agreement drafting support.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="bi bi-easel"></i>
                </div>
                <a href="#service" className="stretched-link" onClick={(e) => { e.preventDefault(); onPageChange('service-details'); }}>
                  <h3>Real Estate Sales</h3>
                </a>
                <p>Premium marketing strategies to showcase and sell your property quickly, targeting verified high-value buyers.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="bi bi-bounding-box-circles"></i>
                </div>
                <a href="#service" className="stretched-link" onClick={(e) => { e.preventDefault(); onPageChange('service-details'); }}>
                  <h3>Property Valuation</h3>
                </a>
                <p>Accurate price estimations based on current local Indian market trends and locality growth parameters.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="bi bi-calendar4-week"></i>
                </div>
                <a href="#service" className="stretched-link" onClick={(e) => { e.preventDefault(); onPageChange('service-details'); }}>
                  <h3>Legal Advisory</h3>
                </a>
                <p>Assistance with documentation check, title deeds registry verification, and land registry paperwork.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="bi bi-chat-square-text"></i>
                </div>
                <a href="#service" className="stretched-link" onClick={(e) => { e.preventDefault(); onPageChange('service-details'); }}>
                  <h3>Consultation</h3>
                </a>
                <p>One-on-one real estate investment consultation to maximize ROI in rapidly developing housing corridors.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
