import { configureStore } from "@reduxjs/toolkit";
import navigationReducer from "./navigationSlice";
import darkModeReducer from "./darkModeSlice";
import authReducer from "./authSlice";

export const store = configureStore({
  reducer: {
    navigation: navigationReducer,
    darkMode: darkModeReducer,
    auth: authReducer,
  },
});
