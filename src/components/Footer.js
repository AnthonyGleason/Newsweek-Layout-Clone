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
    <footer className='footer'>
      <nav className='footer-nav'>
        <img className='pointer' src={newsweekFooterLogo} alt='newsweek footer logo'/>
        <div className='social-media-buttons'>
          <img src={linkedinLogo} onClick={()=>{window.location.href='https://www.linkedin.com/company/newsweek'}} alt='linkedin logo'/>
          <img src={instagramLogo} onClick={()=>{window.location.href='https://www.instagram.com/newsweek/'}} alt='instagram logo'/>
          <img src={twitterLogo} onClick={()=>{window.location.href='https://twitter.com/Newsweek'}} alt='twitter logo'/>
          <img src={facebookLogo} onClick={()=>{window.location.href='https://www.facebook.com/Newsweek'}} alt='facebook logo' />
        </div>
      </nav>
      <main className='footer-content'>
        <ul className='footer-topics'>
          {
            topics.map((topic)=>{
              return(
                <li className='footer-title'>{topic}<img src={redArrowRight} alt='red arrow right' /></li>
              )
            })
          }
        </ul>
        <section className='footer-subscriptions'>
          <h3 className='footer-title'>Subscriptions</h3>
          <ul className='footer-subscription-menu'>
            <li className='pointer'>Digital+ Monthly (Ad Free Trial) <span className='yellow'>$1.00</span></li>
            <li className='pointer'>Digital+ Yearly $49.00</li>
            <li className='pointer'>Premium Monthly $9.99</li>
            <li className='pointer'>Premium Yearly $99</li>
          </ul>
        </section>
        <section className='footer-newsletter'>
          <h3 className='footer-title'>Newsletters in your inbox <a href='/'><u>See all</u></a></h3>
          <ul className='footer-newsletter-content'>
            {
              newsletters.map((item)=>{
                return(
                  <li>
                    <input className='pointer' type="checkbox" defaultChecked/>
                    <p className='footer-news pointer'>{item}</p>
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
          <p className='footer-newsletter-terms'>
            You can unsubscribe at any time.<br />
            By signing up you are agreeing to our <u className='pointer'>Terms of Service</u> and <u className='pointer'>Privacy Policy</u>
          </p>
        </section>
        <section className='footer-magazine'>
          <h3 className='footer-title'>In The Magazine</h3>
          <img className='pointer' src={magazineCover} alt='april 14th 2023 issue' />
          <p className='magazine-date pointer'>
            April 14<br />
            2023 Issue
          </p>
        </section>
      </main>
      <section className='footer-bottom'>
        <div className="footer-menu">
          <ul>
            <li className='footer-category'>Company </li>
            {footerCompany.map((i) => {
              return <li className='pointer'>{i}</li>;
            })}
          </ul>
          <ul>
            <li className='footer-category'>Editions: </li>
            {footerEditions.map((i) => {
              return <li className='pointer'>{i}</li>;
            })}
          </ul>
          <ul>
            <li className='footer-category'>Contact </li>
            {footerContact.map((i) => {
              return <li className='pointer'>{i}</li>;
            })}
          </ul>
          <ul>
            <li className='footer-category'>Terms Of Use </li>
            {footerTerms.map((i) => {
              return <li className='pointer'>{i}</li>;
            })}
          </ul>
        </div>
        <p className="credits">
          © 2023 NEWSWEEK DIGITAL LLC  <br />
          Newsweek Clone Recreated By&nbsp;
          <a href="https://github.com/antinf" className='pointer'><u>Anthony Infortunio</u></a>
        </p>
      </section>
    </footer>
  )
}