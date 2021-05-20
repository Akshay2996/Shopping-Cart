import React, { useState, useEffect } from 'react';
import { Redirect, Route, Switch, useHistory, useLocation } from "react-router-dom";

import Footer from './components/organisms/Footer/Footer';
import Header from './components/organisms/Header/Header';
import Home from './components/pages/Home/Home';
import Products from './components/pages/Products/Products';
import Signin from './components/pages/Signin/Signin';

import Categories from '../server/categories/index.get.json';
import ProductValue from '../server/products/index.get.json';


export default function App(){
    const history = useHistory();
    const location = useLocation();

    const [filteredProduct, setFilteredProduct] = useState(ProductValue);

    const filteredCategory = Categories
                                .filter(category => category.enabled)
                                .sort((a, b) => a.order - b.order);

    useEffect(() => {
        if(!location.search){
            setFilteredProduct(ProductValue);
        }
    }, [location]);

    function handleProduct(id) {
        setFilteredProduct(ProductValue.filter((product) => product.category === id));
        history.push({
            pathname: `/products`,
            search: `?query=${id}`
        });
    }

    return(
        <>
            <Header />
            <Switch>
                <Route exact path="/" render={(props) => (
                    <Home {...props} filteredCategory={filteredCategory} handleProduct={handleProduct} />
                )} />
                <Route exact path="/products" render={(props) => (
                    <Products {...props} filteredCategory={filteredCategory} filteredProduct={filteredProduct} handleProduct={handleProduct} />
                )} />
                <Route path="/signin" component={Signin} />
                <Redirect from="/*" to="/" />
            </Switch>
            <Footer />
        </>
    );
}