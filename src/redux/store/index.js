import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import authReducer from '../features/authSlice';
import initialReducer from '../features/initialSlice';
import persistReducer from "redux-persist/es/persistReducer";

const reducers = combineReducers({
  auth: authReducer,
  initial: initialReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
});

export default store;