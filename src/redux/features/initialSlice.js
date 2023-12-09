// eslint-disable-next-line no-undef
const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  nameUser: "",
  contenido: []
};

export const initialSlice = createSlice({
  name: "initial",
  initialState,
  reducers: {
    updateNameUser: (state, action) => {
      state.nameUser = action.payload;
    },
    updateContenido:(state ,action) => {
      state.contenido = action.payload
    },
    cleanInitialState:(state) => {
      state.idProceso = ""
    },
  }
})


// Action creators are generated for each case reducer function
export const {
  updateNameUser,
  updateContenido,
  cleanInitialState
} = initialSlice.actions;



export const selectNameUser = (state) => state.initial.nameUser;
export const selectContenido = (state) => state.initial.contenido;


export default initialSlice.reducer;
