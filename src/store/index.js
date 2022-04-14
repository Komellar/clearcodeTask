import { configureStore } from "@reduxjs/toolkit";
import friendsSlice from "./slices/friends-slice";

const store = configureStore({
  reducer: {
    friends: friendsSlice.reducer
  }
});

export default store;
