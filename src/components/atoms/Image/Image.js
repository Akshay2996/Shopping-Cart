import React from 'react';
import './Image.scss';

export default function Image({source, alt}) {
    return (
            <img src={source} className="image-wrapper" alt={alt} />
    )
}
