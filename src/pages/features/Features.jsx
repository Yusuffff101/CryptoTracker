import React from 'react';
import './Features.css';

const Features = () => {
  return (
    <div className="features-container">
      <h1 className="features-title">Key Features of Cryptocurrency</h1>
      <p className="features-subtitle">
        Explore the unique characteristics that make cryptocurrencies revolutionary.
      </p>

      <div className="features-list">
        <div className="feature-card">
          <h2>🔐 Decentralization</h2>
          <p>Unlike traditional financial systems, cryptocurrencies operate on decentralized networks, removing the need for central authorities.</p>
        </div>

        <div className="feature-card">
          <h2>⚡ Fast Transactions</h2>
          <p>Crypto transactions are quick and borderless, allowing instant transfers across the globe without intermediaries.</p>
        </div>

        <div className="feature-card">
          <h2>🛡️ Security & Transparency</h2>
          <p>Powered by blockchain technology, cryptocurrencies ensure tamper-proof security and transparent transactions.</p>
        </div>

        <div className="feature-card">
          <h2>💰 Limited Supply</h2>
          <p>Many cryptocurrencies, like Bitcoin, have a capped supply, making them deflationary and potentially valuable over time.</p>
        </div>

        <div className="feature-card">
          <h2>🌍 Global Accessibility</h2>
          <p>Anyone with internet access can use cryptocurrencies, promoting financial inclusion worldwide.</p>
        </div>

        <div className="feature-card">
          <h2>🔄 Smart Contracts</h2>
          <p>Ethereum and other blockchain platforms enable self-executing smart contracts, automating complex agreements.</p>
        </div>
      </div>
    </div>
  );
};

export default Features;