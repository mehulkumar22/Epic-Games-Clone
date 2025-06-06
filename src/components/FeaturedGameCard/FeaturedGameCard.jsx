import React from 'react';
import './FeaturedGameCard.css';

const gameData = [
  {
    title: 'Black Myth: Wukong',
    desc: 'Mythical action RPG inspired by Journey to the West with stunning visuals.',
    price: '₹1,199',
    img: 'https://i.pinimg.com/1200x/1d/ac/5f/1dac5fb268278fc3a9d79da985acf64b.jpg',
  },
  {
    title: 'Red Dead Redemption 2',
    desc: 'Open-world western epic with rich storytelling and online mode.',
    price: '₹4,999',
    img: 'https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fheather%2Fhome%2FEGS_RockstarGames_RedDeadRedemption2_G1A_00-1920x1080-308f101576da37225c889173094f373f2afc56c1.jpg',
  },
  {
    title: 'EA SPORTS FC™ 25',
    desc: 'Realistic football simulation with improved mechanics and visuals.',
    price: '₹3,299',
    img: 'https://images.igdb.com/igdb/image/upload/t_720p/ar3115.webp',
  },
];


const GamesWithAchievements = () => {
  return (
    <div className="games-section">
      <div className="games-container">
        {/* Grid for desktop/tablet */}
        <div className="games-grid">
          {gameData.map((game, index) => (
            <div className="game-card transparent-card" key={index}>
              <img src={game.img} alt={game.title} className="game-image" />
              <div className="game-content">
                <h3 className="game-title">{game.title}</h3>
                <p className="game-description">{game.desc}</p>
                <div className="game-price">{game.price}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Slider for mobile */}
        <div className="slider-container">
          {gameData.map((game, index) => (
            <div className="game-card transparent-card slider-card" key={index}>
              <img src={game.img} alt={game.title} className="game-image" />
              <div className="game-content">
                <h3 className="game-title">{game.title}</h3>
                <p className="game-description">{game.desc}</p>
                <div className="game-price">{game.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GamesWithAchievements;
