import itemSlice from "./itemSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: { item: itemSlice.reducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
