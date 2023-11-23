import React from 'react';
import scss from './Card.module.scss';

export default function Cards({index, title, color}) {
  return (
    <div style={{background: color}}>
      <h1>{index}</h1>
      <p>{title}</p>
    </div>
  )
}
