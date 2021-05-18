import React from 'react';
import Footer from './components/organisms/Footer/Footer';
import Header from './components/organisms/Header/Header';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/pages/Home/Home';
export default function App(){
    return(
        <Router>
            <Header />
            <Route exact path="/" component={Home} />
            <Footer />
        </Router>
    );
}