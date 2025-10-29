import { configureStore } from "@reduxjs/toolkit";
import navigationReducer from "./navigationSlice";
import darkModeReducer from "./darkModeSlice";

export const store = configureStore({
  reducer: {
    navigation: navigationReducer,
    darkMode: darkModeReducer,
  },
});
