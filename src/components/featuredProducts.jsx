import React from "react";
import Products from "./Products";
import { useSelector } from "react-redux";

const FeaturedProducts = () => {
  const { featuredProducts } = useSelector((state) => state.counter);

  return (
    <div className="featuredProducts">
      <div className="custom-container">
        <h2 className="heading mb-6 center">featured products</h2>
        <Products products={featuredProducts} />
      </div>
    </div>
  );
};

export default FeaturedProducts;
