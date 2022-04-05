import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  singleProduct: [],
  featuredProducts: [],
  isLoading: true,
  isError: false,
  ErrorText: "",
  cartProduct: localStorage.getItem("cartItem")
    ? JSON.parse(localStorage.getItem("cartItem"))
    : [],
  wishlistProduct: localStorage.getItem("wishlistItem")
    ? JSON.parse(localStorage.getItem("wishlistItem"))
    : [],
  cartTotalPrice: 0,
  cartTotalItem: 0,
  wishlistTotalItem: 0,
  filters: {
    text: "",
    name: "",
    minPrice: 0,
    maxPrice: 0,
    price: 0,
  },
  filterProdcuts: [],
  filterCategoriesText: [],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    productsLoad: (state, action) => {
      state.isLoading = true;
      state.isError = false;
    },
    getProducts: (state, action) => {
      let maxPrice = action.payload.map((p) => p.price);
      maxPrice = Math.max(...maxPrice);
      state.filters.maxPrice = maxPrice;
      state.filters.price = maxPrice;
      state.products = action.payload;
      state.isLoading = false;
      state.isError = false;
      state.filterProdcuts = state.products;
      state.featuredProducts = state.products.slice(0, 6);
    },
    productsError: (state, action) => {
      console.error(action.payload);
      state.isError = true;
      state.isLoading = false;
      state.ErrorMessage = action.payload;
    },

    singleProduct: (state, action) => {
      state.singleProduct = action.payload;
    },
    getCartProduct: (state, action) => {
      const itemIndex = state.cartProduct.findIndex(
        (product) => product.id === action.payload.id
      );
      if (itemIndex > 1) return;
      const tampCart = { ...action.payload, itemQuentity: 1 };
      state.cartProduct.push(tampCart);
      localStorage.setItem("cartItem", JSON.stringify(state.cartProduct));
    },
    getWishlistProduct: (state, action) => {
      const itemIndex = state.wishlistProduct.findIndex(
        (product) => product.id === action.payload.id
      );
      if (itemIndex >= 0) return;
      state.wishlistProduct.push(action.payload);
      localStorage.setItem(
        "wishlistItem",
        JSON.stringify(state.wishlistProduct)
      );
    },

    getCartTotalItem: (state, action) => {
      state.cartTotalItem = state.cartProduct.length;
    },
    getwishlistTotalItem: (state, action) => {
      state.wishlistTotalItem = state.wishlistProduct.length;
    },

    getCartItemQuentity: (state, action) => {
      const btn = action.payload[0];
      const id = action.payload[1];
      const itemIndex = state.cartProduct.map((product) => {
        if (product.id !== id) return;
        if (btn === "increase") {
          product.itemQuentity += 1;
        } else {
          if (product.itemQuentity <= 1) return;
          product.itemQuentity -= 1;
        }
      });
      localStorage.setItem("cartItem", JSON.stringify(state.cartProduct));
    },

    getCartTotalPrice: (state, action) => {
      let { total, quentity } = state.cartProduct.reduce(
        (cartTotal, cartItem) => {
          const { price, itemQuentity } = cartItem;
          const itemTotal = price * itemQuentity;

          cartTotal.total += itemTotal;
          cartTotal.quentity += itemQuentity;

          return cartTotal;
        },
        {
          total: 0,
          quentity: 0,
        }
      );

      total = parseFloat(total.toFixed(2));
      state.cartTotalPrice = total;
      state.cartTotalItem = quentity;
    },

    removeCartProduct: (state, action) => {
      const tampCartProduct = state.cartProduct.filter(
        (product) => product.id !== action.payload
      );
      state.cartProduct = tampCartProduct;
      localStorage.setItem("cartItem", JSON.stringify(tampCartProduct));
    },

    removeWishlistProduct: (state, action) => {
      const tampWishlistProduct = state.wishlistProduct.filter(
        (product) => product.id !== action.payload
      );
      state.wishlistProduct = tampWishlistProduct;
      localStorage.setItem("WishlistItem", JSON.stringify(tampWishlistProduct));
    },

    updateFilters: (state, action) => {
      const name = action.payload[0];
      const value = action.payload[1];
      state.filters.text = value;
      state.filters.name = name;
    },

    filterProdcts: (state, action) => {
      const allProducts = state.products;
      let tampProduct = [...allProducts];

      if (state.filters.text) {
        const text = state.filters.text;
        tampProduct = state.products.filter((product) => {
          return product.title.toLowerCase().startsWith(text);
        });
      }
      state.products = tampProduct;
    },

    filterCategory: (state, action) => {
      state.filterProdcuts = action.payload;
    },

    getFilterCategoryText: (state, action) => {
      let unique = action.payload.map((p) => p.category);
      state.filterCategoriesText = ["all", ...new Set(unique)];
    },
  },
});

export const {
  getProducts,
  productsError,
  productsLoad,
  singleProduct,
  getCartProduct,
  getCartTotalItem,
  getCartTotalPrice,
  getWishlistProduct,
  getwishlistTotalItem,
  getCartItemQuentity,
  removeCartProduct,
  removeWishlistProduct,
  updateFilters,
  filterProdcts,
  filterCategory,
  getFilterProducts,
  getFilterCategoryText,
} = counterSlice.actions;

export default counterSlice.reducer;
