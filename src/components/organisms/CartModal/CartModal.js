import React, { useContext } from "react";
import ReactDom from "react-dom";
import { GlobalContext } from "../../../contexts/GlobalContext";
import Button from "../../atoms/Button/Button";
import CardTablet from "../CartTablet/CardTablet";
import "./CartModal.scss";

export default function CartModal({ handleCart }) {
  const { cartItems } = useContext(GlobalContext);
  const { count, products } = cartItems;

  const countItems = count === 1 ? `${count} item` : `${count} items`;

  return ReactDom.createPortal(
    <main className="cartmodal">
      <div className="cartmodal__overlay" onClick={() => handleCart()} />
      <section className="cartmodal__section">
        <div className="cartmodal__section__heading">
          <h1 className="cartmodal__section__heading__title">
            My Cart ({countItems})
          </h1>
          <Button
            button={"X"}
            className={"cartmodal__section__heading__button"}
            onClick={() => handleCart()}
          />
        </div>
        <CardTablet
          className={"cartmodal__section__flex"}
          handleCart={handleCart}
          count={count}
          products={products}
        />
      </section>
    </main>,
    document.getElementById("portal")
  );
}
