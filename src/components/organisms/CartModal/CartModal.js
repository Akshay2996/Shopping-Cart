import React, { useContext, useEffect, useRef } from "react";
import ReactDom from "react-dom";
import { GlobalContext } from "../../../contexts/GlobalContext";
import Button from "../../atoms/Button/Button";
import CardTablet from "../CartTablet/CardTablet";
import "./CartModal.scss";

export default function CartModal({ cartOpen }) {
  const {
    cartItems: { count, products },
    dispatch,
  } = useContext(GlobalContext);

  const ref = useRef(null);

  const countItems = count === 1 ? `${count} item` : `${count} items`;

  const keyDownHandler = (e) => {
    const modal = document.querySelector("#portal");
    console.log(modal);

    const focusableElements = `button, a[href], input, select`;

    const firstElement = modal.querySelectorAll(focusableElements)[0];
    console.log(firstElement);
    const focusableContent = modal.querySelectorAll(focusableElements);
    const lastElement = focusableContent[focusableContent.length - 1];
    console.log(lastElement);

    if (e.key !== "Tab") return;

    if (!e.shiftKey && document.activeElement === lastElement) {
      firstElement.focus();
      e.preventDefault();
    }

    if (e.shiftKey && document.activeElement === firstElement) {
      lastElement.focus();
      e.preventDefault();
    }
  };

  useEffect(() => {
    if (cartOpen) {
      const modal = document.querySelector("#portal");
      const focusableElements = `button, a[href], input, select, textarea`;

      const firstElement = modal.querySelectorAll(focusableElements)[0];
      firstElement.focus();

      ref?.current?.addEventListener("keydown", keyDownHandler);
    }

    return () => ref?.current?.removeEventListener("keydown", keyDownHandler);
  }, [ref, cartOpen]);

  return ReactDom.createPortal(
    <main className="cartmodal" ref={ref}>
      <div
        className="cartmodal__overlay"
        onClick={() => dispatch({ type: "HANDLE_CART", cartOpen: !cartOpen })}
      />
      <section className="cartmodal__section">
        <div className="cartmodal__section__heading">
          <h1 className="cartmodal__section__heading__title">
            My Cart ({countItems})
          </h1>
          <Button
            className={"cartmodal__section__heading__button"}
            onClick={() =>
              dispatch({ type: "HANDLE_CART", cartOpen: !cartOpen })
            }
          >
            &#10005;
          </Button>
        </div>
        <CardTablet
          className={"cartmodal__section__flex"}
          count={count}
          products={products}
        />
      </section>
    </main>,
    document.getElementById("portal")
  );
}
