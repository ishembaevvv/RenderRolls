import React from 'react';
import scss from './Cards.module.scss';

export default function Cards({img, title, text, price, kl}) {
  return (
    <div className={scss.container}>
      <div className={scss.wrapper}>
      <img className={scss.img} src={img} alt='' />
      <h2 className={scss.title}>{title}</h2>
      <p className={scss.text}>
        {text}
      </p>
      <h2 className={scss.price}>{price}</h2>
      <span className={scss.kl}>{kl}</span>

      <div className={scss.counter}>
        <button className={scss.btn}>+</button>
        <h3 className={scss.res}>1</h3>
        <button className={scss.btn}>-</button>
      </div>
      <button className={scss.btnBasket}>Добавить в корзину</button>
      </div>
      </div>
  )
}