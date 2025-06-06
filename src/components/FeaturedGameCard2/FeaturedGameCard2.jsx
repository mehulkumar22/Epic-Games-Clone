import React from 'react';
import './FeaturedGameCard2.css';

const gameData = [
  {
    title: "EA SPORTS FC™ 25",
    originalPrice: "₹1,499",
    discountedPrice: "₹1,199",
    discount: "20%",
    image: "https://images.igdb.com/igdb/image/upload/t_720p/ar3115.webp"
  },
  {
    title: "God of War Ragnarök",
    originalPrice: "₹1,499",
    discountedPrice: "₹1,199",
    discount: "20%",
    image: "https://images.igdb.com/igdb/image/upload/t_720p/ar1qdh.webp"
  },
  {
    title: "Hogwarts Legacy",
    originalPrice: "₹3,999",
    discountedPrice: "₹3,299",
    discount: "17%",
    image: "https://images.igdb.com/igdb/image/upload/t_720p/ar79n.webp"
  }
];

const GamesWithAchievements = () => {
  return (
    <div className="games-section">
      <div className="games-container">

        {/* Grid layout for desktop/tablet */}
        <div className="games-grid">
          {gameData.map((game, idx) => (
            <div className="game-card transparent-card" key={idx}>
              <div className="image-wrapper">
                <img src={game.image} alt={game.title} className="game-image" />
                <div className="deal-badge">Deal of the Week</div>
              </div>
              <div className="game-content">
                <h3 className="game-title">{game.title}</h3>
                <div className="game-price">
                  <span className="original-price">{game.originalPrice}</span>
                  <span className="discounted-price">{game.discountedPrice}</span>
                  <span className="discount-badge">{game.discount} OFF</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Slider layout for mobile */}
        <div className="slider-container">
          {gameData.map((game, idx) => (
            <div className="game-card transparent-card slider-card" key={idx}>
              <div className="image-wrapper">
                <img src={game.image} alt={game.title} className="game-image" />
                <div className="deal-badge">Deal of the Week</div>
              </div>
              <div className="game-content">
                <h3 className="game-title">{game.title}</h3>
                <div className="game-price">
                  {game.discount && <span className="discount-badge">{game.discount}</span>}
                  {game.originalPrice && <span className="original-price">{game.originalPrice}</span>}
                  {game.discountedPrice && <span className="discounted-price">{game.discountedPrice}</span>}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default GamesWithAchievements;
