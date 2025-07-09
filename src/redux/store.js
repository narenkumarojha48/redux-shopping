import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productsSlice";
import cartReducer from "./cartSlice";

export const store = configureStore({
  reducer: { products: productReducer, carts: cartReducer },
});
