import {configureStore} from '@reduxjs/toolkit';
import productListReducer from './reducers/productList';

export const store = configureStore({
  reducer: {
    productList: productListReducer,
  },
});
