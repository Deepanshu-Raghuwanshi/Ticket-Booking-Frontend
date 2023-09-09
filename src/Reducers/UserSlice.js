import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Oname: '',
  Uname:''

};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    Oname: (state,action) => {
      
      state.Oname = action.payload;
    },
     Uname: (state,action) => {
     
      state.Uname = action.payload;
    },
   
  
  },
});


export const {Oname, Uname} =
  UserSlice.actions;

export default UserSlice.reducer;


