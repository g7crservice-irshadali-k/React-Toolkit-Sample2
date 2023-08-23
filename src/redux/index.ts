import { combineReducers } from "@reduxjs/toolkit";
import { getTodoListSlice } from "./todos/todoSlice";

export default combineReducers({
  getTodos: getTodoListSlice,
});
