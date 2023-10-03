const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const showProducts = createAsyncThunk("product", async () => {
  const resp = await fetch("https://fakestoreapi.com/products");

  try {
    const data = await resp.json();
    let newArray = data.map((product) => {
      return { ...product, qty: 1 };
    });
    return newArray;
  } catch (error) {
    // return rejectWithValue(error);
  }
});

const productsSlice = createSlice({
  name: "product",
  initialState: {
    product: [],
    loading: false,
    error: null,
  },
  reducers: {
    //   addproduct(state, action){
    //     state.product.push(action.payload);
    //  },
  },
  extraReducers: {
    [showProducts.pending]: (state, action) => {
      state.loading = true;
    },

    [showProducts.fulfilled]: (state, action) => {
      state.loading = false;
      state.product = action.payload;
    },
    [showProducts.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

// export const { addproduct } = productsSlice.actions;
export const productReducer = productsSlice.reducer;
