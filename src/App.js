import './App.css';
import Nav from './components/Nav';
import newsweekFooterLogo from './assets/newsweek-footer-logo.svg';
function App() {
  return (
    <div className="App">
      <Nav />
      <div className='section-one'>
        <img />
        <div>LIFE</div>
      </div>
      <div className='section-two'>
        <div className='article'>
          <img />
          <div className='article-title'>'Life Is Too Short': Man Treats Himself to $125 Weekly Spas To Beat Stress</div>
          <div className='article-desc'>"I work long hours and it is the only time I take for myself," the financial trader told Newsweek.</div>
          <div className='article-category'>Stress</div>
        </div>
        <div className='article'>
          <img />
          <div className='article-title'>Enjoy the Breathtaking Beauty of Tokyo's Secret, Outlying Islands</div>
          <div className='article-desc'>The videographer, whose Enchanting Tokyo video series explores Tokyo prefecture's 11 Treasure Islands, shares his trip to two—Hachijojima and Aogashima.</div>
          <div className='article-category'>Sponsored Article</div>
        </div>
        <div className='article'>
          <img />
          <div className='article-title'>The Best Ways To Maximize Your Dog's True Happiness, According to Experts</div>
          <div className='article-desc'>Newsweek spoke to three dog behavioral experts about tips for dog owners to give their dogs maximum happiness, and the ideas might not be what you expect.</div>
          <div className='article-category'>Dogs</div>
        </div>
      </div>
      <div className='section-three'>
        <div className='article'>
          <img />
          <div className='article-title'>'ChatGPT Started Doing My Job, but AI Can't Replace Me'</div>
          <div className='article-desc'>My supervisor felt that using AI would speed up my work.</div>
          <div className='article-category'>Artificial Intelligence</div>
        </div>
        <div className='article'>
          <img />
          <div className='article-title'>This Plane Hack Could Get You an Entire Row to Yourselves on a Flight</div>
          <div className='article-desc'>The latest trick offers "pretty good odds" of securing the whole row, having worked around "80-90 percent of the time," according to a viral video.</div>
          <div className='article-category'>Travel</div>
        </div>
        <div className='article'>
          <img />
          <div className='article-title'>'My Dad Taught Me a Profound Lesson in Life Before He Died'</div>
          <div className='article-desc'>I'll never forget holding my dad's lifeless hand and sobbing over his chest before saying goodbye.</div>
          <div className='article-category'>Death</div>
        </div>
        <div className='article'>
          <img />
          <div className='article-title'>Is It Rude To Keep Your Camera Off in Remote Work Meetings?</div>
          <div className='article-desc'>"We didn't have to discuss our personal lives and living situations before the pandemic," one expert told Newsweek.</div>
          <div className='article-category'>Career</div>
        </div>
      </div>
      <div className='section-four'>
        <div className='article'>
          <img />
          <div className='article-title'>Mom Shares the 8 Signs This Toddler Was 'Raised by a Dog'</div>
          <div className='article-desc'>"This is seriously the best thing I've ever seen," wrote one commenter on the viral videos, while another posted: "This is beyond adorable."</div>
          <div className='article-category'>Viral</div>
        </div>
        <div className='article'>
          <img />
          <div className='article-title'>Woman, 54, Shares the Reality of Retiring Young: 'Seemed Fun but It Wasn't'</div>
          <div className='article-desc'>Jeanne Thompson told Newsweek: "I felt guilty because I was lucky enough to retire but I couldn't figure it out."</div>
          <div className='article-category'>Retirement</div>
        </div>
        <div className='article'>
          <img />
          <div className='article-title'>'I Gave Birth at 22 Weeks. I Wasn't Prepared For What Happened'</div>
          <div className='article-desc'>I was in shock. I was not prepared for what I saw.</div>
          <div className='article-category'>Parenting</div>
        </div>
      </div>
      <div className='section-five'>
        <div className='article'>
          <img />
          <div className='article-title'>Mom Revamps Bathroom Sink for Only $50 Using Edible Glitter From Walmart</div>
          <div className='article-desc'>Using Walmart epoxy resin, edible glitter and paint, Lauren elevated her bathroom sink.</div>
          <div className='article-category'>Design</div>
        </div>
        <div className='article'>
          <img />
          <div className='article-title'>'I'm a Professional Bridesmaid. My Crazy Wedding Stories Would Shock You'</div>
          <div className='article-desc'>I've seen some really tough things.</div>
          <div className='article-category'>Wedding</div>
        </div>
        <div className='article'>
          <img />
          <div className='article-title'>My Husband Is Ruining My Bond With My Grandson —What Should I Do?</div>
          <div className='article-desc'>"I have become extremely unhappy and bitter with my husband regarding his feelings."</div>
          <div className='article-category'>Relationship</div>
        </div>
        <div className='article'>
          <img />
          <div className='article-title'>The Dangers of Seeking Love Online-'It Turned Me Into the Queen of Anxiety'</div>
          <div className='article-desc'>Dating fatigue is a real issue that comes after too many failed dates, too much rejection, and the constant pressure to find a match.</div>
          <div className='article-category'>Relationships</div>
        </div>
      </div>
      <div className='section-six'>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
          <li>9</li>
        </ul>
        <div>{'NEXT >'}</div>
      </div>
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
    </div>
  );
}

export default App;
