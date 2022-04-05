import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductsRating from "./ProductsRating";
import { BsFillCartFill, BsHeartFill } from "react-icons/bs";
import {
  getCartProduct,
  getWishlistProduct,
  getwishlistTotalItem,
  getCartTotalItem,
} from "../counter/CounterSlice";

const SingleProduct = () => {
  const singleProduct = useSelector((state) => state.counter.singleProduct);
  const dispatch = useDispatch();

  console.log(singleProduct);

  return (
    <div className="singleProduct-container">
      {singleProduct.map((product) => {
        const { id, title, description, rating, image, price } = product;
        return (
          <div className="singleProduct" id={id}>
            <div className="singleProduct__image">
              <img src={image} alt={title} />
            </div>
            <div className="singleProduct__content">
              <h2 className="heading mb-3">{title}</h2>
              <p className="text mb-3">{description}</p>
              <ProductsRating rating={rating.rate} />
              <h2 className="heading mb-3 mt-3">{`$${price}`}</h2>

              <div className="btns">
                <button
                  className="cart singleProduct__btn btn-primary"
                  onClick={() => {
                    dispatch(getCartProduct(product));
                    dispatch(getCartTotalItem());
                  }}
                >
                  add to cart
                </button>
                <button
                  className="wishlist singleProduct__btn btn-primary"
                  onClick={() => {
                    dispatch(getWishlistProduct(product));
                    dispatch(getwishlistTotalItem());
                  }}
                >
                  add to wishlist
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SingleProduct;
