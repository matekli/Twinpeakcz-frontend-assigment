import { configureStore } from "@reduxjs/toolkit";
import { coinApi } from "../services/coin";

export const store = configureStore({
  reducer: {
    [coinApi.reducerPath]: coinApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(coinApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
