import React, { useEffect } from "react";
import "./sass/main.scss";
import { Footer, Navbar, SingleProduct } from "./components/components";
import {
  HomePage,
  Contacts,
  ProductsPage,
  ErrorPage,
  CartPage,
  WishlistPage,
} from "./pages/pages";
import { Switch, Route } from "react-router-dom";

import { useDispatch } from "react-redux";
import {
  getProducts,
  productsError,
  productsLoad,
  getwishlistTotalItem,
  getCartTotalItem,
} from "./counter/CounterSlice";

function App() {
  const dispatch = useDispatch();

  const fetchData = async () => {
    dispatch(productsLoad());
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      dispatch(getProducts(data));
    } catch (error) {
      console.log(error);
      dispatch(productsError(error));
    }
  };

  useEffect(() => {
    fetchData();
    dispatch(getwishlistTotalItem());
    dispatch(getCartTotalItem());
  }, []);

  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/products">
          <ProductsPage />
        </Route>
        <Route exact path="/products/:id" children={<SingleProduct />}></Route>
        <Route exact path="/contact">
          <Contacts />
        </Route>
        <Route exact path="/cart">
          <CartPage />
        </Route>
        <Route exact path="/wishlist">
          <WishlistPage />
        </Route>
        <Route path="*">
          <ErrorPage />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
