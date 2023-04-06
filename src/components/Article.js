import React from 'react';
export default function Article({title,desc,category,img}){
  return(
    <div className='article'>
      <div>{title}</div>
      <div>{desc}</div>
      <div>{category}</div>
      <img src={img} />
    </div>
  )
}