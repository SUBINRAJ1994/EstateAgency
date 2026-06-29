import React, { useState, useEffect } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null
  });

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: null });

    // Simulate contact form submission
    setTimeout(() => {
      setStatus({ submitting: false, success: true, error: null });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <>
      {/* Page Title */}
      <div className="page-title" data-aos="fade">
        <div className="heading">
          <div className="container">
            <div className="row d-flex justify-content-center text-center">
              <div className="col-lg-8">
                <h1>Contact Us</h1>
                <p className="mb-0">
                  Have a question about a listing, valuation, or documentation check? Get in touch with our team directly.
                </p>
              </div>
            </div>
          </div>
        </div>
        <nav className="breadcrumbs">
          <div className="container">
            <ol>
              <li><a href="#home">Home</a></li>
              <li className="current">Contact</li>
            </ol>
          </div>
        </nav>
      </div>

      {/* Contact Section */}
      <section id="contact" className="contact section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="mb-4" data-aos="fade-up" data-aos-delay="200">
            {/* Centered on Thiruvananthapuram (Trivandrum), Kerala, India */}
            <iframe 
              title="Google Map of Trivandrum"
              style={{border: 0, width: '100%', height: '350px'}} 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126294.66016147426!2d76.8856697669463!3d8.52413912195977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05b1b16c141151%3A0xc3cfc32729a67a0c!2sThiruvananthapuram%2C%20Kerala!5e0!3m2!1sen!2sin!4v1688192629811!5m2!1sen!2sin" 
              frameBorder="0" 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="row gy-4">
            <div className="col-lg-4">
              <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
                <i className="bi bi-geo-alt flex-shrink-0"></i>
                <div>
                  <h3>Address</h3>
                  <p>Trivandrum, Kerala, India - 695581</p>
                </div>
              </div>

              <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
                <i className="bi bi-telephone flex-shrink-0"></i>
                <div>
                  <h3>Call Us</h3>
                  <p>+91 6282476178</p>
                </div>
              </div>

              <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="500">
                <i className="bi bi-envelope flex-shrink-0"></i>
                <div>
                  <h3>Email Us</h3>
                  <p>subinrajselvaraj@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="col-lg-8">
              <form onSubmit={handleSubmit} className="php-email-form" data-aos="fade-up" data-aos-delay="200">
                <div className="row gy-4">
                  <div className="col-md-6">
                    <input 
                      type="text" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      className="form-control" 
                      placeholder="Your Name" 
                      required 
                    />
                  </div>

                  <div className="col-md-6">
                    <input 
                      type="email" 
                      className="form-control" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email" 
                      required 
                    />
                  </div>

                  <div className="col-md-12">
                    <input 
                      type="text" 
                      class="form-control" 
                      name="subject" 
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Subject" 
                      required 
                    />
                  </div>

                  <div className="col-md-12">
                    <textarea 
                      className="form-control" 
                      name="message" 
                      value={formData.message}
                      onChange={handleChange}
                      rows="6" 
                      placeholder="Message" 
                      required
                    ></textarea>
                  </div>

                  <div className="col-md-12 text-center">
                    {status.submitting && <div className="loading d-block">Sending message...</div>}
                    {status.error && <div className="error-message d-block">{status.error}</div>}
                    {status.success && <div className="sent-message d-block">Your message has been sent. Thank you!</div>}

                    <button type="submit" disabled={status.submitting}>Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
