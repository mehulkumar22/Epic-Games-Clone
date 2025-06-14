import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { FaArrowUp } from "react-icons/fa";
import "./Footer.css";

const menuData = [
  {
    title: "Games",
    items: ["Fortnite", "Fall Guys", "Rocket League", "Unreal Tournament", "Infinity Blade", "Shadoww Complex", "Robo Recall"],
  },
  {
    title: "Marketplace",
    items: ["Epic Store", "Fab", "Sketchfab", "ArtStation", "Store Refund Policy", "Store EULA"],
  },
  {
    title: "Tools",
    items: ["Unreal Engine", "UEFN", "MetaHuman", "Twinmmotion", "Megascans","RealityScan", "Rad Game Tools"],
  },
  {
    title: "Online Services",
    items: ["Epic Online Services", "Kid Web Services", "Service Agreement", "Acceptable Use Policy", "Trust Statement", "Subprocessor List"],
  },
  {
    title: "Company",
    items: ["About", "Newsroom", "Careers", "Students", "UX Research"],
  },
  {
    title: "Resources",
    items: ["Dev Community", "MegaGrants", "Support-A-Creator", "Creator Agreement", "Distribute on Epic Games", "Unreal Engine Branding Guidelines", "Fan Art Policy", "Community Rules", "EU Digital Services Act Inquiries", "Epic Pro Support"],
  },
];

export default function Footer() {
  // State to track which menu is open on mobile (store by index)
  const [openIndex, setOpenIndex] = useState(null);

  const toggleMenu = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Top row */}
        <div className="top-row">
          <div className="store-title">STORE</div>
          <div className="social-media">
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Twitter"><FaInstagram /></a>
            <a href="#" aria-label="Instagram"><FaYoutube /></a>
          </div>
        </div>

        <hr className="underline" />

        {/* Menu columns */}
        <div className="menu-row">
          {menuData.map(({ title, items }, index) => (
            <div key={title} className="menu-column">
              <div
                className="menu-header"
                onClick={() => toggleMenu(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if(e.key === "Enter") toggleMenu(index)}}
              >
                <h3>{title}</h3>
                <span className="chevron">
                  {openIndex === index ? <FiChevronUp /> : <FiChevronDown />}
                </span>
              </div>
              <ul className={`menu-list ${openIndex === index ? "open" : ""}`}>
                {items.map((item) => (
                  <li key={item}>
                    <a href="#">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr className="underline" />

        {/* Copyright and Back to Top */}
        <div className="bottom-row">
          <div className="copyright">
            &copy; 2025, Epic Games, Inc. All rights reserved. Epic, Epic Games, the Epic Games logo, Fortnite, the Fortnite logo, Unreal, Unreal Engine, the Unreal Engine logo, Unreal Tournament, and the Unreal Tournament logo are trademarks or registered trademarks of Epic Games, Inc. in the United States of America and elsewhere. Other brands or product names are the trademarks of their respective owners. Our websites may contain links to other sites and resources provided by third parties. These links are provided for your convenience only. Epic Games has no control over the contents of those sites or resources, and accepts no responsibility for them or for any loss or damage that may arise from your use of them.
          </div>
        </div>

        {/* Full width links */}
        <div className="full-links">
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Safety & Security</a>
          <a href="#">Store Refund Policy</a>
          <a href="#">Publisher Index</a>

        </div>
        <div className="back-to-top-container">
          <button
            className="back-to-top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Back To Top <FaArrowUp style={{ marginLeft: "8px" }} />
          </button>
        </div>
      
      </div>
    </footer>
  );
}
