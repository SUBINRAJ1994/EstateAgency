import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetails from './pages/ServiceDetails';
import Properties from './pages/Properties';
import PropertySingle from './pages/PropertySingle';
import Agents from './pages/Agents';
import Contact from './pages/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedPropertyId, setSelectedPropertyId] = useState('prop-1');
  const [scrollTopActive, setScrollTopActive] = useState(false);
  const [loading, setLoading] = useState(true);

  // Handle scroll events for sticky header and scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      setScrollTopActive(isScrolled);
      
      const body = document.querySelector('body');
      if (body) {
        if (isScrolled) {
          body.classList.add('scrolled');
        } else {
          body.classList.remove('scrolled');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Hide preloader after component mounts
    const timer = setTimeout(() => {
      setLoading(false);
      const preloader = document.getElementById('preloader');
      if (preloader) {
        preloader.classList.add('fade-out');
        setTimeout(() => preloader.remove(), 500);
      }
    }, 600);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const handleScrollTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const selectProperty = (id) => {
    setSelectedPropertyId(id);
    setCurrentPage('property-single');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToPage = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onPageChange={navigateToPage} onSelectProperty={selectProperty} />;
      case 'about':
        return <About />;
      case 'services':
        return <Services onPageChange={navigateToPage} />;
      case 'service-details':
        return <ServiceDetails />;
      case 'properties':
        return <Properties onSelectProperty={selectProperty} />;
      case 'property-single':
        return <PropertySingle propertyId={selectedPropertyId} />;
      case 'agents':
        return <Agents />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onPageChange={navigateToPage} onSelectProperty={selectProperty} />;
    }
  };

  return (
    <div className="App">
      {/* Header Navigation */}
      <Header currentPage={currentPage} onPageChange={navigateToPage} />

      {/* Main Page Area */}
      <main className="main">
        {renderPage()}
      </main>

      {/* Footer Details */}
      <Footer onPageChange={navigateToPage} />

      {/* Scroll Top Trigger */}
      <a 
        href="#top" 
        className={`scroll-top d-flex align-items-center justify-content-center ${scrollTopActive ? 'active' : ''}`}
        onClick={handleScrollTop}
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>

      {/* Preloader */}
      {loading && <div id="preloader"></div>}
    </div>
  );
}

export default App;
