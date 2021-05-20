import React from 'react';
import { ProductContext } from '../../../contexts/ProductContext';
import Dropdown from '../../molecules/Dropdown/Dropdown';
import Sidebar from '../../molecules/Sidebar/Sidebar';
import Card from '../../organisms/Card/Card';
import './Products.scss';

export default function Products({ filteredCategory, filteredProduct, handleProduct}) {
    // const { filteredProduct, handleProduct } = useContext(ProductContext);

    return (
        <main className="product-container">
            <Sidebar filteredCategory={filteredCategory} handleProduct={handleProduct} />
            <Dropdown filteredCategory={filteredCategory} handleProduct={handleProduct} />
            <main className="product-container__card">
                {filteredProduct && filteredProduct.map((product) => (
                    <Card key={product.id} imageUrl={product.imageURL} name={product.name} price={product.price} stock={product.stock} text={product.description} category={product.category} />
                 ) )}
            </main>
        </main>
    )
}
