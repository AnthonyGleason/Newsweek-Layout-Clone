import React from 'react';
import newsweekLogo from '../assets/newsweek-logo.png';
import navDots from '../assets/navDots.svg';
import searchIcon from '../assets/search-icon-nav.svg';
import '../styles/nav.css';

export default function Nav(){
  return(
    <nav className='nav'>
      <div className='nav-left'>
        <img className='nav-logo pointer' src={newsweekLogo} alt='newsweek logo' />
        <ul className='nav-left-buttons pointer'>
          <li>U.S.</li>
          <li>World</li>
          <li>Technology</li>
          <li>Culture</li>
          <li>Autos</li>
          <li>Rankings</li>
          <li>Health</li>
          <li>Life</li>
          <li>Opinion</li>
          <li>Experts</li>
          <li>Education</li>
          <img className='nav-expand-dots' src={navDots} alt='three dots' />
        </ul>
      </div>
      <div className='nav-right pointer'>
        <p className='nav-subscribe'>SUBSCRIBE FOR $1</p>
        <p className='nav-login'>Login</p>
        <img className='nav-search-icon' src={searchIcon} alt='magnifying glass' />
      </div>
    </nav>
  )
}