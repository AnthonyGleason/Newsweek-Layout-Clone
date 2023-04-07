import React from 'react';
import '../styles/footer.css';
//import images
import newsweekFooterLogo from '../assets/newsweek-footer-logo.svg';
import linkedinLogo from '../assets/linkedin.svg';
import instagramLogo from '../assets/instagram.svg';
import facebookLogo from '../assets/facebook.svg';
import twitterLogo from '../assets/twitter.svg';
import redArrowRight from '../assets/arrow-red-right.svg';
import magazineCover from '../assets/footer-magazine-cover.jpg';
export default function Footer(){
  const topics = [
    'U.S.','World','Technology',
    'Culture','Autos','Rankings',
    'Health','Opinion','Experts',
    'Education','Podcasts','Vantage'
  ];
  const newsletters = [
    'The Bulletin (Mondays to Saturdays)','The Debate (Tuesdays)',
    'The Cover (Wednesdays)','For The Culture (Tuesdays and Thursdays)',
    'The Frontlines (Thursdays)','Infinite Scroll (Tuesdays)',
    'The Josh Hammer Report (Wednesdays)'
  ];
  const footerCompany = [
    'Masthead','Diversity','Announcements',
    'Archive','Policies and Standards',
    'Mission Statement','Leadership','Newsletters'
  ];
  const footerEditions = ['U.S. Edition','Polska','Romania'];
  const footerContact = ['Advertise','Careers','Contact Us','Corrections'];
  const footerTerms = [
    'Cookie Policy','Copyright','Privacy Policy',
    'Terms & Conditions','Terms of Sale'
];
  return(
    <div className='footer'>
      <div className='footer-nav'>
        <img className='pointer' src={newsweekFooterLogo} alt='newsweek footer logo'/>
        <div className='social-media-buttons'>
          <img src={linkedinLogo} alt='linkedin logo'/>
          <img src={instagramLogo} alt='instagram logo'/>
          <img src={twitterLogo} alt='twitter logo'/>
          <img src={facebookLogo} alt='facebook logo' />
        </div>
      </div>
      <div className='footer-content'>
        <ul className='footer-topics'>
          {
            topics.map((topic)=>{
              return(
                <li className='footer-title'>{topic}<img src={redArrowRight} alt='red arrow right' /></li>
              )
            })
          }
        </ul>
        <div className='footer-subscriptions'>
          <div className='footer-title'>Subscriptions</div>
          <ul className='footer-subscription-menu'>
            <li>Digital+ Monthly (Ad Free Trial) <span className='yellow'>$1.00</span></li>
            <li>Digital+ Yearly $49.00</li>
            <li>Premium Monthly $9.99</li>
            <li>Premium Yearly $99</li>
          </ul>
        </div>
        <div className='footer-newsletter'>
          <div className='footer-title'>Newsletters in your inbox <a href='/'><u>See all</u></a></div>
          <ul className='footer-newsletter-content'>
            {
              newsletters.map((item)=>{
                return(
                  <li>
                    <input type="checkbox" defaultChecked/>
                    <div className='footer-news'>{item}</div>
                    <a href='/' className='yellow'><u>See Sample</u></a>
                  </li>
                )
              })
            }
          </ul>
          <form method='' action=''>
            <input placeholder='Email address' type='email'/>
            <button className='pointer' type='submit'>Sign up now</button>
          </form>
          <div className='footer-newsletter-terms'>
            You can unsubscribe at any time.<br />
            By signing up you are agreeing to our <u className='pointer'>Terms of Service</u> and <u className='pointer'>Privacy Policy</u>
          </div>
        </div>
        <div className='footer-magazine'>
          <div className='footer-title'>In The Magazine</div>
          <img src={magazineCover} alt='april 14th 2023 issue' />
          <div className='magazine-date pointer'>
            April 14<br />
            2023 Issue
          </div>
        </div>
      </div>
      <div className='footer-bottom'>
      <div className="footer-menu">
        <ul>
          <li className='footer-category'>Company </li>
          {footerCompany.map((i) => {
            return <li>{i}</li>;
          })}
        </ul>
        <ul>
          <li className='footer-category'>Editions: </li>
          {footerEditions.map((i) => {
            return <li>{i}</li>;
          })}
        </ul>
        <ul>
          <li className='footer-category'>Contact </li>
          {footerContact.map((i) => {
            return <li>{i}</li>;
          })}
        </ul>
        <ul>
          <li className='footer-category'>Terms Of Use </li>
          {footerTerms.map((i) => {
            return <li>{i}</li>;
          })}
        </ul>
        </div>
        <div className="credits">
          A Newsweek Clone Recreated By&nbsp;
          <a href="https://github.com/antinf" className='pointer'><u>Anthony Infortunio</u></a>
        </div>
      </div>
    </div>
  )
}