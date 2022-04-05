import React from "react";
import bgImg from "../images/bg-hero-1.jpg";
import Title from "../components/Title";
import Products from "../components/Products";
import ProductsSidebar from "../components/ProductsSidebar";
import { useSelector } from "react-redux";

const ProductsPage = () => {
  const { filterProdcuts } = useSelector((state) => state.counter);

  return (
    <div className="productsPage">
      <Title bgImg={bgImg} title="product page" />

      <div className="products">
        <div className="sidebar">
          <ProductsSidebar />
        </div>
        <div className="list">
          <Products products={filterProdcuts} />
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
