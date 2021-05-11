import React from 'react';
import './Content.scss';
import Button from '../../atoms/Button/Button';

export default function Content({heading, text, button}) {
    return (
        <main className="content">
            <h3 className="content__header">{heading}</h3>
            <p className="content__text">{text}</p>
            <Button button={`Explore ${button}`} />
        </main>
    )
}
