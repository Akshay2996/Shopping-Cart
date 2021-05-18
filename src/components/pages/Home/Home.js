import React from 'react';
import Section from '../../organisms/Section/Section';
import './Home.scss';

export default function Home({ filteredCategory, handleProduct }) {
    return (
        <main className="home-container">
            {filteredCategory.map((category) => 
                <Section key={category.id} id={category.id} url={category.imageUrl} heading={category.name} text={category.description} button={category.key} order={category.order} handleProduct={handleProduct}
            />)}
        </main>
    )
}
