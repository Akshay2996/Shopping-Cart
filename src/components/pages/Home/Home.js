import React from 'react';
import Section from '../../organisms/Section/Section';
import './Home.scss';
import Categories from '../../../../server/categories/index.get.json';

export default function Home() {
    Categories.sort((a, b) => {
        return a.order - b.order;
    });

    const filteredCategory = Categories.filter(category => category.enabled);

    return (
        <main className="wrapper">
            {filteredCategory.map((category) => 
                <Section key={category.id} url={category.imageUrl} heading={category.name} text={category.description} button={category.key} order={category.order}
            />)}
        </main>
    )
}
