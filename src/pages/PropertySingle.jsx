import React, { useEffect } from 'react';
import { propertiesData } from './Properties';

const PropertySingle = ({ propertyId }) => {
  const property = propertiesData.find(p => p.id === propertyId) || propertiesData[0];

  useEffect(() => {
    if (window.AOS) {
      window.AOS.init({
        duration: 600,
        easing: 'ease-in-out',
        once: true,
      });
      window.AOS.refresh();
    }

    // Initialize Swiper for the property details slider
    if (window.Swiper) {
      const swiperElement = document.querySelector('.portfolio-details-slider.swiper');
      if (swiperElement) {
        const configElement = swiperElement.querySelector('.swiper-config');
        if (configElement) {
          try {
            const config = JSON.parse(configElement.innerHTML.trim());
            new window.Swiper(swiperElement, config);
          } catch (e) {
            console.error("Failed to initialize Property Swiper:", e);
          }
        }
      }
    }
  }, [propertyId]);

  return (
    <>
      {/* Page Title */}
      <div className="page-title" data-aos="fade">
        <div className="heading">
          <div className="container">
            <div className="row d-flex justify-content-center text-center">
              <div className="col-lg-8">
                <h1>{property.title}</h1>
                <p className="mb-0">{property.summary}</p>
              </div>
            </div>
          </div>
        </div>
        <nav className="breadcrumbs">
          <div className="container">
            <ol>
              <li><a href="#home">Home</a></li>
              <li><a href="#properties">Properties</a></li>
              <li className="current">Details</li>
            </ol>
          </div>
        </nav>
      </div>

      {/* Real Estate 2 Section */}
      <section id="real-estate-2" className="real-estate-2 section">
        <div className="container" data-aos="fade-up">
          <div className="portfolio-details-slider swiper init-swiper">
            <script type="application/json" className="swiper-config">
              {`
              {
                "loop": true,
                "speed": 600,
                "autoplay": {
                  "delay": 5000
                },
                "slidesPerView": "auto",
                "navigation": {
                  "nextEl": ".swiper-button-next",
                  "prevEl": ".swiper-button-prev"
                },
                "pagination": {
                  "el": ".swiper-pagination",
                  "type": "bullets",
                  "clickable": true
                }
              }
              `}
            </script>
            <div className="swiper-wrapper align-items-center">
              <div className="swiper-slide">
                <img src="/assets/img/property-slide/property-slide-1.jpg" className="rounded" alt="Slide 1" />
              </div>
              <div className="swiper-slide">
                <img src="/assets/img/property-slide/property-slide-2.jpg" className="rounded" alt="Slide 2" />
              </div>
              <div className="swiper-slide">
                <img src="/assets/img/property-slide/property-slide-3.jpg" className="rounded" alt="Slide 3" />
              </div>
            </div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
            <div className="swiper-pagination"></div>
          </div>

          <div className="row justify-content-between gy-4 mt-4">
            <div className="col-lg-8" data-aos="fade-up">
              <div className="portfolio-description">
                <h2>Description & Features</h2>
                <p>{property.details}</p>
                <p>
                  This premium layout includes full ventilation design, high-quality fittings, tile layouts, independent water connections, and dedicated wiring for appliances. Conveniently situated in a high-demand locality with fast access to tech hubs and public transport.
                </p>

                <div className="testimonial-item mt-5 p-4 bg-light rounded border-start border-success border-4">
                  <p className="fst-italic mb-3">
                    "This is an exceptional listing with a clean legal document history. Let me know if you would like to schedule an offline site visit."
                  </p>
                  <div className="d-flex align-items-center">
                    <img src="/assets/img/testimonials/testimonials-2.jpg" className="testimonial-img rounded-circle me-3" style={{width: '60px', height: '60px'}} alt="Sara Wilsson" />
                    <div>
                      <h3 className="h6 mb-0">Sara Wilsson</h3>
                      <span className="text-muted text-sm">Property Advisor</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tabs */}
              <ul className="nav nav-pills my-4 border-bottom pb-2">
                <li className="nav-item">
                  <button className="nav-link active me-2" data-bs-toggle="pill" data-bs-target="#tab-video">Video Tour</button>
                </li>
                <li className="nav-item">
                  <button className="nav-link me-2" data-bs-toggle="pill" data-bs-target="#tab-floor">Floor Plan</button>
                </li>
                <li className="nav-item">
                  <button className="nav-link" data-bs-toggle="pill" data-bs-target="#tab-location">Location Map</button>
                </li>
              </ul>

              {/* Tab Content */}
              <div className="tab-content">
                <div className="tab-pane fade show active" id="tab-video">
                  <div className="ratio ratio-16x9 rounded overflow-hidden shadow-sm">
                    <iframe 
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                      title="Video Tour" 
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>

                <div className="tab-pane fade" id="tab-floor">
                  <img src="/assets/img/floor-plan.jpg" alt="Floor Plan" className="img-fluid rounded border shadow-sm" />
                </div>

                <div className="tab-pane fade" id="tab-location">
                  <div className="rounded overflow-hidden shadow-sm">
                    <iframe 
                      title="Google Map of Property Location"
                      style={{border: 0, width: '100%', height: '400px'}} 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125745.75924765952!2d76.22037704144365!3d9.982342817294406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d08f976f3a9%3A0xc92b6a4a1087a1c7!2sKochi%2C%20Kerala!5e0!3m2!1sen!2sin!4v1688192329811!5m2!1sen!2sin" 
                      frameBorder="0" 
                      allowFullScreen="" 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3" data-aos="fade-up" data-aos-delay="100">
              <div className="portfolio-info p-4 bg-light rounded border">
                <h3>Quick Summary</h3>
                <ul className="list-unstyled mb-0">
                  <li className="py-2 border-bottom"><strong>Property ID:</strong> <span className="float-end text-muted">{property.id.toUpperCase()}</span></li>
                  <li className="py-2 border-bottom"><strong>Location:</strong> <span className="float-end text-muted">{property.location}</span></li>
                  <li className="py-2 border-bottom"><strong>Property Type:</strong> <span className="float-end text-muted">Residential</span></li>
                  <li className="py-2 border-bottom"><strong>Status:</strong> <span className="float-end text-muted">{property.type}</span></li>
                  <li className="py-2 border-bottom"><strong>Area:</strong> <span className="float-end text-muted">{property.area}</span></li>
                  <li className="py-2 border-bottom"><strong>Beds:</strong> <span className="float-end text-muted">{property.beds}</span></li>
                  <li className="py-2 border-bottom"><strong>Baths:</strong> <span className="float-end text-muted">{property.baths}</span></li>
                  <li className="py-2"><strong>Price:</strong> <span className="float-end text-success fw-bold">{property.price}</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PropertySingle;
