import { configureStore } from "@reduxjs/toolkit";
import pizzaSlice from "./slices/pizzaSlice";
import cartSlice from "./slices/cartSlice";
import userSlice from "./slices/userSlice";

const store = configureStore({
  reducer: {
    pizzaSlice: pizzaSlice,
    cartSlice: cartSlice,
    userSlice: userSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
