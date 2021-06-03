import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import CartImage from "../../../../static/images/cart.svg";
import { GlobalContext } from "../../../contexts/GlobalContext";
import { useMediaQuery } from "../../../utils/useMediaQuery";
import Image from "../../atoms/Image/Image";
import CartModal from "../../organisms/CartModal/CartModal";
import "./Cart.scss";

export default function Cart() {
  const {
    cartItems: { count, cartOpen },
    dispatch,
  } = useContext(GlobalContext);

  const countItem = count === 1 ? `${count} item` : `${count} items`;

  const history = useHistory();
  const browserWidth = useMediaQuery("(min-width: 769px)");

  const handleBrowserWidth = () => {
    browserWidth
      ? dispatch({ type: "HANDLE_CART", cartOpen: !cartOpen })
      : history.push("/cartpage");
  };

  return (
    <>
      <div
        className="cart-wrapper"
        onClick={() => {
          handleBrowserWidth();
        }}
      >
        <Image
          source={CartImage}
          className={"cart-wrapper__image"}
          alt={"Cart Image"}
        />
        <p className="cart-wrapper__text">{countItem}</p>
      </div>
      {cartOpen ? <CartModal cartOpen={cartOpen} /> : ""}
    </>
  );
}
