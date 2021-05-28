import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import CartImage from "../../../../static/images/cart.svg";
import { GlobalContext } from "../../../contexts/GlobalContext";
import { useMediaQuery } from "../../../utils/useMediaQuery";
import Image from "../../atoms/Image/Image";
import "./Cart.scss";

export default function Cart({ handleCart }) {
  const {
    cartItems: { count },
  } = useContext(GlobalContext);

  const countItem = count === 1 ? `${count} item` : `${count} items`;

  const history = useHistory();
  const browserWidth = useMediaQuery("(min-width: 769px)");

  const handleBrowserWidth = () => {
    browserWidth ? handleCart() : history.push("/cartpage");
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
    </>
  );
}
