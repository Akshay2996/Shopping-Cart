import React from 'react';
import './Content.scss';
import Button from '../../atoms/Button/Button';

export default function Content({ className, heading, text, button, handleProduct, id }) {
    return (
        <article className={`${className} content`}>
            <h2 className="content__header">{heading}</h2>
            <p className="content__text">{text}</p>
            <Button onClick={() => handleProduct(id)} button={`Explore ${button}`} />
        </article>
    )
}
