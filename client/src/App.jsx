import React from 'react';
import './styles.css'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Contact from './pages/Contact';
import Character from './pages/Character';
import WhyNamesMatter from './pages/WhyNamesMatter';
import World from './pages/World';
import Faction from './pages/Faction';
import Religion from './pages/Religion';
import Item from './pages/Item';
import Dynamic from './pages/Dynamic';
import GoogleAd from './components/GoogleAd';
import HowToCreateLoreRichNames from './pages/HowToCreateLoreRichNames';
import FiveTipsForWorldbuilding from './pages/FiveTipsForWorldbuilding';
import FemalevsMale from './pages/FemalevsMale';
import FAQ from './pages/FAQ';
import Blog from './pages/Blog';
import Ideas from './pages/Ideas';
import TopNav from './components/TopNav';


function App() {
  return (
    <>
      <TopNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/character" element={<Character />} />
        <Route path="/why-names-matter" element={<WhyNamesMatter />} />
        <Route path="/world" element={<World />} />
        <Route path="/faction" element={<Faction />} />
        <Route path="/religion" element={<Religion />} />
        <Route path="/item" element={<Item />} />
        <Route path="/dynamic" element={<Dynamic />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/why-names-matter" element={<WhyNamesMatter />} />
        <Route path="/blog/lore-rich-names" element={<HowToCreateLoreRichNames />} />
        <Route path="/blog/tips-for-worldbuilding" element={<FiveTipsForWorldbuilding />} />
        <Route path="/blog/gender-specific-names" element={<FemalevsMale />} />
        <Route path="/blog/gender-specific-names" element={<FemalevsMale />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/ideas" element={<Ideas />} />
      </Routes>
    </>
  );
}

export default App;
