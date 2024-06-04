import React from 'react';
import './Sidebar.css';
import logo from '../../assets/logo.jpg'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className='logo'>
        <img src={logo} alt="" />
        <span className="logo-name">Coinbase</span>
      </div>
      <ul className="sidebar-menu">
        <a href="#"><li>Dashboard</li></a>
        <a href="#"><li>Transactions</li></a>
        <a href="#"><li>Updates</li></a>
      </ul>
    </div>
  );
};

export default Sidebar;
