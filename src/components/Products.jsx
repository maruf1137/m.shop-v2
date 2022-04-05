import React from "react";
import { BsFillCartFill, BsHeartFill } from "react-icons/bs";
import ProductsRating from "./ProductsRating";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  singleProduct,
  getCartProduct,
  getCartTotalItem,
  getWishlistProduct,
  getwishlistTotalItem,
} from "../counter/CounterSlice";
import { ErrorMessage } from "./Messages";

const Products = ({ products }) => {
  const dispatch = useDispatch();
  const { isLoading, isError, ErrorText } = useSelector(
    (state) => state.counter
  );

  const handleSingProduct = (id) => {
    const tampProduct = products.filter((product) => {
      return product.id === id;
    });
    dispatch(singleProduct(tampProduct));
  };

  const handleCartProducts = (product) => {
    dispatch(getCartProduct(product));
    dispatch(getCartTotalItem());
  };

  const handleWishlistProducts = (product) => {
    dispatch(getWishlistProduct(product));
    dispatch(getwishlistTotalItem());
  };

  if (isLoading) {
    return (
      <div className="spinner-container center">
        <h2>Loading...</h2>
      </div>
    );
  } else if (isError) {
    <ErrorMessage text="product not found, please try agein" />;
  } else {
    return (
      <div className="product">
        {products.map((product) => {
          return (
            <div className="product__item" key={product.id}>
              <img
                src={product.image}
                alt={product.title}
                className="product__img"
              />
              <div className="product__details">
                <h4 className="heading mb-1">{product.title}</h4>
                <h5 className="heading product__price mb-1">{`$${product.price}`}</h5>
                <ProductsRating rating={product.rating.rate} />
              </div>
              <div className="product__btns">
                <button
                  className="btn product__btn"
                  onClick={() => handleCartProducts(product)}
                >
                  <BsFillCartFill />
                </button>
                <button
                  className="btn product__btn"
                  onClick={() => handleWishlistProducts(product)}
                >
                  <BsHeartFill />
                </button>
              </div>
              <button
                className="view-btn btn-primary"
                onClick={() => handleSingProduct(product.id)}
              >
                <Link to={`/products/${product.id}`}>view product</Link>
                {/* view product */}
              </button>
            </div>
          );
        })}
      </div>
    );
  }
};

export default Products;
