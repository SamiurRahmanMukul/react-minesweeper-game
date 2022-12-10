import { configureStore } from '@reduxjs/toolkit';
import busSitReducer from './slice/busSiteSlice';
import counterReducer from './slice/counterSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    busSit: busSitReducer
  }
});
