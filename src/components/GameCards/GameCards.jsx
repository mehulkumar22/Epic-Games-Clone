import React, { useRef } from 'react';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import games from '../../data/GameCardData.js';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './GameCards.css';

const GameCarousel = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 4, slidesToScroll: 4, dots: true }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2, slidesToScroll: 2, dots: true }
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1.5, slidesToScroll: 1, dots: true }
      }
    ]
  };

  return (
    <div className="game-carousel">
      <div className="carousel-top">
        <h4 className="carousel-heading">Discover Something New</h4>
        <div className="carousel-buttons">
          <button onClick={() => sliderRef.current?.slickPrev()}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button onClick={() => sliderRef.current?.slickNext()}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>

      <Slider ref={sliderRef} {...settings} className="carousel-slider">
        {games.map(game => (
          <div key={game.id} className="carousel-card">
            <img src={game.image} alt={game.name} />
            <div className="carousel-icon">
              <FontAwesomeIcon icon={faCirclePlus} />
            </div>
            <div className="carousel-text">
              <p className="carousel-category">{game.category}</p>
              <p className="carousel-title">{game.name}</p>
              <div className="carousel-price-wrap">
                <div className="carousel-discount"><p>{game.discount}</p></div>
                <p className="carousel-original">{game.originalPrice}</p>
                <p className="carousel-final">{game.discountedPrice}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default GameCarousel;