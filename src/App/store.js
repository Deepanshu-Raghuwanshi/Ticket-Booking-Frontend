import { configureStore } from "@reduxjs/toolkit";
import  UserSlice  from "../Reducers/UserSlice";


export const store = configureStore({
  reducer: {
       user:UserSlice },
});