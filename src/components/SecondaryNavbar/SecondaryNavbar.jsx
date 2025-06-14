import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FiHeart, FiShoppingCart } from "react-icons/fi";
import games from "../../data/GameCardData";
import "./SecondaryNavbar.css";

const SubNavbar = () => {
  const [accordionText, setAccordionText] = useState("Discover");
  const [isAccordionOpen, setAccordionOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  const filteredGames = games.filter(game =>
    game.name.toLowerCase().includes(query.toLowerCase())
  );

  const handleAccordionSelect = (text) => {
    setAccordionText(text);
    setAccordionOpen(false);
  };

  return (
    <>
      {/* Mobile Navbar */}
      <div className="main">
        <div className="left_icon">
          <BiSearch
            className="icon"
            onClick={() => setSearchOpen(prev => !prev)}
            aria-label="Toggle Search"
          />
        </div>

        <div
          className="center_accordion"
          role="button"
          tabIndex={0}
          onClick={() => setAccordionOpen(prev => !prev)}
          onKeyDown={e => (e.key === "Enter" || e.key === " ") && setAccordionOpen(prev => !prev)}
        >
          <div className="accordion">
            <p className="accordion_text">{accordionText}</p>
            {isAccordionOpen ? (
              <IoIosArrowUp className="icon_a" />
            ) : (
              <IoIosArrowDown className="icon_a" />
            )}
          </div>
        </div>

        <div className="right_wishlist_mobile">
          <FiShoppingCart className="wishlist_icon" aria-label="Cart" />
        </div>

        {isSearchOpen && (
          <input
            type="text"
            className="mobile_search_input"
            placeholder="Search Store..."
            autoFocus
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
        )}

        {isSearchOpen && query && (
          <div className="search_results">
            {filteredGames.length ? (
              filteredGames.map(game => (
                <div key={game.id} className="search_item">{game.name}</div>
              ))
            ) : (
              <div className="search_item">No results found</div>
            )}
          </div>
        )}

        {isAccordionOpen && (
          <div className="accordion_modal">
            {["Discover", "Browse", "News"].map(option => (
              <React.Fragment key={option}>
                <a
                  href="/"
                  onClick={() => handleAccordionSelect(option)}
                  className="option"
                >
                  {option}
                </a>
                <div className="line" />
              </React.Fragment>
            ))}
          </div>
        )}
      </div>

      {/* Desktop Navbar */}
      <div className="main_desktop">
        <div className="left">
          <div className="search_box">
            <BiSearch />
            <input
              type="text"
              placeholder="Search Store"
              value={query}
              onChange={e => setQuery(e.target.value)}
            />
            {query && (
              <div className="search_results desktop">
                {filteredGames.length ? (
                  filteredGames.map(game => (
                    <div key={game.id} className="search_item">{game.name}</div>
                  ))
                ) : (
                  <div className="search_item">No results found</div>
                )}
              </div>
            )}
          </div>

          {["Discover", "Browse", "News"].map(option => (
            <a key={option} href="/" className="option_desktop">{option}</a>
          ))}
        </div>

        <div className="right_desktop_wishlist">
          <span className="wishlist_text">Wishlist</span>
          <span className="wishlist_text">Cart</span>
        </div>
      </div>
    </>
  );
};

export default SubNavbar;
