import { useState } from 'react'
import './App.css'
import NavbarTwo from './components/Navbar/Navbar'
import Header from './components/NavbarTwo/NavbarTwo'
import HeroSlider from './components/HeroSlider/HeroSlider'
import GameCards from './components/GameCards/GameCards'
import FeaturedGameCard from './components/FeaturedGameCard/FeaturedGameCard'
import GameCards2 from './components/GameCards2/GameCards2'
import FeaturedGameCard2 from './components/FeaturedGameCard2/FeaturedGameCard2'
import FreeGamesCard from './components/FreeGamesCard/FreeGamesCard'
import BrowseMore from './components/BrowseMore/BrowseMore'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='App'>
    <NavbarTwo/>
    <Header/>
    <HeroSlider/>
    <GameCards/>
    <FeaturedGameCard/>
    <GameCards2/>
    <FeaturedGameCard2/>
    <FreeGamesCard/>
    <BrowseMore/>
    <Footer/>
   </div>
  )
}

export default App
