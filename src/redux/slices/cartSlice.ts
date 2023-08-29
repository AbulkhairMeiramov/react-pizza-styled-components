import { createSlice } from "@reduxjs/toolkit";

export type CartPizzaItem = {
  id: string;
  imageUrl: string;
  title: string;
  type: string;
  size: number;
  price: number;
  count: number;
};

export type InitialStateType = {
  totalCount: number;
  pizzaItems: CartPizzaItem[];
};

const initialState: InitialStateType = {
  totalCount: 0,
  pizzaItems: [],
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addPizzaItem(state, action) {
      const findPizzaItem = state.pizzaItems.find(
        (item) => item.id === action.payload.id
      );
      if (findPizzaItem) {
        findPizzaItem.count++;
      } else {
        state.pizzaItems.push({ ...action.payload, count: 1 });
      }
    },
    minusPizzaItem(state, action) {
      const findPizzaItem = state.pizzaItems.find(
        (item) => item.id === action.payload
      );
      if (findPizzaItem) {
        findPizzaItem.count--;
      }
    },
    deletePizzaItem(state, action) {
      state.pizzaItems = state.pizzaItems.filter(
        (item) => item?.id !== action.payload
      );
    },
    clearCart(state) {
      state.pizzaItems = [];
      state.totalCount = 0;
    },
  },
});

export const { addPizzaItem, minusPizzaItem, deletePizzaItem, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
