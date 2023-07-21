import { configureStore } from "@reduxjs/toolkit";
import pizzaSlice from "./slices/pizzaSlice";

const store = configureStore({
  reducer: {
    pizzaSlice: pizzaSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
