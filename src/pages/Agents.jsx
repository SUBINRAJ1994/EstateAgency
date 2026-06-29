import React, { useEffect } from 'react';

const Agents = () => {
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
                <h1>Agents</h1>
                <p className="mb-0">
                  Our professional property advisors are here to guide you through legal registries, pricing negotiations, and offline property visits.
                </p>
              </div>
            </div>
          </div>
        </div>
        <nav className="breadcrumbs">
          <div className="container">
            <ol>
              <li><a href="#home">Home</a></li>
              <li className="current">Agents</li>
            </ol>
          </div>
        </nav>
      </div>

      {/* Agents Section */}
      <section id="agents" className="agents section">
        <div className="container">
          <div className="row gy-5">
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="member">
                <div className="pic"><img src="/assets/img/team/team-1.jpg" className="img-fluid rounded" alt="Walter White" /></div>
                <div className="member-info">
                  <h4>Walter White</h4>
                  <span>Chief Executive Officer</span>
                  <div className="social">
                    <a href="#" onClick={(e) => e.preventDefault()}><i className="bi bi-twitter-x"></i></a>
                    <a href="#" onClick={(e) => e.preventDefault()}><i className="bi bi-facebook"></i></a>
                    <a href="#" onClick={(e) => e.preventDefault()}><i className="bi bi-instagram"></i></a>
                    <a href="#" onClick={(e) => e.preventDefault()}><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="member">
                <div className="pic"><img src="/assets/img/team/team-2.jpg" className="img-fluid rounded" alt="Sarah Jhonson" /></div>
                <div className="member-info">
                  <h4>Sarah Jhonson</h4>
                  <span>Rent Manager</span>
                  <div className="social">
                    <a href="#" onClick={(e) => e.preventDefault()}><i className="bi bi-twitter-x"></i></a>
                    <a href="#" onClick={(e) => e.preventDefault()}><i className="bi bi-facebook"></i></a>
                    <a href="#" onClick={(e) => e.preventDefault()}><i className="bi bi-instagram"></i></a>
                    <a href="#" onClick={(e) => e.preventDefault()}><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="member">
                <div className="pic"><img src="/assets/img/team/team-3.jpg" className="img-fluid rounded" alt="William Anderson" /></div>
                <div className="member-info">
                  <h4>William Anderson</h4>
                  <span>Sale Manager</span>
                  <div className="social">
                    <a href="#" onClick={(e) => e.preventDefault()}><i className="bi bi-twitter-x"></i></a>
                    <a href="#" onClick={(e) => e.preventDefault()}><i className="bi bi-facebook"></i></a>
                    <a href="#" onClick={(e) => e.preventDefault()}><i className="bi bi-instagram"></i></a>
                    <a href="#" onClick={(e) => e.preventDefault()}><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Agents;
