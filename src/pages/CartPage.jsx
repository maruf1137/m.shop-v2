import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Title from "../components/Title";
import bgImg from "../images/bg-hero-1.jpg";
import {
  getCartTotalItem,
  getCartTotalPrice,
  getCartItemQuentity,
  removeCartProduct,
} from "../counter/CounterSlice";
import { ErrorMessage } from "../components/Messages";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cartProduct, cartTotalItem, cartTotalPrice } = useSelector(
    (state) => state.counter
  );
  const dispatch = useDispatch();

  const handleItemQuentity = (toggle, id) => {
    const props = [toggle, id];
    dispatch(getCartItemQuentity(props));
    dispatch(getCartTotalItem());
    dispatch(getCartTotalPrice());
  };

  useEffect(() => {
    dispatch(getCartTotalItem());
    dispatch(getCartTotalPrice());
  }, []);

  if (cartProduct.length === 0 || !cartProduct) {
    return (
      <div className="cart-container pb-5">
        <Title bgImg={bgImg} title="cart page" />
        <div className="cart pt-5 center">
          <ErrorMessage text={"your cart is empty"} />
          <button className="center btn-primary mt-2">
            <Link to="/products">start shopping</Link>
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <div className="cart-container ">
          <Title bgImg={bgImg} title="cart page" />
          <div className="cart">
            {cartProduct.map((product) => {
              // console.log(product);
              const { id, image, price, title, itemQuentity } = product;
              return (
                <div className="cart__item custom-container mt-6" key={id}>
                  <figure className="cart__image">
                    <img src={image} alt={title} />
                  </figure>
                  <h4 className="heading">{title}</h4>
                  <div className="cart__counter--btns">
                    <button
                      className="decrease"
                      onClick={() => handleItemQuentity("derease", id)}
                    >
                      -
                    </button>
                    <div className="counter">{itemQuentity}</div>
                    <button
                      className="increase"
                      onClick={() => handleItemQuentity("increase", id)}
                    >
                      +
                    </button>
                  </div>
                  <h4 className="price">{`$${price}`}</h4>
                  <button
                    className="item__remove btn-primary"
                    onClick={() => {
                      dispatch(removeCartProduct(id));
                      dispatch(getCartTotalItem());
                    }}
                  >
                    remove
                  </button>
                </div>
              );
            })}
          </div>

          <div className="custom-container">
            <div className="total mt-5 mb-5">
              <div className="total__item">total item's {cartTotalItem}</div>
              <div className="total__price">
                total price is {`$${cartTotalPrice}`}
              </div>
              <button className="total__btn btn-primary">proceed to pay</button>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default CartPage;
