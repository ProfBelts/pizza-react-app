import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./users/userSlice";
import cartReducer from "./cart/cartSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});

export default store;
