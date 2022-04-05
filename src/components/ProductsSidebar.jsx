import React, { useState, useEffect, useCallback, useMemo } from "react";
import {
  updateFilters,
  filterProdcts,
  filterCategory,
  getFilterCategoryText,
} from "../counter/CounterSlice";
import { useSelector, useDispatch } from "react-redux";

const ProductsSidebar = () => {
  const dispatch = useDispatch();
  const { filters, products, filterCategoriesText } = useSelector(
    (state) => state.counter
  );

  const handleSearche = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    dispatch(updateFilters([name, value]));
    dispatch(filterProdcts());
  };

  const handleFilter = (category) => {
    let tampProduct;
    if (category === "all") {
      tampProduct = products;
    } else {
      tampProduct = products.filter((product) => product.category === category);
    }
    dispatch(filterCategory(tampProduct));
  };

  useEffect(() => {
    dispatch(getFilterCategoryText(products));
  }, [products]);

  return (
    <div className="sidebar-container">
      <form className="form  pt-4" onClick={(e) => e.preventDefault()}>
        <input
          type="text"
          className="form__input mb-3"
          placeholder="search something"
          value={filters.text}
          name="text"
          onChange={(e) => handleSearche(e)}
        />
        <div className="category">
          <h3 className="heading mb-5">categories</h3>
          {filterCategoriesText.map((category, index) => {
            return (
              <button
                className="btn"
                key={index}
                onClick={() => handleFilter(category)}
              >
                {category}
              </button>
            );
          })}
        </div>
      </form>
    </div>
  );
};

export default ProductsSidebar;
