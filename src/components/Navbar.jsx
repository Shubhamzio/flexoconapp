import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Optional: Add subtle background on scroll for readability while keeping initial transparency
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (isOpen) setActiveDropdown(null);
  };

  const menuData = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    {
      name: "Products",
      dropdown: [
        {
          name: "Expansion Joints",
          subDropdown: [
            {
              name: "Non-Metallic Expansion Joints",
              path: "/products/expansion/non-metallic",
            },
            {
              name: "Metallic Expansion Joints",
              path: "/products/expansion/metallic",
            },
            {
              name: "Rubber Expansion Joints",
              path: "/products/expansion/rubber",
            },
          ],
        },
        {
          name: "Mechanical Power Transmission Coupling",
          subDropdown: [
            {
              name: "Resilient Coupling",
              path: "/products/coupling/resilient",
            },
            { name: "Geared Coupling", path: "/products/coupling/geared" },
            {
              name: "Pin Bush & Tyre Coupling",
              path: "/products/coupling/pin-bush-tyre",
            },
          ],
        },
      ],
    },
    { name: "Clients", path: "/clients" },
    { name: "Quality Policy", path: "/quality-policy" },
    { name: "Contact", path: "/contact" },
    { name: "Download Brochure", path: "/brochure" },
  ];

  const dropdownVariants = {
    hidden: { opacity: 0, height: 0, y: -10 },
    visible: {
      opacity: 1,
      height: "auto",
      y: 0,
      transition: { duration: 0.25, ease: "easeOut" },
    },
  };

  return (
    <motion.nav
      className={`flex-nav__container ${isScrolled ? "flex-nav__scrolled" : ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="flex-nav__wrapper">
        <a href="/" className="flex-nav__logo">
          <img src="/assets/logo.png" alt="Flexocon India Private Limited" />
        </a>

        {/* Desktop Menu */}
        <ul className="flex-nav__desktop-menu">
          {menuData.map((item) => (
            <li
              key={item.name}
              className={`flex-nav__item ${item.dropdown ? "flex-nav__item--dropdown" : ""}`}
              onMouseEnter={() => !isOpen && setActiveDropdown(item.name)}
              onMouseLeave={() => !isOpen && setActiveDropdown(null)}
            >
              <a href={item.path || "#"} className="flex-nav__link">
                {item.name}
                {item.dropdown && (
                  <span className="flex-nav__chevron">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="currentColor"
                    >
                      <path
                        d="M2.5 4.5L6 8L9.5 4.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        fill="none"
                      />
                    </svg>
                  </span>
                )}
              </a>

              <AnimatePresence>
                {item.dropdown && activeDropdown === item.name && (
                  <motion.div
                    className="flex-nav__dropdown"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={dropdownVariants}
                  >
                    {item.dropdown.map((sub) => (
                      <div key={sub.name} className="flex-nav__dropdown-item">
                        <span className="flex-nav__dropdown-title">
                          {sub.name}
                        </span>
                        <div className="flex-nav__subdropdown">
                          {sub.subDropdown.map((ss) => (
                            <a
                              key={ss.name}
                              href={ss.path}
                              className="flex-nav__dropdown-link"
                            >
                              {ss.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>

        <div className="flex-nav__right">
          <div className="flex-nav__socials">
            <a href="#" aria-label="Facebook" className="flex-nav__social-icon">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a href="#" aria-label="X" className="flex-nav__social-icon">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>

          <motion.button
            className="flex-nav__hamburger"
            onClick={toggleMenu}
            animate={{ rotate: isOpen ? 360 : 0, scale: isOpen ? 0.9 : 1 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            aria-label="Toggle mobile menu"
          >
            <span
              className={`hamburger__line ${isOpen ? "hamburger__line--active" : ""}`}
            ></span>
            <span
              className={`hamburger__line ${isOpen ? "hamburger__line--active" : ""}`}
            ></span>
            <span
              className={`hamburger__line ${isOpen ? "hamburger__line--active" : ""}`}
            ></span>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="flex-nav__mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <ul className="mobile__list">
              {menuData.map((item) => (
                <li key={item.name} className="mobile__item">
                  <a
                    href={item.path || "#"}
                    className="mobile__link"
                    onClick={() => !item.dropdown && setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                  {item.dropdown && (
                    <div className="mobile__dropdown">
                      {item.dropdown.map((sub) => (
                        <div key={sub.name} className="mobile__sub">
                          <span className="mobile__sub-title">{sub.name}</span>
                          <ul className="mobile__sub-list">
                            {sub.subDropdown.map((ss) => (
                              <li key={ss.name}>
                                <a
                                  href={ss.path}
                                  className="mobile__sub-link"
                                  onClick={() => setIsOpen(false)}
                                >
                                  {ss.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
