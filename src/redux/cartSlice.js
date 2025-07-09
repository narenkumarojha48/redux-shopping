import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  loading: false,
  totalCartPrice: 0,
  carts: [],
  error: "",
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let newcart = { ...action.payload };
      newcart.quantity = 1;
      state.carts.push(newcart);
      state.totalCartPrice = state.carts.reduce(
        (acc, curr) => acc + curr.price * curr.quantity,
        0
      );
    },
    removeFromCart: (state, action) => {
      let newcart = state.carts.filter((cart) => cart.id !== action.payload);

      state.carts = newcart;
      state.totalCartPrice = state.carts.reduce(
        (acc, curr) => acc + curr.price * curr.quantity,
        0
      );
      // console.log("after remove",JSON.parse(JSON.stringify(state.carts)));
    },
    incrementQuantity: (state, action) => {
      console.log("icrement ", JSON.parse(JSON.stringify(action.payload)));
      state.carts = state.carts.map((cart) => {
        if (cart.id === action.payload.id) {
          cart.quantity = action.payload.qty;
          return cart;
        }
        return cart;
      });
      state.totalCartPrice = state.carts.reduce(
        (acc, curr) => acc + curr.price * curr.quantity,
        0
      );
    },
    decrementQuantity: (state, action) => {
      state.carts = state.carts.map((cart) => {
        if (cart.id === action.payload.id) {
          cart.quantity = action.payload.qty;
          return cart;
        }
        return cart;
      });
      state.totalCartPrice = state.carts.reduce(
        (acc, curr) => acc + curr.price * curr.quantity,
        0
      );
    },
  },
 
});
export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
