import React from 'react';

const Footer = ({ onPageChange }) => {
  const handlePageClick = (page, e) => {
    e.preventDefault();
    onPageChange(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="footer light-background">
      <div className="container">
        <div className="row gy-3">
          <div className="col-lg-3 col-md-6 d-flex">
            <i className="bi bi-geo-alt icon"></i>
            <div className="address">
              <h4>Address</h4>
              <p>Trivandrum, Kerala</p>
              <p>India - 695581</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-flex">
            <i className="bi bi-telephone icon"></i>
            <div>
              <h4>Contact Details</h4>
              <p>
                <strong>Phone:</strong> <span>+91 6282476178</span><br />
                <strong>Email:</strong> <span>subinrajselvaraj@gmail.com</span><br />
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-flex">
            <i className="bi bi-clock icon"></i>
            <div>
              <h4>Business Hours</h4>
              <p>
                <strong>Mon-Sat:</strong> <span>9AM - 6PM</span><br />
                <strong>Sunday</strong>: <span>Closed</span>
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <h4>Follow Us</h4>
            <div className="social-links d-flex">
              <a href="https://github.com/SUBINRAJ1994" target="_blank" rel="noopener noreferrer" className="github"><i className="bi bi-github"></i></a>
              <a href="https://www.linkedin.com/in/subin-raj-450a67a2" target="_blank" rel="noopener noreferrer" className="linkedin"><i className="bi bi-linkedin"></i></a>
              <a href="#" className="twitter" onClick={(e) => e.preventDefault()}><i className="bi bi-twitter-x"></i></a>
              <a href="#" className="facebook" onClick={(e) => e.preventDefault()}><i className="bi bi-facebook"></i></a>
            </div>
          </div>
        </div>
      </div>

      <div className="container copyright text-center mt-4">
        <p>© <span>Copyright</span> <strong className="px-1 sitename">EstateAgency</strong> <span>All Rights Reserved</span></p>
        <div className="credits">
          Designed by <a href="https://bootstrapmade.com/" target="_blank" rel="noopener noreferrer">BootstrapMade</a> | Rebuilt in React for Subin Raj S S
        </div>
      </div>
    </footer>
  );
};

export default Footer;
