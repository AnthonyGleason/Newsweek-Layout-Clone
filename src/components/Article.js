import React from 'react';
import '../styles/article.css';

export default function Article({ title, desc, category, img, className}) {
  return (
    <article className={className}>
      <div className='article-img pointer' style={{backgroundImage: `url(${img})`}} alt={title} />
      <p className='article-category pointer'>{category}</p>
      <h5 className='article-title pointer underline'>{title}</h5>
      <p className='article-desc'>{desc}</p>
    </article>
  );
}