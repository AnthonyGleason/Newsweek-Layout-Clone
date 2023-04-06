import React from 'react';
import Article from '../components/Article';
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
        <img />
        <div>LIFE</div>
      </div>
      <div className='section-two'>
        {
          sectionTwoArticles.map((i)=>{
            return(<Article title={i.title} desc={i.desc} category={i.category} img={i.img}/>)
          })
        }
      </div>
      <div className='section-three'>
        {
          sectionThreeArticles.map((i)=>{
            return(<Article title={i.title} desc={i.desc} category={i.category} img={i.img}/>)
          })
        }
      </div>
      <div className='section-four'>
        {
          sectionFourArticles.map((i)=>{
            return(<Article title={i.title} desc={i.desc} category={i.category} img={i.img}/>)
          })
        }
      </div>
      <div className='section-five'>
        {
          sectionFiveArticles.map((i)=>{
            return(<Article title={i.title} desc={i.desc} category={i.category} img={i.img}/>)
          })
        }
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
    </div>
  )
}