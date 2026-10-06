import React, { useState, useEffect } from 'react';

const Header = ({ currentPage, onPageChange }) => {
  const [mobileNavActive, setMobileNavActive] = useState(false);
  const [dropdownActive, setDropdownActive] = useState(false);
  const [deepDropdownActive, setDeepDropdownActive] = useState(false);

  // Sync mobile nav state with body class
  useEffect(() => {
    if (mobileNavActive) {
      document.body.classList.add('mobile-nav-active');
    } else {
      document.body.classList.remove('mobile-nav-active');
    }
  }, [mobileNavActive]);

  // Close mobile nav when changing pages
  const handlePageClick = (page, e) => {
    e.preventDefault();
    onPageChange(page);
    setMobileNavActive(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleMobileNav = () => {
    setMobileNavActive(!mobileNavActive);
  };

  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
        <a 
          href="#home" 
          className="logo d-flex align-items-center"
          onClick={(e) => handlePageClick('home', e)}
        >
          <h1 className="sitename">Estate<span>Agency</span></h1>
        </a>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <a 
                href="#home" 
                className={currentPage === 'home' ? 'active' : ''}
                onClick={(e) => handlePageClick('home', e)}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                className={currentPage === 'about' ? 'active' : ''}
                onClick={(e) => handlePageClick('about', e)}
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="#services" 
                className={currentPage === 'services' || currentPage === 'service-details' ? 'active' : ''}
                onClick={(e) => handlePageClick('services', e)}
              >
                Services
              </a>
            </li>
            <li>
              <a 
                href="#properties" 
                className={currentPage === 'properties' || currentPage === 'property-single' ? 'active' : ''}
                onClick={(e) => handlePageClick('properties', e)}
              >
                Properties
              </a>
            </li>
            <li>
              <a 
                href="#agents" 
                className={currentPage === 'agents' ? 'active' : ''}
                onClick={(e) => handlePageClick('agents', e)}
              >
                Agents
              </a>
            </li>
            <li className={`dropdown ${dropdownActive ? 'active' : ''}`}>
              <a href="#dropdown" onClick={(e) => { e.preventDefault(); setDropdownActive(!dropdownActive); }}>
                <span>Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i>
              </a>
              <ul className={dropdownActive ? 'dropdown-active' : ''}>
                <li><a href="#drop1" onClick={(e) => e.preventDefault()}>Dropdown 1</a></li>
                <li className={`dropdown ${deepDropdownActive ? 'active' : ''}`}>
                  <a href="#deepdrop" onClick={(e) => { e.preventDefault(); setDeepDropdownActive(!deepDropdownActive); }}>
                    <span>Deep Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i>
                  </a>
                  <ul className={deepDropdownActive ? 'dropdown-active' : ''}>
                    <li><a href="#deep1" onClick={(e) => e.preventDefault()}>Deep Dropdown 1</a></li>
                    <li><a href="#deep2" onClick={(e) => e.preventDefault()}>Deep Dropdown 2</a></li>
                    <li><a href="#deep3" onClick={(e) => e.preventDefault()}>Deep Dropdown 3</a></li>
                    <li><a href="#deep4" onClick={(e) => e.preventDefault()}>Deep Dropdown 4</a></li>
                    <li><a href="#deep5" onClick={(e) => e.preventDefault()}>Deep Dropdown 5</a></li>
                  </ul>
                </li>
                <li><a href="#drop2" onClick={(e) => e.preventDefault()}>Dropdown 2</a></li>
                <li><a href="#drop3" onClick={(e) => e.preventDefault()}>Dropdown 3</a></li>
                <li><a href="#drop4" onClick={(e) => e.preventDefault()}>Dropdown 4</a></li>
              </ul>
            </li>
            <li>
              <a 
                href="#contact" 
                className={currentPage === 'contact' ? 'active' : ''}
                onClick={(e) => handlePageClick('contact', e)}
              >
                Contact Us
              </a>
            </li>
          </ul>
          <i 
            className={`mobile-nav-toggle d-xl-none bi ${mobileNavActive ? 'bi-x' : 'bi-list'}`} 
            onClick={toggleMobileNav}
          ></i>
        </nav>
      </div>
    </header>
  );
};

export default Header;
