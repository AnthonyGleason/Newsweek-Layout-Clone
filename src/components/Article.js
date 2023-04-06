import React from 'react';
import '../styles/article.css';

export default function Article({ title, desc, category, img }) {
  const background = {
    backgroundImage: `url(${img})`,
  };

  return (
    <div className='article'>
      <div className='article-img' style={background} alt={title}></div>
      <div className='article-title'>{title}</div>
      <div className='article-desc'>{desc}</div>
      <div className='article-category'>{category}</div>
    </div>
  );
}