import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import busSitReducer from './slice/busSiteSlice';
import counterReducer from './slice/counterSlice';

// persist config
const persistConfig = {
  key: 'persist-sits',
  storage,
  whitelist: ['busSit'] // only busSit will be persisted
};

// combine reducer
const rootReducer = combineReducers({
  counter: counterReducer,
  busSit: busSitReducer
});

// persist reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

export default configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  })
});
