import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export type PizzaType = {
  id: string;
  imageUrl: string;
  title: string;
  types: number[];
  sizes: number[];
  price: number;
  category: number;
  rating: number;
};

type InitialStateType = {
  pizzas: PizzaType[];
  status: boolean;
  categoryId: number;
};

const initialState: InitialStateType = {
  pizzas: [],
  status: false,
  categoryId: 0,
};

export const getPizzas = createAsyncThunk<
  PizzaType[],
  string,
  { rejectValue: string }
>("PizzaSlice", async (category, { rejectWithValue }) => {
  try {
    const { data } = await axios.request({
      method: "GET",
      url: `https://6322b272a624bced307cb4d9.mockapi.io/items?${category}`,
    });
    return data;
  } catch {
    return rejectWithValue("error");
  }
});

const pizzaSlice = createSlice({
  name: "pizzaSlice",
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPizzas.fulfilled, (state, action) => {
      state.pizzas = action.payload;
      state.status = false;
    });
    builder.addCase(getPizzas.pending, (state) => {
      state.status = true;
    });
    builder.addCase(getPizzas.rejected, (state) => {
      state.status = false;
    });
  },
});

export const { setCategoryId } = pizzaSlice.actions;

export default pizzaSlice.reducer;
