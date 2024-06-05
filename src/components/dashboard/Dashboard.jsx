import React, { useState, useEffect } from "react";
import axios from "axios";
import './Dashboard.css';
import Sidebar from "../Sidebar/Sidebar";

const Dashboard = () => {
  const [coins, setCoins] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://api.coingecko.com/api/v3/coins/markets',
      params: { vs_currency: 'inr' },
      headers: { accept: 'application/json' }
    };

    axios
      .request(options)
      .then(function (response) {
        setCoins(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="dashboard">
      <div className="sidebar"><Sidebar /></div>
      <div className="content">
        <div className="box box1">
          BALANCE
        </div>
        <div className="box box2">
          PROFIT LOSS
        </div>
        {coins.slice(0, 1).map((coin) => (
          <div className={`box box3 ${coin.price_change_percentage_24h < 0 ? 'negative' : 'positive'}`} key={coin.id}>
            <div className="coin-header">
              <img src={coin.image} alt={coin.name} />
              <h2>{coin.name}</h2>
            </div>
            <div className="coin-details">
              <div className="detail-item">
                <span className="label">Current Price:</span>
                <span className="value">₹{coin.current_price}</span>
              </div>
              <div className="detail-item">
                <span className="label">24h Change:</span>
                <span className={`value ${coin.price_change_percentage_24h < 0 ? 'negative' : 'positive'}`}>
                  {coin.price_change_24h} ({coin.price_change_percentage_24h}%)
                </span>
              </div>
              <div className="detail-item">
                <span className="label">24h High:</span>
                <span className="value">₹{coin.high_24h}</span>
              </div>
              <div className="detail-item">
                <span className="label">24h Low:</span>
                <span className="value">₹{coin.low_24h}</span>
              </div>
            </div>
          </div>
        ))}
        {coins.slice(1, 2).map((coin) => (
          <div className={`box box4 ${coin.price_change_percentage_24h < 0 ? 'negative' : 'positive'}`} key={coin.id}>
            <div className="coin-header">
              <img src={coin.image} alt={coin.name} />
              <h2>{coin.name}</h2>
            </div>
            <div className="coin-details">
              <div className="detail-item">
                <span className="label">Current Price:</span>
                <span className="value">₹{coin.current_price}</span>
              </div>
              <div className="detail-item">
                <span className="label">24h Change:</span>
                <span className={`value ${coin.price_change_percentage_24h < 0 ? 'negative' : 'positive'}`}>
                  {coin.price_change_24h} ({coin.price_change_percentage_24h}%)
                </span>
              </div>
              <div className="detail-item">
                <span className="label">24h High:</span>
                <span className="value">₹{coin.high_24h}</span>
              </div>
              <div className="detail-item">
                <span className="label">24h Low:</span>
                <span className="value">₹{coin.low_24h}</span>
              </div>
            </div>
          </div>
        ))}
        <div className="box box5">
          CHART
        </div>
        <div className="box box6">
          <input
            type="search"
            id="site-search"
            name="q"
            placeholder="Search for crypto..."
            value={searchTerm}
            onChange={handleSearch}
          />
          <button>CRYPTO-Search</button>
          <div className="coin-list">
            {filteredCoins.map((coin) => (
              <div className={`coin-card ${coin.price_change_percentage_24h < 0 ? 'negative' : 'positive'}`} key={coin.id}>
                <img src={coin.image} alt={coin.name} className="coin-image" />
                <div className="coin-info">
                  <h3>{coin.name}</h3>
                  <p>₹{coin.current_price}</p>
                  <p>{coin.price_change_percentage_24h}%</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
