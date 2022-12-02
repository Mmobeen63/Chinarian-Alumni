import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Reducers/auth";

const store = configureStore({
  reducer: { authInfo: authReducer },
});
export default store;
