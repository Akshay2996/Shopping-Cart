import React, { useContext } from "react";
import { ProductContext } from "../../../contexts/ProductContext";
import { useMediaQuery } from "../../../utils/useMediaQuery";
import Dropdown from "../../molecules/Dropdown/Dropdown";
import Sidebar from "../../molecules/Sidebar/Sidebar";
import Card from "../../organisms/Card/Card";
import "./Products.scss";

export default function Products() {
  const { filteredCategory, filteredProduct, handleProduct } =
    useContext(ProductContext);

  const browserWidth = useMediaQuery("(max-width: 480px)");

  return (
    <main className="product-container">
      {browserWidth ? (
        <Dropdown
          filteredCategory={filteredCategory}
          handleProduct={handleProduct}
        />
      ) : (
        <Sidebar
          filteredCategory={filteredCategory}
          handleProduct={handleProduct}
        />
      )}
      <main className="product-container__card">
        {filteredProduct.map((product) => (
          <Card
            key={product.id}
            id={product.id}
            imageUrl={product.imageURL}
            name={product.name}
            price={product.price}
            stock={product.stock}
            text={product.description}
          />
        ))}
      </main>
    </main>
  );
}
