import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeContext } from './context/ThemeContext'; // Import ThemeContext
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Coin from './pages/Coin/Coin';
import Footer from './components/Footer/Footer';
import Features from './pages/features/Features';
import Pricing from './pages/pricing/Pricing';
import Blog from './pages/blog/Blog';
import SignUp from './pages/signup/SignUp'; // Import SignUp page

const App = () => {
  const { darkMode } = useContext(ThemeContext); // Get darkMode state

  return (
    <div className={darkMode ? 'app dark-mode' : 'app light-mode'}> {/* Apply Theme */}
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/coin/:coinId' element={<Coin />} />
        <Route path='/features' element={<Features />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/signup' element={<SignUp />} /> {/* Added SignUp route */}
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
