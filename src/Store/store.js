import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";
import { productReducer } from "./ProductsSlice";
import { addproductReducer } from "./AddprodSlice";
import soldReducer from "./HistorySlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
    sold: soldReducer,
    //  addproduct: addproductReducer
  },
});

export default store;
