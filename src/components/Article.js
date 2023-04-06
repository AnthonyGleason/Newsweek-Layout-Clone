import React from 'react';
import '../styles/article.css';

export default function Article({ title, desc, category, img, className}) {
  const background = {
    backgroundImage: `url(${img})`,
  };

  return (
    <div className={className}>
      <div className='article-img pointer' style={background} alt={title} />
      <div className='article-category pointer'>{category}</div>
      <div className='article-title pointer underline'>{title}</div>
      <div className='article-desc'>{desc}</div>
    </div>
  );
}