import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import games from "../../data/GameCardData";
import "./NavbarTwo.css";

const SubNavbar = ({ user }) => {
  const [accordionText, setAccordionText] = useState("Discover");
  const [isAccordionOpen, setAccordionOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  const filteredGames = games.filter((game) =>
    game.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      {/* Mobile Navbar */}
      <div className="main">
        <div className="left_icon">
          <BiSearch
            className="icon"
            onClick={() => setSearchOpen((prev) => !prev)}
            aria-label="Toggle Search"
          />
        </div>

        <div
          className="center_accordion"
          onClick={() => setAccordionOpen((prev) => !prev)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") setAccordionOpen((prev) => !prev);
          }}
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

        {isSearchOpen && (
          <input
            type="text"
            className="mobile_search_input"
            placeholder="Search Store..."
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        )}

        {isSearchOpen && query && (
          <div className="search_results">
            {filteredGames.length > 0 ? (
              filteredGames.map((game) => (
                <div key={game.id} className="search_item">
                  {game.name}
                </div>
              ))
            ) : (
              <div className="search_item">No results found</div>
            )}
          </div>
        )}

        {isAccordionOpen && (
          <div className="accordion_modal">
            <a
              href="/"
              onClick={() => {
                setAccordionText("Discover");
                setAccordionOpen(false);
              }}
              className="option"
            >
              Discover
            </a>
            <div className="line"></div>
            <a
              href="/browse"
              onClick={() => {
                setAccordionText("Browse");
                setAccordionOpen(false);
              }}
              className="option"
            >
              Browse
            </a>
            <div className="line"></div>
            <a
              href="/"
              onClick={() => {
                setAccordionText("News");
                setAccordionOpen(false);
              }}
              className="option"
            >
              News
            </a>
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
              onChange={(e) => setQuery(e.target.value)}
            />
            {query && (
              <div className="search_results desktop">
                {filteredGames.length > 0 ? (
                  filteredGames.map((game) => (
                    <div key={game.id} className="search_item">
                      {game.name}
                    </div>
                  ))
                ) : (
                  <div className="search_item">No results found</div>
                )}
              </div>
            )}
          </div>
          <a href="/" className="option_desktop">
            Discover
          </a>
          <a href="/browse" className="option_desktop">
            Browse
          </a>
          <a href="/" className="option_desktop">
            News
          </a>
        </div>
      </div>
    </>
  );
};

export default SubNavbar;
