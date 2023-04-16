import App from '../App.js'
import React from 'react';
import { FaSearch, FaBell, FaUser } from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';
import './Navbar.css'

function NavBar() {
  return (
    <nav className="navbar">
      <div className='menu-container'><BsArrowRight className='arrow' />
      </div>
      <div className="search-bar">
        <input className='inputfield' type="text" placeholder="What you wish ?" />
        <button className='search'><FaSearch /></button>
        <button><FaBell className='bell' /></button>
      </div>
    </nav>
  );
}

export default NavBar;
