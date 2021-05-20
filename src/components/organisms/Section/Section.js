import React from 'react'
import Image from '../../atoms/Image/Image';
import Content from '../../molecules/Content/Content';
import './Section.scss';


export default function Section({url, heading, text, button, order, handleProduct, id}) {
    return (
        <section className="container">
            {order % 2 == 0 ? (
                <>
                    <div className="container__content">
                        <Content heading={heading} text={text} button={button} handleProduct={handleProduct} id={id} />
                    </div>
                    <Image source={url} alt={`${heading} Image`} />
                </>
            )
            :
            (
                <>
                    <Image source={url} alt={`${heading} Image`} />
                    <div className="container__content">
                        <Content heading={heading} text={text} button={button} handleProduct={handleProduct} id={id} />
                    </div>
                    
                </>
            )
        }
            
        </section>
    )
}
