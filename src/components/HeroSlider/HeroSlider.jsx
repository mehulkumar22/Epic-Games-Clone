import React, { useState, useEffect } from 'react';
import './HeroSlider.css';
import games from '../../data/HeroSliderData.js';

const HeroSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === games.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleThumbnailClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="hero-slider-container marg">
      {/* Main Slider */}
      <div className="hero-main-slider">
        <div className="carousel-inner">
          {games.map((game, index) => (
            <div
              key={game.id}
              className={`carousel-item ${index === activeIndex ? 'active' : ''}`}
            >
              <img src={game.mainImage} className="d-block w-100" alt={game.name} />
              <div className="carousel-caption d-none d-md-block">
                {game.titleImage && (
                  <img
                    src={game.titleImage}
                    alt={`${game.name} title`}
                    className="game-title-img animate-title"
                  />
                )}
                {game.subtitle && <h6 className="subtitle">{game.subtitle}</h6>}
                <p>{game.description}</p>
                <div className="price-container">
                  {game.discount && <span className="discount-badge">{game.discount}</span>}
                  {game.originalPrice && <span className="original-price">{game.originalPrice}</span>}
                  {game.discountedPrice && <span className="discounted-price">{game.discountedPrice}</span>}
                </div>
                <button className="buy-now-btn">Buy Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Thumbnails */}
      <div className="hero-game-thumbnails">
        <ul>
          {games.map((game, index) => (
            <li
              key={game.id}
              onClick={() => handleThumbnailClick(index)}
              className={index === activeIndex ? 'active-thumbnail' : ''}
            >
              <div className="game-thumbnail">
                <img
                  src={game.thumbnailImage}
                  alt={`${game.name} thumbnail`}
                  className="thumbnail-placeholder"
                />
                <span className="game-name">{game.name}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HeroSlider;
