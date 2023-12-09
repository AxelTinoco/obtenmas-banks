// eslint-disable-next-line no-undef
const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  uid: "",
  id: "",
  otp: "",
  name: "",
  email: "",
  isAuthenticated: false,
  headers: {
    "access-token": "",
    client: "",
    uid: "",
  },
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateEmail: (state, action) => {
      state.email = action.payload;
    },
    updateUid: (state, action) => {
      state.uid = action.payload;
    },
    updateId: (state, action) => {
      state.id = action.payload;
    },
    updateOtp: (state, action) => {
      state.otp = action.payload;
    },
    updateName: (state, action) => {
      state.name = action.payload;
    },
    updateHeaders: (state, action) => {
      state.headers = action.payload;
    },
    updateIsAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    logout: (state) => {
      state.email = "";
      state.uid = "";
      state.id = "";
      state.otp = "";
      state.name = "";
      state.isAuthenticated = false;
      state.headers = {
        "access-token": "",
        client: "",
        uid: "",
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  updateEmail,
  updateUid,
  updateId,
  updateOtp,
  updateName,
  updateIsAuthenticated,
  updateHeaders,
  logout,
} = authSlice.actions;

export const selectEmail = (state) => state.auth.email;
export const selectUid = (state) => state.auth.uid;
export const selectOtp = (state) => state.auth.otp;
export const selectId = (state) => state.auth.id;
export const selectName = (state) => state.auth.name;
export const selectHeaders = (state) => state.auth.headers;
export const selectIsAutehnticated = (state) => state.auth.isAuthenticated;

export default authSlice.reducer;
