import React from 'react';
import newsweekFooterLogo from '../assets/newsweek-footer-logo.svg';
export default function Footer(){
  return(
    <div className='footer'>
      <div className='footer-nav'>
        <img src={newsweekFooterLogo} alt='newsweek footer logo'/>
        <div className='social-media-buttons'>
          <img />
          <img />
          <img />
          <img />
        </div>
      </div>
    </div>
  )
}