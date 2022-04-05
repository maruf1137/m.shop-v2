import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import bgImg from "../images/bg-hero-1.jpg";
import Title from "../components/Title";
import { ErrorMessage } from "../components/Messages";
import { Link } from "react-router-dom";
import {
  getwishlistTotalItem,
  removeWishlistProduct,
  getCartProduct,
  getCartTotalItem,
} from "../counter/CounterSlice";

const WishlistPage = () => {
  const { wishlistProduct } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getwishlistTotalItem());
  }, []);

  if (wishlistProduct.length === 0 || !wishlistProduct) {
    console.log(wishlistProduct);
    return (
      <div className="wishlist pb-5">
        <Title bgImg={bgImg} title="wishlist page" />
        <div className="pt-5 center">
          <ErrorMessage text={"your wishlist is empty"} />
          <button className="center btn-primary mt-2">
            <Link to="/products">start sopping</Link>
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="wishlist-container">
        <Title bgImg={bgImg} title="wishlist page" />
        <div className="wishlist">
          {wishlistProduct.map((product) => {
            const { id, image, price, title } = product;
            return (
              <div className="wishlist__item custom-container" key={id}>
                <figure className="wishlist__image">
                  <img src={image} alt={title} />
                </figure>
                <h4 className="heading">{title}</h4>
                <h4 className="price">{`$${price}`}</h4>
                <button
                  className="item__view btn-primary"
                  onClick={() => {
                    dispatch(getCartProduct(product));
                    dispatch(getCartTotalItem());
                  }}
                >
                  add to cart
                </button>
                <button
                  className="item__remove btn-primary"
                  onClick={() => {
                    dispatch(removeWishlistProduct(id));
                    dispatch(getwishlistTotalItem());
                  }}
                >
                  remove
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
};

export default WishlistPage;
