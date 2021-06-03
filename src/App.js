import React from "react";
import { Route, Switch } from "react-router-dom";

import Footer from "./components/organisms/Footer/Footer";
import Header from "./components/organisms/Header/Header";
import Home from "./components/pages/Home/Home";
import Products from "./components/pages/Products/Products";
import Signin from "./components/pages/Signin/Signin";
import Register from "./components/pages/Register/Register";
import CartPage from "./components/pages/CartPage/CartPage";

export default function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route path="/products" render={(props) => <Products {...props} />} />

        <Route exact path="/signin" component={Signin} />
        <Route exact path="/register" component={Register} />

        <Route
          exact
          path="/cartpage"
          render={(props) => <CartPage {...props} />}
        />
      </Switch>
      <Footer />
    </>
  );
}
