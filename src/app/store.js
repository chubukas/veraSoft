import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "../features/slices/UserSlice";
import OrdersSlide from "../features/slices/OrderSlice";

export const store = configureStore({
  reducer: {
    user: UserReducer,
    orders: OrdersSlide,
  },
});
