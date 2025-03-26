import React from "react";
import "./Pricing.css";

const Pricing = () => {
  return (
    <div className="pricing-container">
      <h1 className="pricing-title">Cryptocurrency Pricing</h1>
      <p className="pricing-subtitle">
        Stay updated with the latest cryptocurrency prices and market trends.
      </p>

      <div className="pricing-section">
        <h2>How Crypto Prices Are Determined</h2>
        <p>
          Cryptocurrency prices are influenced by **supply and demand, investor
          sentiment, regulatory news, and market trends**. Prices fluctuate
          based on trading volumes and external economic factors.
        </p>
      </div>

      <div className="pricing-section">
        <h2>Factors Affecting Prices</h2>
        <ul>
          <li>Market Supply & Demand</li>
          <li>Regulatory Changes</li>
          <li>Technological Advancements</li>
          <li>Institutional Investments</li>
          <li>Macroeconomic Trends</li>
        </ul>
      </div>

      <div className="pricing-button-container">
        <a
          href="https://coinmarketcap.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="live-prices-button">Check Live Prices</button>
        </a>
      </div>
    </div>
  );
};

export default Pricing;
