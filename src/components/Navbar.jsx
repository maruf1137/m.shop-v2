import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsCart, BsHeart } from "react-icons/bs";
import { GoThreeBars } from "react-icons/go";
import { useSelector } from "react-redux";
import UserAuth from "./UserAuth";

const Navbar = () => {
  const { cartTotalItem, wishlistTotalItem } = useSelector(
    (state) => state.counter
  );
  const [sidebar, setSidebar] = useState(false);
  const handleSidebar = () => {
    if (sidebar === false) {
      setSidebar(true);
    } else {
      setSidebar(false);
    }
  };

  return (
    <>
      <div className="nav">
        <div className="nav__logo">
          <Link to="/" className="logo">
            m.shop
          </Link>
        </div>
        <ul className="nav__list">
          <li className="nav__item">
            <Link to="/" className="nav__link">
              Home
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/products" className="nav__link">
              products
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/contact" className="nav__link">
              contact
            </Link>
          </li>
        </ul>

        <UserAuth />

        <div className="nav__btns">
          <button className="nav__btn cart">
            <span>{cartTotalItem}</span>
            <Link to="/cart">
              <BsCart />
            </Link>
          </button>
          <button className="nav__btn wislist">
            <span>{wishlistTotalItem}</span>
            <Link to="/wishlist">
              <BsHeart />
            </Link>
          </button>
        </div>
        <div className="mbl-bar" onClick={handleSidebar}>
          <GoThreeBars />
        </div>
      </div>

      <div className={sidebar ? "side-nav show-sidebar" : "side-nav"}>
        <div className="nav__logo">
          <Link to="/" className="logo">
            m.shop
          </Link>
        </div>
        <ul className="nav__list">
          <li className="nav__item">
            <Link to="/" className="nav__link" onClick={handleSidebar}>
              Home
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/products" className="nav__link" onClick={handleSidebar}>
              products
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/contact" className="nav__link" onClick={handleSidebar}>
              contact
            </Link>
          </li>
        </ul>

        <div className="nav__btns">
          <button className="nav__btn cart" onClick={handleSidebar}>
            <span>{cartTotalItem}</span>
            <Link to="/cart">
              <BsCart />
            </Link>
          </button>
          <button className="nav__btn wislist" onClick={handleSidebar}>
            <span>{wishlistTotalItem}</span>
            <Link to="/wishlist">
              <BsHeart />
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
