import { createSlice } from '@reduxjs/toolkit';
const loadingSlice = createSlice({
  initialState: false,
  name: 'loading',
  reducers:{
    setLoading(_,{payload}){
      return payload;
    }
  }
});
export const { reducer: loadingReducer, actions: loadingActions} = loadingSlice;