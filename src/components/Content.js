import React from 'react';
import Article from '../components/Article';
import '../styles/content.css';
import newsweekSmallLogo from '../assets/newsweek-small-logo.png';
//get article data
import getArticles from '../scripts/getArticles';
const articles = getArticles();
//split articles
const sectionTwoArticles = articles.splice(0,3);
const sectionThreeArticles = articles.splice(0,4);
const sectionFourArticles = articles.splice(0,3);
const sectionFiveArticles = articles.splice(0,4);
export default function Content(){
  return(
    <div className='content'>
      <div className='section-one'>
        <img src={newsweekSmallLogo} alt='newsweek small logo' />
        <div>LIFE</div>
      </div>
      <div className='section-two'>
        {
          sectionTwoArticles.map((i)=>{
            return(<Article key={sectionTwoArticles.indexOf(i)} title={i.title} desc={i.desc} category={i.category} img={i.img} className='article'/>)
          })
        }
      </div>
      <div className='section-three'>
        {
          sectionThreeArticles.map((i)=>{
            return(<Article key={sectionThreeArticles.indexOf(i)} title={i.title} desc={i.desc} category={i.category} img={i.img} className='article'/>)
          })
        }
      </div>
      <div className='section-four'>
        {
          sectionFourArticles.map((i)=>{
            return(<Article key={sectionFourArticles.indexOf(i)} title={i.title} desc={i.desc} category={i.category} img={i.img} className='article-alt'/>)
          })
        }
      </div>
      <div className='section-five'>
        {
          sectionFiveArticles.map((i)=>{
            return(<Article key={sectionFiveArticles.indexOf(i)} title={i.title} desc={i.desc} category={i.category} img={i.img} className='article'/>)
          })
        }
      </div>
      <div className='section-six'>
        <ul className='page-numbers pointer'>
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
        <button className='page-next pointer hover'>{'NEXT >'}</button>
      </div>
    </div>
  )
}