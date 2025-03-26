import React, { useContext } from 'react';
import './Navbar.css';
import arrow_icon from '../../assets/arrow_icon.png';
import { CoinContext } from '../../context/CoinContext';
import { ThemeContext } from '../../context/ThemeContext'; // Import ThemeContext
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { setCurrency } = useContext(CoinContext);
  const { darkMode, toggleTheme } = useContext(ThemeContext); // Get darkMode & toggle function

  const currencyHandler = (event) => {
    switch (event.target.value) {
      case 'usd':
        setCurrency({ name: 'usd', symbol: '$' });
        break;
      case 'eur':
        setCurrency({ name: 'eur', symbol: '€' });
        break;
      case 'inr':
        setCurrency({ name: 'inr', symbol: '₹' });
        break;
      default:
        setCurrency({ name: 'usd', symbol: '$' });
        break;
    }
  };

  return (
    <div className='navbar'>
      <Link to={'/'}>
        <h1>CryptoTracker</h1>
      </Link>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/features'>Features</Link></li>
        <li><Link to='/pricing'>Pricing</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
      </ul>
      <div className='nav-right'>
        <select onChange={currencyHandler}>
          <option value='usd'>USD</option>
          <option value='eur'>EUR</option>
          <option value='inr'>INR</option>
        </select>

        {/* Light/Dark Mode Toggle */}
        <div className="theme-toggle" onClick={toggleTheme}>
          {darkMode ? '🌙 Dark Mode' : '☀️ Light Mode'}
        </div>

        {/* Updated Sign Up button to navigate to SignUp page */}
        <Link to="/signup">
          <button>
            Sign up <img src={arrow_icon} alt='' />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
