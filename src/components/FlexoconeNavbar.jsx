import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./FlexoconeNavbar.css";
import logoImg from "../assets/logo.png";

function FlexoconeNavbar() {
  const [hoveredNav, setHoveredNav] = useState(null);
  const [hoveredSocial, setHoveredSocial] = useState(null);

  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Client", path: "/client" },
    { name: "Quality Policy", path: "/quality" },
    { name: "Contact", path: "/contact" },
    { name: "Download Brochure", path: "#" },
  ];

  const socialIcons = ["f", "t", "g+"];

  return (
    <header className="flx-nav-header">

      <div className="flx-nav-topRow">

        <div className="flx-nav-logoContainer">

          <div className="flx-nav-logoWrapper">
            <img
              src={logoImg}
              alt="Flexocon Logo"
              className="flx-nav-logoImage"
            />
          </div>

          <span className="flx-nav-companyName">
            Flexocon Engineers Pvt. Ltd.
          </span>

        </div>

        <div className="flx-nav-socialContainer">

          {socialIcons.map((icon, idx) => (
            <span
              key={idx}
              onMouseEnter={() => setHoveredSocial(idx)}
              onMouseLeave={() => setHoveredSocial(null)}
              className={`flx-nav-socialIcon ${
                hoveredSocial === idx
                  ? "flx-nav-socialIcon-hover"
                  : ""
              }`}
            >
              {icon}
            </span>
          ))}

        </div>

      </div>


      <nav className="flx-nav-menu">

        <ul className="flx-nav-navList">

          {navItems.map((item, idx) => {

            const isHovered = hoveredNav === idx;

            const isActive =
              item.path !== "#" &&
              location.pathname === item.path;

            return (

              <li
                key={idx}
                onMouseEnter={() => setHoveredNav(idx)}
                onMouseLeave={() => setHoveredNav(null)}
                className={`flx-nav-navItem ${
                  isActive ? "flx-nav-activeNavItem" : ""
                } ${
                  isHovered && !isActive
                    ? "flx-nav-navItem-hover"
                    : ""
                }`}
              >

                {item.name === "Download Brochure" ? (

                  <span
                    onClick={() => {
                    }}
                  >
                    {item.name}
                  </span>

                ) : (

                  <Link
                    to={item.path}
                    style={{
                      color: "inherit",
                      textDecoration: "none",
                    }}
                  >
                    {item.name}
                  </Link>

                )}

                <span
                  className="flx-nav-underline"
                  style={{
                    transform:
                      isHovered || isActive
                        ? "scaleX(1)"
                        : "scaleX(0)",
                    backgroundColor: isActive
                      ? "#ffffff"
                      : "#ff6b00",
                  }}
                />

              </li>

            );
          })}

        </ul>

      </nav>

    </header>
  );
}

export default FlexoconeNavbar;