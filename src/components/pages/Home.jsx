import React, { useEffect, useState } from 'react';
import './Home.css';
import About from "./About";

import productImg from "../../assets/hero-coupling.jpg";
import product1 from "../../assets/product-nonmetallic.jpg";
import product2 from "../../assets/product-metallic.jpg";
import product3 from "../../assets/product-rubber.jpg";
import product4 from "../../assets/product-gear.jpg";
import product5 from "../../assets/product-tyre.jpg";
import product6 from "../../assets/product-grid.jpg";
import acc from "../../assets/clients/acc.png";
import ambuja from "../../assets/clients/ambuja.png";
import bhel from "../../assets/clients/bhel.png";
import dalmia from "../../assets/clients/dalmia.png";
import indian from "../../assets/clients/indian.png";
import maha from "../../assets/clients/maha.png";
import jindal from "../../assets/clients/jindal.png";
import ntpc from "../../assets/clients/ntpc.png";
import ramco from "../../assets/clients/ramco.png";
import star from "../../assets/clients/star.png";
import tata from "../../assets/clients/tata.png";
import ultratech from "../../assets/clients/ultratech.png";
import worldMap from "../../assets/map.png";
import logo from "../../assets/logo11.PNG";

function Home() {
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const fontLink = document.createElement('link');
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap';
    fontLink.rel = 'stylesheet';
    document.head.appendChild(fontLink);
  }, []);

  const productItems = [
    {
      id: 1,
      title: 'NON-METALLIC EXPANSION JOINTS',
      img: product1
    },
    {
      id: 2,
      title: 'METALLIC EXPANSION JOINTS',
      img: product2
    },
    {
      id: 3,
      title: 'RUBBER EXPANSION JOINTS',
      img: product3
    },
    {
      id: 4,
      title: 'GRID RESILIENT COUPLING',
      img: product4
    },
    {
      id: 5,
      title: 'GEAR COUPLING',
      img: product5
    },
    {
      id: 6,
      title: 'PIN-BRUSH AND TYRE COUPLING',
      img: product6
    }
  ];

  const clientRow1 = [
    { name: "ACC", logo: acc },
    { name: "Ambuja", logo: ambuja },
    { name: "BHEL", logo: bhel },
    { name: "Dalmia", logo: dalmia },
    { name: "Indian Oil", logo: indian },
    { name: "Maha Cement", logo: maha },
  ];

  const clientRow2 = [
    { name: "Jindal", logo: jindal },
    { name: "NTPC", logo: ntpc },
    { name: "Ramco", logo: ramco },
    { name: "Star Cement", logo: star },
    { name: "Tata Steel", logo: tata },
    { name: "UltraTech", logo: ultratech },
  ];

  return (
    <div className="flx-home-scrollContainer">
      <div className="flx-home-videoWrapper">
        <video autoPlay loop muted playsInline className="animate-video flx-home-video">
          <source src="/videos/tyre1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="flx-home-videoBlueOverlay"></div>
        <div className="flx-home-vignetteOverlay"></div>
      </div>
      <section
  id="home"
  className="flx-home-heroSectionContainer flx-home-hero"
>
        <div className="flx-home-heroSplitWrapper">
          <div className="flx-home-leftColumn">
            <h2 className="animate-tagline flx-home-tagline">
              ENGINEERING PRECISION POWER TRANSMISSION SINCE 2001
            </h2>
            <p className="animate-paragraph flx-home-bodyParagraph">
              Flexocon Engineers Pvt. Ltd. established in 2001, backed by few qualified Mechanical Engineers 
              having more than 25 years Experience in Mechanical Power Transmission Coupling & Expansion Joints 
              field at various application. The technical calculations of Flexocon Engineers Pvt. Ltd. designs 
              are based on recognized standards and carried out on our specially developed computer program 
              and displayed on our CAD system.
            </p>
            
            <div className="animate-actions">
              <div className="flx-home-buttonRow">
                <button
                  className="flx-home-primaryBtn"
                  onClick={() => {
                    document.getElementById("products").scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }}
                >
                  Explore Products <span style={{ marginLeft: "8px" }}>→</span>
                </button>
              </div>

              <div className="flx-home-statsContainer">
                <div className="flx-home-statBox">
                  <div className="flx-home-statNumber">25+</div>
                  <div className="flx-home-statLabel">YEARS OF<br />ENGINEERING</div>
                </div>
                <div className="flx-home-statBox">
                  <div className="flx-home-statNumber">20+</div>
                  <div className="flx-home-statLabel">INDUSTRIES<br />SERVED</div>
                </div>
                <div className="flx-home-statBox">
                  <div className="flx-home-statNumber">ISO</div>
                  <div className="flx-home-statLabel">9001 : 2015<br />CERTIFIED</div>
                </div>
              </div>
            </div>
          </div>
          <div className="animate-showcase flx-home-rightColumn">
            <div className="pulsing-glow flx-home-vectorGlowRing"></div>
            <div className="flx-home-imageCardContainer">
              <div className="floating-badge flx-home-torqueBadge">
                <span className="flx-home-badgeTitle">TORQUE CAPACITY</span>
                <span className="flx-home-badgeValue">15,000 Nm</span>
              </div>
              <img 
                src={productImg} 
                alt="Flexocon Premium Coupling Showcase" 
                className="flx-home-productDisplayImage" 
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>
          </div>

        </div>
      </section>
    
      <section className="flx-home-rangeSection">
        <div className="flx-home-rangeContentContainer">
          <div className="flx-home-rangeHeaderBlock">
            <span className="flx-home-rangeMiniTag">— OUR RANGE</span>
            <h3 className="flx-home-rangeMainHeading">
              TWO DISCIPLINES. <span className="flx-home-rangeCyanHighlight">ONE STANDARD OF ENGINEERING.</span>
            </h3>
          </div>
        </div>
      </section>

      <section id="products" className="flx-home-productsGridSection">
        <div className="flx-home-gridHeaderBlock">
          <span className="flx-home-gridMiniTag">1 - EXPANSION JOINTS</span>
          <div className="flx-home-gridDividerLine"></div>
        </div>

        <div className="flx-home-masterProductsGrid" style={{ marginBottom: '10px' }}>
          {productItems.slice(0, 3).map((prod) => {
            const isCardHovered = hoveredCard === prod.id;
            return (
              <div
                key={prod.id}
                onMouseEnter={() => setHoveredCard(prod.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`flx-home-productCard ${isCardHovered ? 'flx-home-productCard-hover' : ''}`}
              >
                <div className="flx-home-cardImageContainer">
                  <div className="flx-home-cardMiniTagBadge">{prod.tag}</div>
                  {prod.img ? (
                    <img 
                      src={prod.img} 
                      alt={prod.title} 
                      className={`flx-home-cardImgAsset ${isCardHovered ? 'flx-home-cardImgAsset-hover' : ''}`}
                    />
                  ) : (
                    <div className="flx-home-imageFallbackPlaceholder">[ Product Asset View ]</div>
                  )}
                </div>

                <div className="flx-home-cardInfoContainer">
                  <div className="flx-home-titleArrowRow">
                    <h4 className="flx-home-cardProductTitle">{prod.title}</h4>
                    <div className={`flx-home-cardArrowCircle ${isCardHovered ? 'flx-home-cardArrowCircle-hover' : ''}`}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                      </svg>
                    </div>
                  </div>
                  <p className="flx-home-cardProductDesc">{prod.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flx-home-gridHeaderBlock" style={{ marginTop: '40px' }}>
          <span className="flx-home-gridMiniTag">2 - INDUSTRIAL COUPLINGS</span>
          <div className="flx-home-gridDividerLine"></div>
        </div>

        <div className="flx-home-masterProductsGrid">
          {productItems.slice(3, 6).map((prod) => {
            const isCardHovered = hoveredCard === prod.id;
            return (
              <div
                key={prod.id}
                onMouseEnter={() => setHoveredCard(prod.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`flx-home-productCard ${isCardHovered ? 'flx-home-productCard-hover' : ''}`}
              >
                <div className="flx-home-cardImageContainer">
                  <div className="flx-home-cardMiniTagBadge">{prod.tag}</div>
                  {prod.img ? (
                    <img 
                      src={prod.img} 
                      alt={prod.title} 
                      className={`flx-home-cardImgAsset ${isCardHovered ? 'flx-home-cardImgAsset-hover' : ''}`}
                    />
                  ) : (
                    <div className="flx-home-imageFallbackPlaceholder">[ Product Asset View ]</div>
                  )}
                </div>

                <div className="flx-home-cardInfoContainer">
                  <div className="flx-home-titleArrowRow">
                    <h4 className="flx-home-cardProductTitle">{prod.title}</h4>
                    <div className={`flx-home-cardArrowCircle ${isCardHovered ? 'flx-home-cardArrowCircle-hover' : ''}`}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                      </svg>
                    </div>
                  </div>
                  <p className="flx-home-cardProductDesc">{prod.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
  
      <section className="flx-home-clients-section">
        <div className="flx-home-clients-header">
          <span className="flx-home-rangeMiniTag">
            — TRUSTED BY INDUSTRY LEADERS
          </span>
          <h2 className="flx-home-clients-title">
            OUR <span>VALUED CLIENTS</span>
          </h2>
          <p className="flx-home-clients-subtitle">
            Trusted by India's leading companies across Cement, Steel,
            Power, Oil & Gas and Heavy Engineering.
          </p>
        </div>

        <div className="flx-home-logo-track">
          <div className="flx-home-logo-slider left">
            {[...clientRow1, ...clientRow1].map((client, index) => (
              <div className="flx-home-logo-item" key={index}>
                <img src={client.logo} alt={client.name} />
              </div>
            ))}
          </div>
        </div>

        <div className="flx-home-logo-track">
          <div className="flx-home-logo-slider right">
            {[...clientRow2, ...clientRow2].map((client, index) => (
              <div className="flx-home-logo-item" key={index}>
                <img src={client.logo} alt={client.name} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="flx-home-global-section">
  <div className="flx-home-global-header">
          <p className="flx-home-global-small">— GLOBAL ASSOCIATES</p>
          <h2 className="flx-home-global-title">OUR GLOBAL NETWORK</h2>
          <p className="flx-home-global-desc">
            Our trusted associates extend our global reach by delivering
            Flexocon products across UK & Europe, Vietnam and Saudi Arabia.
          </p>
        </div>
  <div className="flx-perspective-container">
    <div className="flx-home-map-wrapper">
      <div className="flx-map-grid"></div>

      <img
        src={worldMap}
        alt="Flexocon Global Presence Map"
        className="flx-home-world-map"
      />
      <div className="flx-marker uk">
        <div className="flx-dot-pulse"></div>
        <div className="flx-dot"></div>
        <div className="flx-popup-card">
          <div className="flx-card-accent"></div>
          <span className="flx-popup-tag">UK &amp; EUROPE</span>
          <h3>Power Transmissions International Ltd</h3>
          <p className="flx-address">2, Chillingham, Dosthill, Staffordshire, B77 1JH, England</p>
          
          <div className="flx-expanded-details">
            <div className="flx-contact-line"><strong>Director:</strong> Paul Selini</div>
            <div className="flx-contact-line"><strong>M:</strong> +44 1827 261202 / +44 7780 613170</div>
            <div className="flx-contact-line"><strong>E:</strong> sales@ptigroup.co.uk</div>
            <a href="http://www.ptigroup.co.uk" target="_blank" rel="noopener noreferrer" className="flx-card-btn">Visit Corporate Web →</a>
          </div>
        </div>
      </div>
      <div className="flx-marker saudi">
        <div className="flx-dot-pulse"></div>
        <div className="flx-dot"></div>
        <div className="flx-popup-card">
          <div className="flx-card-accent"></div>
          <span className="flx-popup-tag">SAUDI ARABIA</span>
          <h3>Power Flow Company (PFC)</h3>
          <p className="flx-address">Building 6917, Street 7A, An Nahdah District, Dammam 31518</p>
          
          <div className="flx-expanded-details">
            <div className="flx-contact-line"><strong>Representative:</strong> Saifulla Shareef</div>
            <div className="flx-contact-line"><strong>M:</strong> +966 13 814 3773 / +966 54 054 6789</div>
            <div className="flx-contact-line"><strong>E:</strong> saif@powerflow.com.sa</div>
            <a href="http://www.powerflow.com.sa" target="_blank" rel="noopener noreferrer" className="flx-card-btn">Visit Corporate Web →</a>
          </div>
        </div>
      </div>

      <div className="flx-marker vietnam">
        <div className="flx-dot-pulse"></div>
        <div className="flx-dot"></div>
        <div className="flx-popup-card">
          <div className="flx-card-accent"></div>
          <span className="flx-popup-tag">VIETNAM</span>
          <h3>LE Duong Trading Investment Co. Ltd</h3>
          <p className="flx-address">No 28A, 26 Street, Tang Nhon Phu A Ward, District 9, HCM City</p>
          
          <div className="flx-expanded-details">
            <div className="flx-contact-line"><strong>Director:</strong> Henry Duong</div>
            <div className="flx-contact-line"><strong>M:</strong> (+84) 0982 599 499</div>
            <div className="flx-contact-line"><strong>E:</strong> hienkhabk@gmail.com</div>
            <a href="http://www.leduonggroup.com" target="_blank" rel="noopener noreferrer" className="flx-card-btn">Visit Corporate Web →</a>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

      <footer className="flx-footer-section">
  <div className="flx-footer-container">
    
    <div className="flx-footer-brand">
      <div className="flx-footer-logo-wrapper">
        <img 
          src={logo} 
          alt="Flexocon Logo" 
          className="flx-footer-logo-image" 
        />
        <span className="flx-footer-tagline">
          FLEXIBILITY IS OUR BUSINESS!
        </span>
      </div>

      <div className="flx-footer-manufacturer">
        <span className="flx-label-sm">
          MANUFACTURED BY
        </span>
        <h3 className="flx-company-name">
          FLEXOCON ENGINEERS (P) LTD.
        </h3>
        <p className="flx-footer-about">
          Pioneering world-class heavy engineering solutions since 2001. We specialize 
          in high-end, vibration-resilient Industrial Couplings and critical Expansion Joints 
          engineered to sustain demanding conditions across Global Cement, Steel, Power, 
          Mining, and Energy sectors.
        </p>
      </div>
    </div>

<div className="flx-footer-column">
  <h4>Quick Navigation</h4>
  <ul className="flx-footer-nav-links">
    <li><a href="/">Home</a></li>
    <li><a href="/about">About Us</a></li>
    <li><a href="/products">Products</a></li>
    <li><a href="/clients">Clients</a></li>
    <li><a href="/quality-policy">Quality Policy</a></li>
    <li><a href="/contact">Contact</a></li>
    <li>
      <a 
        href="/brochure.pdf" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flx-download-link"
      >
        Download Brochure
      </a>
    </li>
  </ul>
</div>
    <div className="flx-footer-column">
      <h4>Registered Office &amp; Works</h4>
      <p className="flx-office-address">
        29 Dr. Gopal Chatterjee Road,<br />
        Sukchar,<br />
        Kolkata - 700 115,<br />
        West Bengal, India.
      </p>
    </div>

    <div className="flx-footer-column">
      <h4>Sales &amp; Contact Office</h4>
      <p className="flx-office-address">
        Abakash Apartment,<br />
        Flat No. 1 C, 1st Floor,<br />
        14, MIG Housing Estate,<br />
        Sodepur,<br />
        Kolkata - 700 110,<br />
        West Bengal, India.
      </p>
    </div>

    <div className="flx-footer-column">
      <h4>Commercial Gateway</h4>
      
      <p className="flx-contact-block">
        <strong className="flx-contact-label">P :</strong>
        <a href="tel:+913325230864" className="flx-footer-link-item">+91 33 2523 0864</a>
        <a href="tel:+913335578207" className="flx-footer-link-item">+91 33 3557 8207</a>
      </p>

      <p className="flx-contact-block">
        <strong className="flx-contact-label">E :</strong>
        <a href="mailto:info@flexoconindia.com" className="flx-footer-link-item">info@flexoconindia.com</a>
      </p>

      <p className="flx-contact-block">
        <strong className="flx-contact-label">Web Infrastructure :</strong>
        <a
          href="https://www.flexoconindia.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flx-footer-link-item web-url"
        >
          www.flexoconindia.com
        </a>
      </p>
    </div>

  </div>
  <div className="flx-footer-bottom">
    <div className="flx-footer-bottom-container">
      <span>
        &copy; 2026 FLEXOCON ENGINEERS (P) LTD. All Rights Reserved.
      </span>
      <span className="flx-iso-status">
        ISO 9001 : 2015 Certified Company
      </span>
    </div>
  </div>
</footer>
</div>
  );
}

export default Home;