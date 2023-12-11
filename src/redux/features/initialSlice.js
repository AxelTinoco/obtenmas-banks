// eslint-disable-next-line no-undef
const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  userName: "",
  content: []
};

export const initialSlice = createSlice({
  name: "initial",
  initialState,
  reducers: {
    updateUserName: (state, action) => {
      state.userName = action.payload;
    },
    updateContent:(state ,action) => {
      state.content = action.payload
    },
    cleanInitialState:(state) => {
      state.idProceso = ""
    },
  }
})


// Action creators are generated for each case reducer function
export const {
  updateUserName,
  updateContent,
  cleanInitialState
} = initialSlice.actions;



export const selectUserName = (state) => state.initial.userName;
export const selectContent = (state) => state.initial.content;


export default initialSlice.reducer;
