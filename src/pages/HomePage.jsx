import React from "react";
import Navbar from "../components/Navbar/Navbar";
import SecondaryNavbar from "../components/SecondaryNavbar/SecondaryNavbar";
import HeroSlider from "../components/HeroSlider/HeroSlider";
import GameCardsSlider from "../components/GameCardsSlider/GameCardsSlider";
import FeaturedGameCard from "../components/FeaturedGameCard/FeaturedGameCard";
import GameCardsSlider2 from "../components/GameCardsSlider2/GameCardsSlider2";
import DealGameCards from "../components/DealGameCards/DealGameCards";
import FreeGamesCard from "../components/FreeGamesCard/FreeGamesCard";
import BrowseMore from "../components/BrowseMore/BrowseMore";
import Footer from "../components/Footer/Footer";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <SecondaryNavbar />
      <HeroSlider />
      <GameCardsSlider />
      <FeaturedGameCard />
      <GameCardsSlider2 />
      <DealGameCards />
      <FreeGamesCard />
      <BrowseMore />
      <Footer />
    </div>
  );
};

export default HomePage;
