import React from 'react'
import Image from '../../atoms/Image/Image';
import Content from '../../molecules/Content/Content';
import './Section.scss';


export default function Section({url, heading, text, button, order, handleProduct, id}) {
    return (
        <section className="container">
            {order % 2 == 0 ? (
                <>
                    <Content className="container__content" heading={heading} text={text} button={button} handleProduct={handleProduct} id={id} />
                    <Image source={url} alt={`${heading} Image`} />
                </>
            )
            :
            (
                <>
                    <Image source={url} alt={`${heading} Image`} />
                    <Content className="container__content" heading={heading} text={text} button={button} handleProduct={handleProduct} id={id} />
                </>
            )
        }
        </section>
    )
}