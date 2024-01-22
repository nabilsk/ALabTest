import {createSlice} from '@reduxjs/toolkit';

const productListSlice = createSlice({
  name: 'productList',
  initialState: {
    productListData: [],
  },
  reducers: {
    setProductlist: (state, action) => {
      state.productListData = action.payload;
    },
  },
});

export const {setProductlist} = productListSlice.actions;

export default productListSlice.reducer;
