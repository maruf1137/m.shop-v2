import React, { useEffect } from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const ProductsRating = ({ rating }) => {
  //   console.log(rating);
  const TampStar = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;
    return (
      <div className="rating" key={index}>
        {rating >= index + 1 ? (
          <BsStarFill />
        ) : rating >= number ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </div>
    );
  });

  return <div className="product__ratings">{TampStar}</div>;
};

export default ProductsRating;
