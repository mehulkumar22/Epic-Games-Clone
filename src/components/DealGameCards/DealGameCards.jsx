import React from 'react';
import './DealGameCards.css';

const gameData = [
  {
    title: "EA SPORTS FC™ 25",
    originalPrice: "₹1,499",
    discountedPrice: "₹1,199",
    discount: "-20%",
    image: "https://images.igdb.com/igdb/image/upload/t_720p/ar3115.webp"
  },
  {
    title: "God of War Ragnarök",
    originalPrice: "₹1,499",
    discountedPrice: "₹1,199",
    discount: "-20%",
    image: "https://images.igdb.com/igdb/image/upload/t_720p/ar1qdh.webp"
  },
  {
    title: "Hogwarts Legacy",
    originalPrice: "₹3,999",
    discountedPrice: "₹3,299",
    discount: "-17%",
    image: "https://images.igdb.com/igdb/image/upload/t_720p/ar79n.webp"
  }
];

const GamesWithAchievements = () => {
  return (
    <div className="deal-section">
      <div className="deal-container">
        <div className="deal-grid">
          {gameData.map((game, idx) => (
            <div className="deal-card transparent-card" key={idx}>
              <div className="deal-image-wrapper">
                <img src={game.image} alt={game.title} className="deal-image" />
                <div className="deal-badge">Deal of the Week</div>
              </div>
              <div className="deal-content">
                <h3 className="deal-title">{game.title}</h3>
                <div className="deal-price">
                  <span className="deal-discount-badge">{game.discount}</span>
                  <span className="deal-original-price">{game.originalPrice}</span>
                  <span className="deal-discounted-price">{game.discountedPrice}</span>
                  
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="deal-slider">
          {gameData.map((game, idx) => (
            <div className="deal-card transparent-card deal-slider-card" key={idx}>
              <div className="deal-image-wrapper">
                <img src={game.image} alt={game.title} className="deal-image" />
                <div className="deal-badge">Deal of the Week</div>
              </div>
              <div className="deal-content">
                <h3 className="deal-title">{game.title}</h3>
                <div className="deal-price">
                  {game.discount && <span className="deal-discount-badge">{game.discount}</span>}
                  {game.originalPrice && <span className="deal-original-price">{game.originalPrice}</span>}
                  {game.discountedPrice && <span className="deal-discounted-price">{game.discountedPrice}</span>}
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
