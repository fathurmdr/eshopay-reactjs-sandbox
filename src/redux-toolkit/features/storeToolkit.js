import { configureStore, createSlice } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

export default configureStore({
  reducer: {
    cartStore: cartReducer
  }
});
