import React, { useState } from "react";
import "./Carousel.scss";
import ImageData from "../../../../server/banners/index.get.json";
import Image from "../../atoms/Image/Image";

export default function Carousel() {
  const [current, setCurrent] = useState(1);
  const [touchPosition, setTouchPosition] = useState(null);
  const length = ImageData.length;

  const handleSlide = (slideOrder) => {
    setCurrent(slideOrder);
  };

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e) => {
    const touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 10) {
      handleSlide(current === length ? 1 : current + 1);
    }

    if (diff < -10) {
      handleSlide(current === 1 ? length : current - 1);
    }

    setTouchPosition(null);
  };

  return (
    <section className="carousel">
      <div className="carousel__container">
        {ImageData.map((data) => (
          <div
            key={data.id}
            className={
              data.order === current
                ? "carousel__container__slide active"
                : "carousel__container__slide"
            }
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
          >
            {data.order === current && (
              <Image
                source={data.bannerImageUrl}
                alt={data.bannerImageAlt}
                className={"carousel__container__slide__image"}
              />
            )}
          </div>
        ))}
      </div>
      <button
        className={"carousel__left-button"}
        onClick={() => handleSlide(current === 1 ? length : current - 1)}
      >
        Prev
      </button>
      <button
        className={"carousel__right-button"}
        onClick={() => handleSlide(current === length ? 1 : current + 1)}
      >
        Next
      </button>
      <div className="carousel__nav">
        {ImageData.map((data) => (
          <button
            key={data.id}
            className="carousel__nav__dots"
            onClick={() => handleSlide(data.order)}
            aria-label={data.bannerImageAlt}
          ></button>
        ))}
      </div>
    </section>
  );
}
