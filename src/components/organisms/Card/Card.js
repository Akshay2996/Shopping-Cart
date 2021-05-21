import React, {useState, useEffect} from 'react';
import Button from '../../atoms/Button/Button';
import Image from '../../atoms/Image/Image';
import './Card.scss';

export default function Card({ name, imageUrl, price, stock, text, category }) {
    const browserWidth = window.innerWidth <= 768 ? `Buy Now @ Rs.${price}` : 'Buy Now';

    return (
            <section className="card-container">
                <h2 className="card-container__title">{name}</h2>
                <figure className="card-container__image">
                    <Image source={imageUrl} alt="Fruit Pic" className={"product-image"} />
                </figure>
                <p className="card-container__text">{text}</p>
                <section className="card-container__section">
                    <p className="card-container__section__price">MRP Rs.{price}</p>
                    <Button button={browserWidth} className={"card-container__section__buy-button"} />
                </section>
            </section>
    )
}
