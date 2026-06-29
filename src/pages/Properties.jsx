import React, { useEffect } from 'react';

export const propertiesData = [
  {
    id: 'prop-1',
    title: '204 Olive Road Two',
    price: '₹ 12,000/month',
    type: 'Rent',
    area: '340 m²',
    beds: 4,
    baths: 2,
    garages: 1,
    location: 'Kochi, Kerala',
    image: '/assets/img/properties/property-1.jpg',
    summary: 'A beautiful residential house located in the serene suburbs of Kochi, perfect for families.',
    details: 'This property offers spacious bedrooms, a modern open kitchen layout, a secure garage, and an open veranda overlooking a well-maintained garden. Located in Kochi, it enjoys close proximity to local schools and shopping centers.'
  },
  {
    id: 'prop-2',
    title: '247 Venda Road Five',
    price: '₹ 3.56 Crore',
    type: 'Sale',
    area: '580 m²',
    beds: 5,
    baths: 3,
    garages: 2,
    location: 'Trivandrum, Kerala',
    image: '/assets/img/properties/property-2.jpg',
    summary: 'A premium luxury villa situated in the heart of Trivandrum with state-of-the-art designs.',
    details: 'This ultra-modern villa comes with complete teak wood furnishings, automated security gates, a spacious modular kitchen, centralized cooling, and a private terrace pool. A perfect high-value investment in Kerala\'s capital city.'
  },
  {
    id: 'prop-3',
    title: '182 Kalasa Marg',
    price: '₹ 1.85 Crore',
    type: 'Sale',
    area: '410 m²',
    beds: 3,
    baths: 2,
    garages: 1,
    location: 'Kochi, Kerala',
    image: '/assets/img/properties/property-3.jpg',
    summary: 'Elegant multi-family house with excellent local transport connectivity in Kochi.',
    details: 'Spacious independent house featuring 3 large bedrooms, marble flooring, private water source, and a green yard. Ideal for peaceful residential living with fast access to major Kochi highways.'
  },
  {
    id: 'prop-4',
    title: '90 Orchid Enclave',
    price: '₹ 25,000/month',
    type: 'Rent',
    area: '290 m²',
    beds: 2,
    baths: 2,
    garages: 1,
    location: 'Trivandrum, Kerala',
    image: '/assets/img/properties/property-4.jpg',
    summary: 'Fully-furnished modern apartment in Trivandrum with premium security services.',
    details: 'Located on the 8th floor of the elite Orchid Enclave, this apartment offers scenic city skyline views, modular kitchen fittings, backup generator system, and a dedicated covered parking bay.'
  },
  {
    id: 'prop-5',
    title: '247 Vitra Road Three',
    price: '₹ 30,000/month',
    type: 'Rent',
    area: '310 m²',
    beds: 3,
    baths: 2,
    garages: 1,
    location: 'Kochi, Kerala',
    image: '/assets/img/properties/property-5.jpg',
    summary: 'Charming suburban cottage near the Kochi Tech Park, ideal for corporate employees.',
    details: 'A semi-furnished individual house featuring modular wardrobes, kitchen cupboards, local water supply connection, and high-speed fiber internet setup. Extremely close to InfoPark Kochi.'
  },
  {
    id: 'prop-6',
    title: '15 Marine Drive Tower',
    price: '₹ 4.20 Crore',
    type: 'Sale',
    area: '620 m²',
    beds: 4,
    baths: 4,
    garages: 2,
    location: 'Kochi, Kerala',
    image: '/assets/img/properties/property-6.jpg',
    summary: 'Exclusive waterfront penthouse apartment in Kochi\'s premier Marine Drive locality.',
    details: 'This luxury penthouse offers panoramic views of the backwaters, premium Italian marble floor layouts, access to clubhouse facilities, private elevator access, and multi-tier security systems.'
  }
];

const Properties = ({ onSelectProperty }) => {
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
                <h1>Properties Grid</h1>
                <p className="mb-0">
                  Explore our curated portfolio of residential and commercial spaces available for rent or purchase in major localities.
                </p>
              </div>
            </div>
          </div>
        </div>
        <nav className="breadcrumbs">
          <div className="container">
            <ol>
              <li><a href="#home">Home</a></li>
              <li className="current">Properties</li>
            </ol>
          </div>
        </nav>
      </div>

      {/* Real Estate Section */}
      <section id="real-estate" className="real-estate section">
        <div className="container">
          <div className="row gy-4">
            {propertiesData.map((prop, idx) => (
              <div 
                key={prop.id} 
                className="col-lg-4 col-md-6" 
                data-aos="fade-up" 
                data-aos-delay={(idx + 1) * 100}
              >
                <div className="real-estate-item">
                  <div className="img-container position-relative overflow-hidden">
                    <img src={prop.image} className="img-fluid w-100" alt={prop.title} />
                    <span className="sale-rent position-absolute top-0 start-0 m-3 px-3 py-1 bg-success text-white rounded-pill">
                      {prop.type} | {prop.price}
                    </span>
                  </div>

                  <div className="real-estate-content p-4 border border-top-0">
                    <div className="price-box mb-2">
                      <span className="price text-success fw-bold fs-5">{prop.price}</span>
                    </div>
                    
                    <h3 className="h5">
                      <a 
                        href={`#property-${prop.id}`} 
                        onClick={(e) => { e.preventDefault(); onSelectProperty(prop.id); }}
                        className="text-dark fw-semibold"
                      >
                        {prop.title}
                      </a>
                    </h3>
                    <p className="text-muted text-sm">{prop.location}</p>

                    <div className="row border-top pt-3 mt-3 text-center text-muted">
                      <div className="col-4 border-end">
                        <i className="bi bi-arrows-angle-expand d-block mb-1"></i>
                        <span>{prop.area}</span>
                      </div>
                      <div className="col-4 border-end">
                        <i className="bi bi-file-earmark-person d-block mb-1"></i>
                        <span>{prop.beds} Beds</span>
                      </div>
                      <div className="col-4">
                        <i className="bi bi-droplet d-block mb-1"></i>
                        <span>{prop.baths} Baths</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Properties;
