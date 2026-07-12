import React, { useEffect, useRef, useState } from "react";
import "./About.css";

const Icon = {
  Design: (p) => (
    <svg viewBox="0 0 48 48" fill="none" {...p}>
      <path d="M24 6v6M24 36v6M6 24h6M36 24h6M11.5 11.5l4.2 4.2M32.3 32.3l4.2 4.2M11.5 36.5l4.2-4.2M32.3 15.7l4.2-4.2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="24" cy="24" r="7.5" stroke="currentColor" strokeWidth="2"/>
    </svg>
  ),
  Factory: (p) => (
    <svg viewBox="0 0 48 48" fill="none" {...p}>
      <path d="M6 42V20l9 6V20l9 6V20l9 6V12l9 6v24H6Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
      <path d="M12 42v-8M20 42v-8M28 42v-8M36 42v-8" stroke="currentColor" strokeWidth="2"/>
    </svg>
  ),
  Shield: (p) => (
    <svg viewBox="0 0 48 48" fill="none" {...p}>
      <path d="M24 5 41 11v11c0 11-7.2 18.6-17 21C14.2 40.6 7 33 7 22V11L24 5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
      <path d="M17 24l5 5 10-11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Wrench: (p) => (
    <svg viewBox="0 0 48 48" fill="none" {...p}>
      <path d="M32.5 8.5a10 10 0 0 0-13.6 11.9L7 32.3V41h8.7l11.9-11.9A10 10 0 0 0 39.5 15.5l-6.6 6.6-5-5 6.6-6.6Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    </svg>
  ),
  Check: (p) => (
    <svg viewBox="0 0 48 48" fill="none" {...p}>
      <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2"/>
      <path d="M16 24.5l5.5 5.5L33 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Bolt: (p) => (
    <svg viewBox="0 0 48 48" fill="none" {...p}>
      <path d="M26 4 10 27h11l-3 17 20-25H27l-1-15Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    </svg>
  ),
  Globe: (p) => (
    <svg viewBox="0 0 48 48" fill="none" {...p}>
      <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2"/>
      <path d="M6 24h36M24 6c4.6 5 7 11 7 18s-2.4 13-7 18c-4.6-5-7-11-7-18s2.4-13 7-18Z" stroke="currentColor" strokeWidth="2"/>
    </svg>
  ),
  Layers: (p) => (
    <svg viewBox="0 0 48 48" fill="none" {...p}>
      <path d="M24 6 4 17l20 11 20-11-20-11Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
      <path d="M4 24l20 11 20-11M4 31l20 11 20-11" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    </svg>
  ),
  Power: (p) => (
    <svg viewBox="0 0 48 48" fill="none" {...p}>
      <path d="M24 4v14M13 11l4.5 6M35 11l-4.5 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <rect x="10" y="20" width="28" height="22" rx="2" stroke="currentColor" strokeWidth="2"/>
      <path d="M16 27h16M16 33h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  Steel: (p) => (
    <svg viewBox="0 0 48 48" fill="none" {...p}>
      <rect x="6" y="14" width="36" height="26" rx="1.5" stroke="currentColor" strokeWidth="2"/>
      <path d="M6 22h36M14 14v26M22 14v26M30 14v26M38 14v26" stroke="currentColor" strokeWidth="2"/>
    </svg>
  ),
  Cement: (p) => (
    <svg viewBox="0 0 48 48" fill="none" {...p}>
      <path d="M10 42V19l7-6 7 6v23M24 42V25l7-5 7 5v17" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    </svg>
  ),
  Oil: (p) => (
    <svg viewBox="0 0 48 48" fill="none" {...p}>
      <path d="M24 5c7 8 12 15 12 22a12 12 0 1 1-24 0c0-7 5-14 12-22Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    </svg>
  ),
  Marine: (p) => (
    <svg viewBox="0 0 48 48" fill="none" {...p}>
      <path d="M6 30h36l-4 9a4 4 0 0 1-3.7 2.5H13.7A4 4 0 0 1 10 39l-4-9Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
      <path d="M24 6v16M24 22l10 8M16 12l8 10M16 22h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  Mining: (p) => (
    <svg viewBox="0 0 48 48" fill="none" {...p}>
      <path d="M8 40 30 8M40 40 18 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M8 8c8 2 14 8 16 16M40 8c-8 2-14 8-16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  Paper: (p) => (
    <svg viewBox="0 0 48 48" fill="none" {...p}>
      <path d="M13 6h16l7 7v29H13V6Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
      <path d="M29 6v7h7M18 24h12M18 30h12M18 36h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  Handling: (p) => (
    <svg viewBox="0 0 48 48" fill="none" {...p}>
      <rect x="5" y="24" width="20" height="12" rx="1" stroke="currentColor" strokeWidth="2"/>
      <path d="M25 30h8l6-8h4v14" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
      <circle cx="14" cy="38" r="3" stroke="currentColor" strokeWidth="2"/>
      <circle cx="34" cy="38" r="3" stroke="currentColor" strokeWidth="2"/>
    </svg>
  ),
  Arrow: (p) => (
    <svg viewBox="0 0 24 24" fill="none" {...p}>
      <path d="M5 12h13M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
};

const expertise = [
  { icon: Icon.Design, title: "Advanced Design and Engineering", text: "Using the latest CAD, FEA, and simulation tools for optimal performance." },
  { icon: Icon.Factory, title: "Precision Manufacturing", text: "High-quality fabrication of expansion joints, couplings, dampers, pressure vessels, and other critical components." },
  { icon: Icon.Shield, title: "Material and Process Expertise", text: "Ensuring durability and efficiency with top-grade materials and industry-best processes" },
  { icon: Icon.Wrench, title: "Customization and Innovation", text: "Tailor-made solutions to meet unique operational challenges across industries" },
  { icon: Icon.Check, title: "Quality & Compliance", text: "Adhering to global standards like ISO, ASME and other engineering certifications." },
];

const whyUs = [
  { icon: Icon.Check, title: "ISO CERTIFIED MANUFACTURING", text: "Manufactured under an ISO 9001:2015 quality management system for consistent, dependable performance." },
  { icon: Icon.Bolt, title: "HIGH PERFORMANCE PRODUCTS", text: "Engineered to withstand severe shock loads, vibration, misalignment and demanding industrial environments." },
  { icon: Icon.Globe, title: "GLOBAL INDUSTRIAL APPLICATIONS", text: "Trusted by power plants, steel mills, cement plants, mining, oil & gas and heavy engineering sectors worldwide." },
  { icon: Icon.Layers, title: "CUSTOM ENGINEERING", text: "Every application is different — we develop bespoke coupling and expansion joint solutions to match your requirements." },
];

const industries = [
  { icon: Icon.Power, label: "POWER PLANTS" },
  { icon: Icon.Steel, label: "STEEL INDUSTRY" },
  { icon: Icon.Cement, label: "CEMENT PLANTS" },
  { icon: Icon.Oil, label: "OIL AND GAS" },
  { icon: Icon.Marine, label: "MARINE INDUSTRY" },
  { icon: Icon.Mining, label: "MINING" },
  { icon: Icon.Paper, label: "PAPER INDUSTRY" },
  { icon: Icon.Handling, label: "MATERIAL HANDLING" },
];

const products = [
  {
    ref: "01",
    title: "GRID RESILIENT COUPLING",
    types: [
      "Standard Grid Resilient Couplings",
      "BrakeDrum Type Grid Resilient Coupling",
      "Flanged Type Grid Resilient Couplings",
      "Spacer Type Grid Resilient Coupling",
      "Taper Grid Type Resilient Couplings",
      "Grid Resiliant Couplings Type T / TL / TL2",
      "Grid Resiliant Couplings 54 Series",
    ],
  },
  {
    ref: "02",
    title: "GEAR COUPLING",
    types: [
      "Full Geared Couplings",
      "Half Geared Half Rigid Coupling",
      "BrakeDum Type Geared Couplings",
      "Spacer Type Geared Coupling",
      "FGEU Series Geared Couplings",
      "AGMA Standard Geared Couplings",
      "JIS Standard Geared Couplings",
    ],
  },
  {
    ref: "03",
    title: "PIN BUSH COUPLING",
    types: [
      "Pinbush Couplings with Curved Bush",
      "Pinbush Couplings with Straight Bush",
      "Brake Drum Type Pinbush Couplings",
    ],
  },
  {
    ref: "04",
    title: "TYRE COUPLING",
    types: ["Standart Tyre Couplings"],
  },
  {
    ref: "05",
    title: "EXPANSION JOINTS",
    types: [
      "Metallic Expansion Joints",
      "Non-Metallic Expansion Joints",
      "Rubber Expansion Joints",
    ],
  },
];

const stats = [
  { value: "500+", label: "Industrial Clients" },
  { value: "100+", label: "Product Variants" },
  { value: "20+", label: "Industries Served" },
  { value: "ISO 9001", label: "2015 Certified" },
];

const wheelLabels = [
  { name: "GRID", x: 418, y: 97, anchor: "middle" },
  { name: "GEAR", x: 534, y: 319, anchor: "start" },
  { name: "PIN BUSH", x: 305, y: 545, anchor: "middle" },
  { name: "TYRE", x: 67, y: 327, anchor: "end" },
  { name: "EXPANSION", x: 179, y: 98, anchor: "end" },
];

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current) return;
    const nodes = ref.current.querySelectorAll(".reveal");

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);
  return ref;
}

const About = () => {
  const scope = useReveal();
  const [activeProduct, setActiveProduct] = useState(0);
  const wheelRef = useRef(null);
  useEffect(() => {
    const cards = wheelRef.current?.querySelectorAll(".flx-wheel-product");
    if (!cards || cards.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveProduct(Number(entry.target.dataset.index));
          }
        });
      },
      {
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0,
      }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="flx-about-page" id="about" ref={scope}>
      <div className="flx-about-hero">
        <div className="flx-about-overlay"></div>
        <div className="flx-hero-grid-pattern" aria-hidden="true"></div>

        <div className="flx-about-container flx-hero-inner">
          <span className="flx-about-badge reveal">
            <Icon.Shield className="flx-badge-icon" />
            An ISO 9001:2015 Company
          </span>
          <span className="flx-about-subtitle reveal">ABOUT FLEXOCON</span>

          <h1 className="flx-about-title reveal">
            Engineering Reliability,
            <br />
            <span>Powering Global Industries</span>
          </h1>

          <p className="flx-about-description reveal">
            Flexocon Engineers (P) Ltd. is one of India's leading manufacturers
            of Industrial Couplings, Expansion Joints, Dampers and Heavy
            Engineering Equipment — designed for superior power transmission,
            vibration control and long-term operational reliability across
            demanding industrial applications.
          </p>

          <div className="flx-about-buttons reveal"></div>
        </div>

        <div className="flx-stat-bar reveal">
          <div className="flx-about-container flx-stat-bar-inner">
            {stats.map((s, i) => (
              <div className="flx-stat-item" key={i}>
                <h3>{s.value}</h3>
                <p>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="flx-company-section">
        <div className="flx-about-container flx-company-grid">
          <div className="flx-company-left reveal">
            <span className="flx-section-tag">Who We Are ?</span>
            <h2>Excellence Through Precision Engineering</h2>

            <p>
              Flexocon Engineers (P) Ltd. is a leading engineering solutions provider
              specializing in the design, manufacturing, and supply of high-quality
              industrial components and systems. With a commitment to innovation,
              precision, and customer satisfaction, we serve a wide range of
              industries, including power, steel, cement, paper, oil & gas, and more.
            </p>
            <p>
              Backed by modern manufacturing facilities, advanced engineering
              practices and strict quality control, we deliver products that
              improve operational efficiency, reduce maintenance costs and
              maximize machinery life.
            </p>
            <p>
              Our expertise lies in delivering cutting-edge engineering products
              such as expansion joints, dampers, pressure vessels, and other
              critical industrial equipment. Backed by advanced technology,
              stringent quality control, and a team of skilled professionals,
              we ensure world-class solutions tailored to our clients' needs.
            </p>
          </div>

          <div className="flx-company-right">
            <div className="flx-info-card reveal">
              <span className="flx-info-index">01</span>
              <h3>Our Mission</h3>
              <p>
                To deliver world-class industrial engineering solutions through
                continuous innovation, quality-driven manufacturing, and
                customer-centric design.
              </p>
            </div>

            <div className="flx-info-card reveal">
              <span className="flx-info-index">02</span>
              <h3>Our Vision</h3>
              <p>
                To revolutionize the coupling and expansion joint industry by
                delivering cutting-edge solutions that enhance efficiency and
                reliability. We are dedicated to expanding our global footprint
                through continuous research, investment in advanced manufacturing
                technologies, and strict adherence to international
                standards—becoming the preferred choice for heavy industries
                worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="flx-expertise">
        <div className="flx-about-container">
          <div className="flx-section-heading reveal">
            <span>Our Expertise</span>
            <h2>Built Around Engineering Innovation</h2>
            <p>
              Every Flexocon product is developed using modern engineering
              tools, premium materials and rigorous quality standards to
              ensure exceptional performance.
            </p>
          </div>

          <div className="flx-expertise-grid">
            {expertise.map((item, i) => (
              <div
                className="flx-expertise-card reveal"
                key={i}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="flx-icon">
                  <item.icon className="flx-icon-svg" />
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="flx-why-section">
        <div className="flx-about-container">
          <div className="flx-section-heading reveal">
            <span>Why Flexocon</span>
            <h2>Trusted Engineering. Proven Performance.</h2>
            <p>
              Our engineering philosophy combines innovation, precision
              manufacturing and rigorous quality assurance to deliver reliable
              industrial solutions for the world's toughest applications.
            </p>
          </div>
          <div className="flx-why-list">
            {whyUs.map((item, i) => (
              <div className="flx-why-row reveal" key={i} style={{ transitionDelay: `${i * 50}ms` }}>
                <div className="flx-why-icon">
                  <item.icon className="flx-icon-svg" />
                </div>
                <div className="flx-why-copy">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="flx-industries">
        <div className="flx-about-container">
          <div className="flx-section-heading reveal">
            <span>Industries We Serve</span>
            <h2>Powering Critical Industries</h2>
          </div>

          <div className="flx-industry-grid">
            {industries.map((ind, i) => (
              <div className="flx-industry-card reveal" key={i} style={{ transitionDelay: `${i * 40}ms` }}>
                <div className="flx-industry-icon-wrap">
                  <ind.icon className="flx-industry-icon" />
                </div>
                <span>{ind.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="flx-products-section" id="products">
        <div className="flx-about-container">
          <div className="flx-section-heading reveal">
            <span>Our Products</span>
            <h2>Complete Industrial Power Transmission Solutions</h2>
          </div>

          <div className="flx-wheel-layout" ref={wheelRef}>
            <div className="flx-wheel-side">
              <div className="flx-wheel-wrapper">
                <svg className="flx-wheel-svg" viewBox="0 0 600 600">
                  <defs>
                    <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#dfe6ef" />
                      <stop offset="100%" stopColor="#bcc7d5" />
                    </linearGradient>
                  </defs>

      
                  <path
                    d="M305 70 A230 230 0 0 1 510 180"
                    className={`flx-segment ${activeProduct === 0 ? "active" : ""}`}
                  />
                  <path
                    d="M515 185 A230 230 0 0 1 480 445"
                    className={`flx-segment ${activeProduct === 1 ? "active" : ""}`}
                  />
                  <path
                    d="M470 450 A230 230 0 0 1 130 450"
                    className={`flx-segment ${activeProduct === 2 ? "active" : ""}`}
                  />
                  <path
                    d="M120 445 A230 230 0 0 1 85 185"
                    className={`flx-segment ${activeProduct === 3 ? "active" : ""}`}
                  />
                  <path
                    d="M90 180 A230 230 0 0 1 295 70"
                    className={`flx-segment ${activeProduct === 4 ? "active" : ""}`}
                  />

                  {wheelLabels.map((label, i) => (
                    <text
                      key={i}
                      x={label.x}
                      y={label.y}
                      textAnchor={label.anchor}
                      className={`flx-wheel-label ${activeProduct === i ? "active" : ""}`}
                    >
                      {label.name}
                    </text>
                  ))}

                  <circle cx="300" cy="300" r="125" fill="none" stroke="#ffffff" strokeWidth="12" />
                  <circle cx="300" cy="300" r="90" fill="#0c447c" />

                  <text x="300" y="290" textAnchor="middle" className="flx-wheel-title">
                    FLEXOCON
                  </text>
                  <text x="300" y="318" textAnchor="middle" className="flx-wheel-subtitle">
                    ENGINEERS
                  </text>
                </svg>
              </div>
            </div>

            <div className="flx-wheel-products">
              {products.map((p, index) => (
                <div
                  key={index}
                  data-index={index}
                  className={`flx-wheel-product ${activeProduct === index ? "active" : ""}`}
                  onMouseEnter={() => setActiveProduct(index)}
                >
                  <div className="flx-product-head">
                    <span className="flx-product-ref">{p.ref}</span>
                    <h3>{p.title}</h3>
                  </div>
                  {p.types && (
                    <div className="flx-product-types">
                      {p.types.map((type, i) => (
                        <p key={i}>{type}</p>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="flx-about-cta">
        <div className="flx-hero-grid-pattern flx-cta-pattern" aria-hidden="true"></div>
        <div className="flx-about-container reveal">
          <span className="flx-section-tag flx-cta-tag">Get In Touch</span>
          <h2>Let's Build Reliable Industrial Solutions Together</h2>
          <p>
            Discover precision-engineered products that maximize equipment
            performance, reduce downtime and improve operational efficiency.
          </p>
          <a href="#contact" className="flx-about-btn-primary">
  Contact Our Experts
  <Icon.Arrow className="flx-btn-arrow" />
</a>
        </div>
      </section>
    </section>
  );
};

export default About;