import React from "react";
import "./CartSection.scss";
import Counter from "../../molecules/Counter/Counter";
import Image from "../../atoms/Image/Image";

export default function CartSection({ imageUrl, name, price, quantity, id }) {
  const totalPrice = quantity * price;

  return (
    <section className="cart-section">
      <Image
        source={imageUrl}
        alt={`${name} Image`}
        className="cart-section__image"
      />
      <h2 className="cart-section__title">{name}</h2>
      <Counter id={id} quantity={quantity} price={price} />
      <p className="cart-section__totalprice">Rs.{totalPrice}</p>
    </section>
  );
}
