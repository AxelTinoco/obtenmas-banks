import { Tuple, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import authReducer from '../features/authSlice';
import initialReducer from '../features/initialSlice';
import persistReducer from "redux-persist/es/persistReducer";
import thunk from "redux-thunk";


const reducers = combineReducers({
  auth: authReducer,
  initial: initialReducer,
});

const persistConfig = {
  key: "root",
  storage,
  timeout: 0
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export default store;