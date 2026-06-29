import React, { useState, useEffect } from 'react';

const serviceData = {
  buying: {
    title: "Property Buying Support",
    subtitle: "Find and secure the perfect property with professional guidance.",
    img: "/assets/img/services.jpg",
    content: "Our Property Buying Service provides comprehensive guidance for buyers looking for residential, commercial, or land assets. We analyze your requirements, conduct locality screenings, check structural properties, and assist in price negotiations to ensure you get the absolute best deal.",
    points: [
      "Extensive local market screening in premium areas.",
      "Assistance with property valuation and home loan applications.",
      "Clear checks on local water connection, power supply, and zoning regulations."
    ]
  },
  rental: {
    title: "Property Rental & Leasing",
    subtitle: "Connecting trustworthy landlords and quality tenants smoothly.",
    img: "/assets/img/services.jpg",
    content: "We manage rental listings for apartments, houses, and retail layouts. Landlords get their properties rented out to verified, high-quality tenants rapidly, while tenants get clean, legal-vetted leases that safeguard their deposits and advance terms.",
    points: [
      "Rigorous tenant verification and credit history vetting.",
      "Standard rent agreement drafting matching state laws.",
      "Security deposit escrows and timely renewal checks."
    ]
  },
  sales: {
    title: "Real Estate Sales Marketing",
    subtitle: "Get maximum value for your assets with strategic promotion.",
    img: "/assets/img/services.jpg",
    content: "Listing a property with us puts it in front of thousands of active buyers. We handle photography, virtual tours, listings publication, and lead qualification, ensuring you only spend time talking to genuine buyers who match your target price.",
    points: [
      "Professional property photos and floor plan layouts.",
      "Targeted digital advertising to reach localized buyers.",
      "Dedicated sales managers to host property open houses."
    ]
  },
  valuation: {
    title: "Property Valuation Services",
    subtitle: "Know the accurate current market value of your real estate holdings.",
    img: "/assets/img/services.jpg",
    content: "Using historical sales data, local development project timelines, and modern comparison metrics, we provide detailed valuation reports. These reports are invaluable for pricing listings, bank loan estimations, and division cases.",
    points: [
      "Detailed local market comparative analytics.",
      "Analysis of localized infrastructure impact (metro, highways).",
      "Official estimation certificates recognized by leading financial agencies."
    ]
  },
  legal: {
    title: "Legal Documents & Registry Support",
    subtitle: "Ensure clean title deeds and smooth legal transfers.",
    img: "/assets/img/services.jpg",
    content: "Real estate registry in India involves multiple checks on encumbrance certificates, title deeds, land taxes, and municipal NOCs. Our experienced legal support guides you through the process, preventing future property disputes.",
    points: [
      "Verification of parent deeds and past ownership titles.",
      "Obtaining Encumbrance Certificates (EC) and Land Tax receipts.",
      "Legal drafting of Sale Deeds and registration handling at the Sub-Registrar office."
    ]
  },
  consultation: {
    title: "Real Estate Advisory & Consultation",
    subtitle: "Make smart investments backed by local analytics.",
    img: "/assets/img/services.jpg",
    content: "Looking to invest in residential apartments or buy plots for future appreciation? Our consultation sessions provide data-driven insights on upcoming development corridors, expected yield ratios, and taxation guidelines.",
    points: [
      "Detailed analysis of growth corridors and upcoming IT parks.",
      "Tax planning guidelines for capital gains reinvestment.",
      "ROI projections for rent yields and plot price appreciation."
    ]
  }
};

const ServiceDetails = () => {
  const [selectedService, setSelectedService] = useState('buying');

  useEffect(() => {
    if (window.AOS) {
      window.AOS.init({
        duration: 600,
        easing: 'ease-in-out',
        once: true,
      });
      window.AOS.refresh();
    }
  }, [selectedService]);

  const activeData = serviceData[selectedService] || serviceData.buying;

  return (
    <>
      {/* Page Title */}
      <div className="page-title" data-aos="fade">
        <div className="heading">
          <div className="container">
            <div className="row d-flex justify-content-center text-center">
              <div className="col-lg-8">
                <h1>Service Details</h1>
                <p className="mb-0">{activeData.subtitle}</p>
              </div>
            </div>
          </div>
        </div>
        <nav className="breadcrumbs">
          <div className="container">
            <ol>
              <li><a href="#home">Home</a></li>
              <li className="current">Service Details</li>
            </ol>
          </div>
        </nav>
      </div>

      {/* Service Details Section */}
      <section id="service-details" className="service-details section">
        <div className="container">
          <div className="row gy-5">
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
              <div className="service-box">
                <h4>Services List</h4>
                <div className="services-list">
                  <a 
                    href="#buying" 
                    className={selectedService === 'buying' ? 'active' : ''} 
                    onClick={(e) => { e.preventDefault(); setSelectedService('buying'); }}
                  >
                    <i className="bi bi-arrow-right-circle"></i><span>Property Buying</span>
                  </a>
                  <a 
                    href="#rental" 
                    className={selectedService === 'rental' ? 'active' : ''} 
                    onClick={(e) => { e.preventDefault(); setSelectedService('rental'); }}
                  >
                    <i className="bi bi-arrow-right-circle"></i><span>Property Rental</span>
                  </a>
                  <a 
                    href="#sales" 
                    className={selectedService === 'sales' ? 'active' : ''} 
                    onClick={(e) => { e.preventDefault(); setSelectedService('sales'); }}
                  >
                    <i className="bi bi-arrow-right-circle"></i><span>Real Estate Sales</span>
                  </a>
                  <a 
                    href="#valuation" 
                    className={selectedService === 'valuation' ? 'active' : ''} 
                    onClick={(e) => { e.preventDefault(); setSelectedService('valuation'); }}
                  >
                    <i className="bi bi-arrow-right-circle"></i><span>Property Valuation</span>
                  </a>
                  <a 
                    href="#legal" 
                    className={selectedService === 'legal' ? 'active' : ''} 
                    onClick={(e) => { e.preventDefault(); setSelectedService('legal'); }}
                  >
                    <i className="bi bi-arrow-right-circle"></i><span>Legal Advisory</span>
                  </a>
                  <a 
                    href="#consultation" 
                    className={selectedService === 'consultation' ? 'active' : ''} 
                    onClick={(e) => { e.preventDefault(); setSelectedService('consultation'); }}
                  >
                    <i className="bi bi-arrow-right-circle"></i><span>Consultation</span>
                  </a>
                </div>
              </div>

              <div className="service-box">
                <h4>Download Catalog</h4>
                <div className="download-catalog">
                  <a href="#pdf" onClick={(e) => e.preventDefault()}><i className="bi bi-filetype-pdf"></i><span>Catalog PDF</span></a>
                  <a href="#doc" onClick={(e) => e.preventDefault()}><i className="bi bi-file-earmark-word"></i><span>Catalog DOC</span></a>
                </div>
              </div>

              <div className="help-box d-flex flex-column justify-content-center align-items-center rounded text-center">
                <i className="bi bi-headset help-icon mb-3"></i>
                <h4>Have a Question?</h4>
                <p className="d-flex align-items-center justify-content-center mt-2 mb-0">
                  <i className="bi bi-telephone me-2"></i> <span>+91 6282476178</span>
                </p>
                <p className="d-flex align-items-center justify-content-center mt-1 mb-0">
                  <i className="bi bi-envelope me-2"></i> <a href="mailto:subinrajselvaraj@gmail.com">subinrajselvaraj@gmail.com</a>
                </p>
              </div>
            </div>

            <div className="col-lg-8 ps-lg-5" data-aos="fade-up" data-aos-delay="200">
              <img src={activeData.img} alt={activeData.title} className="img-fluid services-img rounded mb-4" />
              <h3>{activeData.title}</h3>
              <p>{activeData.content}</p>
              <ul className="list-unstyled mt-3">
                {activeData.points.map((pt, index) => (
                  <li key={index} className="mb-2 d-flex align-items-start">
                    <i className="bi bi-check-circle text-success me-2 mt-1"></i>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                We guarantee a highly professional experience. Every documentation is scrutinized by our legal advisors to ensure maximum transparency. Please contact us directly for specific queries about land registry rates or home loan schemes in Kerala.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetails;
