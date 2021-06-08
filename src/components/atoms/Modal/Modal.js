import React, { useContext, useEffect, useRef } from "react";
import ReactDom from "react-dom";
import { GlobalContext } from "../../../contexts/GlobalContext";
import "./Modal.scss";

export default function Modal({ children }) {
  const {
    cartItems: { cartOpen },
    dispatch,
  } = useContext(GlobalContext);

  const ref = useRef(null);

  const keyDownHandler = (e) => {
    const modal = document.querySelector("#portal");

    const focusableElements = modal.querySelectorAll(
      `button, a[href], input, select, textarea`
    );

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

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
    <div className="modal" ref={ref}>
      <div
        className="modal__overlay"
        onClick={() => dispatch({ type: "HANDLE_CART", cartOpen: !cartOpen })}
      />
      <div>{children}</div>
    </div>,
    document.getElementById("portal")
  );
}
