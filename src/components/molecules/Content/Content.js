import React from 'react';
import './Content.scss';
import Button from '../../atoms/Button/Button';

export default function Content({heading, text, button, handleProduct, id}) {
    return (
        <article className="content">
            <h3 className="content__header">{heading}</h3>
            <p className="content__text">{text}</p>
            <Button id={id} handleProduct={handleProduct} button={`Explore ${button}`} />
        </article>
    )
}
