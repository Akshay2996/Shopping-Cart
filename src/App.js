import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";

import Footer from "./components/organisms/Footer/Footer";
import Header from "./components/organisms/Header/Header";
import Home from "./components/pages/Home/Home";
import Products from "./components/pages/Products/Products";
import Signin from "./components/pages/Signin/Signin";
import Register from "./components/pages/Register/Register";
import CartPage from "./components/pages/CartPage/Cartpage";

import ProductContextProvider from "./contexts/ProductContext";
import GlobalContextProvider from "./contexts/GlobalContext";
import CartModal from "./components/organisms/CartModal/CartModal";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const handleCart = () => {
    setIsOpen(!isOpen);
  };
  return (
    <GlobalContextProvider>
      <Header handleCart={handleCart} />
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => (
            <ProductContextProvider>
              <Home {...props} />
            </ProductContextProvider>
          )}
        />
        <Route
          exact
          path="/products"
          render={(props) => (
            <ProductContextProvider>
              <Products {...props} />
            </ProductContextProvider>
          )}
        />

        <Route exact path="/signin" component={Signin} />
        <Route exact path="/register" component={Register} />

        <Route
          exact
          path="/cartpage"
          render={(props) => <CartPage handleCart={handleCart} {...props} />}
        />
      </Switch>
      <Footer />
      {isOpen ? <CartModal handleCart={handleCart} /> : ""}
    </GlobalContextProvider>
  );
}
