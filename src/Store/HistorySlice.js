const { createSlice } = require("@reduxjs/toolkit");

const InitialState = {
  sold: [],
  totalqty: 0,
  totalprice: 0,
};

const soldSlice = createSlice({
  name: "sold",
  initialState: InitialState,
  reducers: {
    historyadd(state, action) {
      state.sold.push(action.payload);
    },

    remove(state, action) {
      state.sold = state.sold.filter((item) => item.id !== action.payload);
    },
  },
});

export const { historyadd, remove } = soldSlice.actions;
export default soldSlice.reducer;
