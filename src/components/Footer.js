import React from 'react';
import '../styles/footer.css';
//import images
import newsweekFooterLogo from '../assets/newsweek-footer-logo.svg';
import linkedinLogo from '../assets/linkedin.svg';
import instagramLogo from '../assets/instagram.svg';
import facebookLogo from '../assets/facebook.svg';
import twitterLogo from '../assets/twitter.svg';
import redArrowRight from '../assets/arrow-red-right.svg';
export default function Footer(){
  const topics = ['U.S.','World','Technology','Culture','Autos','Rankings','Health','Opinion','Experts','Education','Podcasts','Vantage'];
  const newsletters = ['The Bulletin (Mondays to Saturdays)',
  'The Debate (Tuesdays)',
  'The Cover (Wednesdays)',
  'For The Culture (Tuesdays and Thursdays)',
  'The Frontlines (Thursdays)',
  'Infinite Scroll (Tuesdays)',
  'The Josh Hammer Report (Wednesdays)'];

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
        <div className='footer-left'>
          <ul className='footer-topics'>
            {
              topics.map((topic)=>{
                return(
                  <li className='footer-title'>{topic}<img src={redArrowRight} alt='red arrow right' /></li>
                )
              })
            }
          </ul>
          <div className='footer-trending'>
            <div className='footer-title'>Trending</div>
          </div>
          <div className='footer-newsletter'>
            <div className='footer-title'>Newsletters in your inbox <a href='/'>See all</a></div>
            <ul>
              {
                newsletters.map((item)=>{
                  return(
                    <li>
                      <input type="checkbox" checked/>
                      <div className='footer-news'>{item}</div>
                      <a href='/'>See Sample</a>
                    </li>
                  )
                })
              }
            </ul>
            <form method='' action=''>
              <input placeholder='Email address' type='email'/>
              <button type='submit'>Sign up now</button>
            </form>
            <div className='footer-newsletter-terms'>
              You can unsubscribe at any time.<br />
              By signing up you are agreeing to our Terms of Service and Privacy Policy 
            </div>
          </div>
        </div>
        <div className='footer-right'>
          
        </div>
        <div className='footer-bottom'>
          <div>
            <ul>

            </ul>
            <ul>

            </ul>
            <ul>

            </ul>
            <ul>

            </ul>
          </div>
          <div>
            © 2023 NEWSWEEK DIGITAL LLC <br />
            Recreated by <a href='https://github.com/antinf'>Anthony Infortunio </a>
          </div>
        </div>
      </div>
    </div>
  )
}