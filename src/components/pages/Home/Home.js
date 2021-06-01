import React, { useContext } from 'react';
import { ProductContext } from '../../../contexts/ProductContext';
import Section from '../../organisms/Section/Section';
import './Home.scss';

export default function Home() {
    const { filteredCategory } = useContext(ProductContext);

    return (
        <main className="home-container">
            {filteredCategory.map((category) => 
                <Section key={category.id} id={category.id} url={category.imageUrl} heading={category.name} text={category.description} button={category.key} order={category.order}
            />)}
        </main>
    )
}
