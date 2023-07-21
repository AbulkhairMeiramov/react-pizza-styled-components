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
};

const initialState: InitialStateType = {
  pizzas: [],
  status: false,
};

export const getPizzas = createAsyncThunk<
  PizzaType[],
  undefined,
  { rejectValue: string }
>("PizzaSlice", async (_, { rejectWithValue }) => {
  try {
    const { data } = await axios.request({
      method: "GET",
      url: "https://6322b272a624bced307cb4d9.mockapi.io/items",
    });
    return data;
  } catch {
    return rejectWithValue("error");
  }
});

const pizzaSlice = createSlice({
  name: "pizzaSlice",
  initialState,
  reducers: {},
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

export const {} = pizzaSlice.actions;

export default pizzaSlice.reducer;
