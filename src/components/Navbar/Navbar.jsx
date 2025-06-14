import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { FaGlobe, FaBars, FaTimes } from "react-icons/fa";

const EpicNavbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoDropdownOpen, setLogoDropdownOpen] = useState(false);
  const [distributeDropdownOpen, setDistributeDropdownOpen] = useState(false);
  const [globalDropdownOpen, setGlobalDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);

  const toggleDropdown = (dropdownSetter, currentState) => {
    dropdownSetter(!currentState);
  };

  const closeAllDropdowns = () => {
    setLogoDropdownOpen(false);
    setDistributeDropdownOpen(false);
    setGlobalDropdownOpen(false);
  };

  return (
    <nav className="epic-navbar">
      <div className="left-section">
        {/* Logo + Dropdown */}
        <div
          className="logo-dropdown-container"
          onClick={() => toggleDropdown(setLogoDropdownOpen, logoDropdownOpen)}
          onMouseEnter={() => !isMobile && setLogoDropdownOpen(true)}
          onMouseLeave={() => !isMobile && setLogoDropdownOpen(false)}
        >
          <img src="/img/logo.png" alt="Epic Games Logo" className="logo" />
          {logoDropdownOpen && (
            <div className="dropdown-menu open">
              <a href="#">About Epic</a>
              <a href="#">Careers</a>
              <a href="#">Press</a>
            </div>
          )}
        </div>

        {/* Store */}
        <span className="store">STORE</span>

        {/* Distribute Dropdown - only on desktop */}
        {!isMobile && (
          <div
            className="distribute-dropdown-container"
            onClick={() =>
              toggleDropdown(setDistributeDropdownOpen, distributeDropdownOpen)
            }
            onMouseEnter={() => !isMobile && setDistributeDropdownOpen(true)}
            onMouseLeave={() => !isMobile && setDistributeDropdownOpen(false)}
          >
            <span className="distribute-link">
              <span className="distribute-text">Distribute</span>
              <span className="dropdown-arrow">▾</span>
            </span>
            {distributeDropdownOpen && (
              <div className="dropdown-menu open">
                <a href="#">Publish Your Game</a>
                <a href="#">Partner Program</a>
                <a href="#">Developer Support</a>
              </div>
            )}
          </div>
        )}

        {/* Support Link and Mobile Menu */}
        <div className={`menu-links ${mobileMenuOpen ? "mobile-open" : ""}`}>
          <a href="#" className="link">
            Support
          </a>

          {/* Mobile Only Dropdown + User Info */}
          {isMobile && mobileMenuOpen && (
            <div className="mobile-only-menu">
              <div
                className="global-dropdown-container"
                onClick={() =>
                  toggleDropdown(setGlobalDropdownOpen, globalDropdownOpen)
                }
              >
                <FaGlobe className="icon" />
                {globalDropdownOpen && (
                  <div className="dropdown-menu open">
                    <a href="#">English</a>
                    <a href="#">Spanish</a>
                    <a href="#">Chinese</a>
                  </div>
                )}
              </div>

              <div className="user-initial">A</div>
              <span className="username">Admin</span>
            </div>
          )}
        </div>
      </div>

      <div className="right-section">
        {/* Desktop Language Selector */}
        {!isMobile && (
          <div
            className="global-dropdown-container"
            onClick={() =>
              toggleDropdown(setGlobalDropdownOpen, globalDropdownOpen)
            }
            onMouseEnter={() => setGlobalDropdownOpen(true)}
            onMouseLeave={() => setGlobalDropdownOpen(false)}
          >
            <FaGlobe className="icon" />
            {globalDropdownOpen && (
              <div className="dropdown-menu open">
                <a href="#">English</a>
                <a href="#">Spanish</a>
                <a href="#">Chinese</a>
              </div>
            )}
          </div>
        )}

        {/* Desktop User Info */}
        {!isMobile && (
          <>
            <div className="user-initial">A</div>
            <span className="username">Admin</span>
          </>
        )}

        {/* Download Button */}
        <button className="download-btn">Download</button>

        {/* Mobile Menu Toggle */}
        <button
          className="mobile-menu-btn"
          onClick={() => {
            toggleMobileMenu();
            closeAllDropdowns();
          }}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};

export default EpicNavbar;
