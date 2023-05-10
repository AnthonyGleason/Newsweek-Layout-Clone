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
    <main className='content'>
      <section className='section-one'>
        <img className='pointer' src={newsweekSmallLogo} alt='newsweek small logo' />
        <h2 className='pointer'>LIFE</h2>
      </section>
      <section className='section-two'>
        {
          sectionTwoArticles.map((i)=>{
            return(<Article key={sectionTwoArticles.indexOf(i)} title={i.title} desc={i.desc} category={i.category} img={i.img} className='article'/>)
          })
        }
      </section>
      <section className='section-three'>
        {
          sectionThreeArticles.map((i)=>{
            return(<Article key={sectionThreeArticles.indexOf(i)} title={i.title} desc={i.desc} category={i.category} img={i.img} className='article'/>)
          })
        }
      </section>
      <section className='section-four'>
        {
          sectionFourArticles.map((i)=>{
            return(<Article key={sectionFourArticles.indexOf(i)} title={i.title} desc={i.desc} category={i.category} img={i.img} className='article-alt'/>)
          })
        }
      </section>
      <section className='section-five'>
        {
          sectionFiveArticles.map((i)=>{
            return(<Article key={sectionFiveArticles.indexOf(i)} title={i.title} desc={i.desc} category={i.category} img={i.img} className='article'/>)
          })
        }
      </section>
      <section className='section-six'>
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
      </section>
    </main>
  )
}