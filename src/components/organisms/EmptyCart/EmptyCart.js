import React from "react";
import "./EmptyCart.scss";
import { Link, useHistory } from "react-router-dom";
import Button from "../../atoms/Button/Button";
import { useMediaQuery } from "../../../utils/useMediaQuery";

export default function EmptyCart({ handleCart }) {
  const browserWidth = useMediaQuery("(min-width: 769px)");
  const history = useHistory();

  const goToProducts = () => {
    if (browserWidth) {
      handleCart();
      history.push("/products");
    } else {
      history.push("/products");
    }
  };

  return (
    <section className="empty-cart">
      <div className="empty-cart__sub-container">
        <h2 className="empty-cart__sub-container__title">
          No items in your cart
        </h2>
        <p className="empty-cart__sub-container__text">
          Your favourite items are just a click away
        </p>
      </div>
      <footer className="empty-cart__footer">
        <Button
          button={"Start Shopping"}
          className={"empty-cart__footer__start-button"}
          onClick={() => goToProducts()}
        />
      </footer>
    </section>
  );
}
