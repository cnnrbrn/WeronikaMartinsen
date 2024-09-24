import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: localStorage.getItem("carts")
    ? JSON.parse(localStorage.getItem("carts"))
    : [], // Consistent key name here
  statusTab: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const { productId, quantity, price } = action.payload;
      const indexProductId = state.items.findIndex(
        (item) => item.productId === productId
      );
      if (indexProductId >= 0) {
        state.items[indexProductId].quantity += quantity;
      } else {
        state.items.push({ productId, quantity, price });
      }
      localStorage.setItem("carts", JSON.stringify(state.items)); // Consistent key name here
      state.totalPrice = state.items.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
    },
    changeQuantity(state, action) {
      const { productId, quantity } = action.payload;
      const indexProductId = state.items.findIndex(
        (item) => item.productId === productId
      );
      if (quantity > 0) {
        state.items[indexProductId].quantity = quantity;
      } else {
        state.items = state.items.filter(
          (item) => item.productId !== productId
        );
      }
      localStorage.setItem("carts", JSON.stringify(state.items)); // Consistent key name here
      state.totalPrice = state.items.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      ); // Update total price
    },
    toggleStatusTab(state) {
      state.statusTab = !state.statusTab;
    },
    removeFromCart(state, action) {
      // Mutate the state.items array directly
      state.items = state.items.filter(
        (item) => item.productId !== action.payload.productId
      );
      localStorage.setItem("carts", JSON.stringify(state.items)); // Save updated cart to local storage
      state.totalPrice = state.items.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      ); // Update total price
    },
    clearCart(state) {
      state.items = [];
      localStorage.setItem("carts", JSON.stringify(state.items));
    },
  },
});

export const {
  addToCart,
  changeQuantity,
  toggleStatusTab,
  removeFromCart,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
export const selectTotalPrice = (state) => state.cart.totalPrice;
