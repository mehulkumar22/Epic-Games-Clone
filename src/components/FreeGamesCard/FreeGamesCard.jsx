import React from "react";
import "./FreeGamesCard.css";

const gamesList = [
  {
    title: "Ghost of Tsushima",
    price: "Free",
    image: "https://cdn1.epicgames.com/offer/6e6aa039c73347b885803de65ac5d3db/EGS_GhostofTsushima_SuckerPunchProductions_S2_1200x1600-e23e02c1d70be7b528dba50860f87d39?resize=1&w=360&h=480&quality=medium",
  },
  {
    title: "UNCHARTED™: Legacy of Thieves Collection",
    price: "Free",
    image: "https://cdn1.epicgames.com/offer/8b2d6cf2b45b41f1abe91bc5b7c1e8f9/EGS_UNCHARTEDLegacyofThievesCollection_NaughtyDogLLC_S2_1200x1600-9deaa177d8716bde5478cdd75d850c9c?resize=1&w=360&h=480&quality=medium",
  },
  {
    title: "Liars Bar",
    price: "Free",
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co8w00.webp",
  },
  {
    title: "World War Z",
    price: "Free",
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2i4r.webp",
  },
];

const UpdatedGamesShowcase = () => {
  return (
    <div className="showcase-wrapper">
      <div className="showcase-container">
        <h2 className="showcase-heading">
          <img
            src="/img/gift.svg"
            alt="Gift Icon"
            style={{ width: "38px", height: "38px", marginRight: "8px" }}
          />
          Free Games
        </h2>

        {/* Grid display for desktop, tablet & mobile */}
        <div className="grid-display">
          {gamesList.map((game, index) => (
            <div className="card-box" key={index}>
              <div className="thumb-wrap">
                <img src={game.image} alt={game.title} className="thumb-img" />
                <div className="highlight-badge">FREE NOW</div>
              </div>
              <div className="info-box">
                <h3 className="title-text">{game.title}</h3>
                <div className="price-tag">{game.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpdatedGamesShowcase;
