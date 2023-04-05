import React from 'react';
import newsweekLogo from '../assets/newsweek-logo.png';
import navDots from '../assets/navDots.svg';
import searchIcon from '../assets/search-icon-nav.svg';
import '../styles/nav.css';

export default function Nav(){
  return(
    <div className='nav'>
      <div className='nav-left'>
        <img className='nav-logo' src={newsweekLogo} alt='newsweek logo' />
        <div className='nav-left-buttons'>
          <li>U.S.</li>
          <li>World</li>
          <li>Tech & Science</li>
          <li>Culture</li>
          <li>Autos</li>
          <li>Rankings</li>
          <li>Health</li>
          <li>Life</li>
          <li>Opinion</li>
          <li>Experts</li>
          <li>Education</li>
        </div>
        <img src={navDots} alt='three dots' />
      </div>
      <div className='nav-right'>
        <div className='nav-subscribe'>SUBSCRIBE FOR $1</div>
        <div>Login</div>
        <img src={searchIcon} alt='magnifying glass' />
      </div>
    </div>
  )
}