import React from "react";
import Products from "./Products";
import { useSelector } from "react-redux";
// import spinner from "../images/Spinner-5.gif";

const FeaturedProducts = () => {
  const { featuredProducts, isLoading } = useSelector((state) => state.counter);

  // const Loading = () => {
  //     return (
  //       <div className="spinner-container center">
  //         <img src={spinner} alt="" />
  //       </div>
  //     );
  //   };

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
