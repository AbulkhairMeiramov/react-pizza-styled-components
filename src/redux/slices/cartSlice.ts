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
  pizzaItems: CartPizzaItem[];
  totalPrice: number;
};

const initialState: InitialStateType = {
  pizzaItems: [],
  totalPrice: 0,
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

      state.totalPrice = state.pizzaItems.reduce((sum, el) => {
        return el.price * el.count + sum;
      }, 0);
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
      state.totalPrice = 0;
    },
  },
});

export const { addPizzaItem, minusPizzaItem, deletePizzaItem, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
