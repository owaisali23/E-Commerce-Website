import { useDispatch, useSelector } from "react-redux";
import { addproduct } from "../Store/ProductsSlice";
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const AddProduct = createAsyncThunk("addproduct", async () => {
  // const dispatch = useDispatch();

  fetch("https://fakestoreapi.com/products", {
    method: "POST",
    body: JSON.stringify({
      title: "test product",
      price: 13.5,
      description: "lorem ipsum set",
      image: "https://i.pravatar.cc",
      category: "electronic",
    }),
  })
    .then((res) => res.json())
    .then((json) => console.log(json));
  // .then((json) => dispatch(addproduct(json)));
});

const addproductsSlice = createSlice({
  name: "addproduct",
  initialState: {
    product: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [AddProduct.pending]: (state, action) => {
      state.loading = true;
    },

    [AddProduct.fulfilled]: (state, action) => {
      state.loading = false;
      state.product = action.payload;
    },
    [AddProduct.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

// export default ProductsSlice.reducer;
export const addproductReducer = addproductsSlice.reducer;
