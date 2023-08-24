import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { sortTypes } from "../../variables/constants";

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

export type InitialStateType = {
  pizzas: PizzaType[];
  status: boolean;
  categoryId: number;
  activeSortType: { name: string; id: number };
};

const initialState: InitialStateType = {
  pizzas: [],
  status: false,
  categoryId: 0,
  activeSortType: { name: sortTypes[0].name, id: sortTypes[0].id },
};

export const getPizzas = createAsyncThunk<
  PizzaType[],
  { category: string; sortBy: string },
  { rejectValue: string }
>("PizzaSlice", async ({ category, sortBy }, { rejectWithValue }) => {
  try {
    const { data } = await axios.request({
      method: "GET",
      url: `https://6322b272a624bced307cb4d9.mockapi.io/items?${category}&sortBy=${sortBy}`,
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
    setActiveSortType(state, action) {
      state.activeSortType = action.payload;
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

export const { setCategoryId, setActiveSortType } = pizzaSlice.actions;

export default pizzaSlice.reducer;
