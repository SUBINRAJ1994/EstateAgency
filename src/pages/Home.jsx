import React, { useEffect } from 'react';

const Home = ({ onPageChange, onSelectProperty }) => {
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

    // Initialize Swiper for testimonials
    if (window.Swiper) {
      const swiperElement = document.querySelector('.testimonials .init-swiper');
      if (swiperElement) {
        const configElement = swiperElement.querySelector('.swiper-config');
        if (configElement) {
          try {
            const config = JSON.parse(configElement.innerHTML.trim());
            new window.Swiper(swiperElement, config);
          } catch (e) {
            console.error("Failed to initialize Swiper:", e);
          }
        }
      }
    }
  }, []);

  const handlePropertyClick = (propertyId, e) => {
    e.preventDefault();
    onSelectProperty(propertyId);
  };

  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="hero section dark-background">
        <div id="hero-carousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="/assets/img/hero-carousel/hero-carousel-1.jpg" alt="Olive Road" />
              <div className="carousel-container">
                <div>
                  <p>Kochi, Kerala</p>
                  <h2><span>204</span> Olive Road Two</h2>
                  <a 
                    href="#property-detail" 
                    className="btn-get-started"
                    onClick={(e) => handlePropertyClick('prop-1', e)}
                  >
                    rent | ₹ 12,000/month
                  </a>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <img src="/assets/img/hero-carousel/hero-carousel-2.jpg" alt="Venda Road" />
              <div className="carousel-container">
                <div>
                  <p>Trivandrum, Kerala</p>
                  <h2><span>247</span> Venda Road Five</h2>
                  <a 
                    href="#property-detail" 
                    className="btn-get-started"
                    onClick={(e) => handlePropertyClick('prop-2', e)}
                  >
                    sale | ₹ 3.56 Crore
                  </a>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <img src="/assets/img/hero-carousel/hero-carousel-3.jpg" alt="Vitra Road" />
              <div className="carousel-container">
                <div>
                  <p>Bangalore, Karnataka</p>
                  <h2><span>247</span> Vitra Road Three</h2>
                  <a 
                    href="#property-detail" 
                    className="btn-get-started"
                    onClick={(e) => handlePropertyClick('prop-5', e)}
                  >
                    rent | ₹ 30,000/month
                  </a>
                </div>
              </div>
            </div>
          </div>

          <a className="carousel-control-prev" href="#hero-carousel" role="button" data-bs-slide="prev">
            <span className="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
          </a>

          <a className="carousel-control-next" href="#hero-carousel" role="button" data-bs-slide="next">
            <span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
          </a>

          <div className="carousel-indicators">
            <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Our Services</h2>
          <p>We provide a comprehensive range of professional real estate services tailored to your needs</p>
        </div>

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

      {/* Agents Section */}
      <section id="agents" className="agents section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Our Agents</h2>
          <p>Meet our highly qualified team of real estate experts ready to assist you</p>
        </div>

        <div className="container">
          <div className="row gy-5">
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="member">
                <div className="pic"><img src="/assets/img/team/team-1.jpg" className="img-fluid" alt="Walter White" /></div>
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
                <div className="pic"><img src="/assets/img/team/team-2.jpg" className="img-fluid" alt="Sarah Jhonson" /></div>
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
                <div className="pic"><img src="/assets/img/team/team-3.jpg" className="img-fluid" alt="William Anderson" /></div>
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

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Testimonials</h2>
          <p>What our valued clients say about their experience with us</p>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="swiper init-swiper">
            <script type="application/json" className="swiper-config">
              {`
              {
                "loop": true,
                "speed": 600,
                "autoplay": {
                  "delay": 5000
                },
                "slidesPerView": "auto",
                "pagination": {
                  "el": ".swiper-pagination",
                  "type": "bullets",
                  "clickable": true
                },
                "breakpoints": {
                  "320": {
                    "slidesPerView": 1,
                    "spaceBetween": 40
                  },
                  "1200": {
                    "slidesPerView": 3,
                    "spaceBetween": 10
                  }
                }
              }
              `}
            </script>
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="testimonial-item">
                  <div className="stars">
                    <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                  </div>
                  <p>
                    "Finding a rented apartment in Kochi was extremely smooth. The team handled everything from rent agreement drafting to property selection efficiently."
                  </p>
                  <div className="profile mt-auto">
                    <img src="/assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt="Saul Goodman" />
                    <h3>Saul Goodman</h3>
                    <h4>CEO &amp; Founder</h4>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="testimonial-item">
                  <div className="stars">
                    <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                  </div>
                  <p>
                    "We purchased our first home through EstateAgency. Excellent pricing negotiation and seamless legal title deed registry paperwork assistance."
                  </p>
                  <div className="profile mt-auto">
                    <img src="/assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt="Sara Wilsson" />
                    <h3>Sara Wilsson</h3>
                    <h4>Designer</h4>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="testimonial-item">
                  <div className="stars">
                    <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                  </div>
                  <p>
                    "I got an amazing return on investment by consulting with their team. They recommended the ideal housing corridor in Bangalore just before prices skyrocketed."
                  </p>
                  <div className="profile mt-auto">
                    <img src="/assets/img/testimonials/testimonials-3.jpg" className="testimonial-img" alt="Jena Karlis" />
                    <h3>Jena Karlis</h3>
                    <h4>Store Owner</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
