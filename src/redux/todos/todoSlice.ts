import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "../../config/axios.config";

//Function for getting todos
export const getTodos: any = createAsyncThunk("getTodoList", async () => {
  try {
    console.log("inside comments");
    const { data } = await API.get("posts/1/comments/");
    console.log(data);
    return data;
  } catch (error: any) {}
});

//Code for creating a slice
//Which will store data in redux state
const getTodoSlice = createSlice({
  name: "getTodoList",
  initialState: {
    loading: false,
    data: [],
    error: "",
  },
  reducers: {
    reset: (state) => {
      state.loading = false;
      state.data = [];
      state.error = "";
    },
  },
  extraReducers: {
    [getTodos.pending]: (state, action) => {
      state.loading = true;
      state.data = [];
      state.error = "";
    },
    [getTodos.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    },
    [getTodos.rejected]: (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.payload;
    },
  },
});

export const getTodoListSlice = getTodoSlice.reducer;
export const { reset: resetGettodos } = getTodoSlice.actions;
