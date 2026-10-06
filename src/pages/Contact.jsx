import React, { useState, useEffect } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    submittedName: '',
    submittedEmail: '',
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
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({ ...status, error: 'Please fill out all required fields.' });
      return;
    }

    setStatus({
      submitting: true,
      success: false,
      submittedName: '',
      submittedEmail: '',
      error: null
    });

    // Simulate sending message
    setTimeout(() => {
      setStatus({
        submitting: false,
        success: true,
        submittedName: formData.name,
        submittedEmail: formData.email,
        error: null
      });
      setFormData({ name: '', email: '', message: '' });
    }, 1000);
  };

  const handleReset = () => {
    setStatus({
      submitting: false,
      success: false,
      submittedName: '',
      submittedEmail: '',
      error: null
    });
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
                  Have a question about a property, valuation, or documentation check? Get in touch with our team directly.
                </p>
              </div>
            </div>
          </div>
        </div>
        <nav className="breadcrumbs">
          <div className="container">
            <ol>
              <li><a href="#home">Home</a></li>
              <li className="current">Contact Us</li>
            </ol>
          </div>
        </nav>
      </div>

      {/* Contact Section */}
      <section id="contact" className="contact section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          {/* Map Section */}
          <div className="mb-4" data-aos="fade-up" data-aos-delay="200">
            <iframe 
              title="Google Map of Trivandrum"
              style={{ border: 0, width: '100%', height: '350px', borderRadius: '12px' }} 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126294.66016147426!2d76.8856697669463!3d8.52413912195977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05b1b16c141151%3A0xc3cfc32729a67a0c!2sThiruvananthapuram%2C%20Kerala!5e0!3m2!1sen!2sin!4v1688192629811!5m2!1sen!2sin" 
              frameBorder="0" 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="row gy-4">
            {/* Contact Information Sidebar */}
            <div className="col-lg-4">
              <div className="contact-info-box" data-aos="fade-up" data-aos-delay="300">
                <div className="icon-circle">
                  <i className="bi bi-geo-alt"></i>
                </div>
                <div>
                  <h4 className="fw-bold mb-1" style={{ fontSize: '1.1rem' }}>Address</h4>
                  <p className="text-muted mb-0">Trivandrum, Kerala, India - 695581</p>
                </div>
              </div>

              <div className="contact-info-box" data-aos="fade-up" data-aos-delay="400">
                <div className="icon-circle">
                  <i className="bi bi-telephone"></i>
                </div>
                <div>
                  <h4 className="fw-bold mb-1" style={{ fontSize: '1.1rem' }}>Call Us</h4>
                  <p className="text-muted mb-0">+91 6282476178</p>
                </div>
              </div>

              <div className="contact-info-box" data-aos="fade-up" data-aos-delay="500">
                <div className="icon-circle">
                  <i className="bi bi-envelope"></i>
                </div>
                <div>
                  <h4 className="fw-bold mb-1" style={{ fontSize: '1.1rem' }}>Email Us</h4>
                  <p className="text-muted mb-0">subinrajselvaraj@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Contact Form Container */}
            <div className="col-lg-8">
              <div className="contact-card" data-aos="fade-up" data-aos-delay="200">
                <h2 className="contact-form-title">Contact Us</h2>
                <p className="contact-form-subtitle">
                  Send us a message and our real estate specialists will reach out promptly.
                </p>

                {status.success ? (
                  <div className="contact-success-card">
                    <div className="success-icon">
                      <i className="bi bi-check-lg"></i>
                    </div>
                    <h3 className="fw-bold text-success mb-2">Message Sent Successfully!</h3>
                    <p className="text-muted mb-3">
                      Thank you, <strong>{status.submittedName}</strong>. We have received your message and our team will get back to your email ID (<strong>{status.submittedEmail}</strong>) shortly.
                    </p>
                    <button 
                      type="button" 
                      className="btn btn-outline-success rounded-pill px-4"
                      onClick={handleReset}
                    >
                      <i className="bi bi-arrow-repeat me-2"></i> Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    {status.error && (
                      <div className="alert alert-danger py-2 mb-3" role="alert">
                        <i className="bi bi-exclamation-triangle-fill me-2"></i>
                        {status.error}
                      </div>
                    )}

                    {/* Name Input */}
                    <div className="contact-field-group">
                      <label htmlFor="contact-name">Your Name</label>
                      <div className="input-wrapper">
                        <i className="bi bi-person"></i>
                        <input
                          id="contact-name"
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="contact-input"
                          placeholder="Enter your name"
                          required
                        />
                      </div>
                    </div>

                    {/* Email ID Input */}
                    <div className="contact-field-group">
                      <label htmlFor="contact-email">Your Email ID</label>
                      <div className="input-wrapper">
                        <i className="bi bi-envelope"></i>
                        <input
                          id="contact-email"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="contact-input"
                          placeholder="Enter your email ID"
                          required
                        />
                      </div>
                    </div>

                    {/* Message Textarea */}
                    <div className="contact-field-group">
                      <label htmlFor="contact-message">Your Message</label>
                      <div className="input-wrapper textarea-wrapper">
                        <i className="bi bi-chat-dots"></i>
                        <textarea
                          id="contact-message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          className="contact-input"
                          rows="5"
                          placeholder="Enter your message"
                          required
                        ></textarea>
                      </div>
                    </div>

                    {/* Send Button */}
                    <div className="text-end mt-4">
                      <button 
                        type="submit" 
                        className="btn-send"
                        disabled={status.submitting}
                      >
                        {status.submitting ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                            Sending...
                          </>
                        ) : (
                          <>
                            <i className="bi bi-send-fill me-2"></i>
                            Send
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
