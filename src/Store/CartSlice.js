const { createSlice } = require("@reduxjs/toolkit");

const InitialState = {
  cart: [],
  totalqty: 0,
  totalprice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: InitialState,
  reducers: {
    add(state, action) {
      let find = state.cart.findIndex((item) => item.id === action.payload.id);
      if (find >= 0) {
        state.cart[find].qty += 1;
      } else {
        state.cart.push(action.payload);
      }
    },

    remove(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },

    getCartTotal(state) {
      let { totalqty, totalprice } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, qty } = cartItem;
          const itemTotal = price * qty;
          cartTotal.totalprice += itemTotal;
          cartTotal.totalqty += qty;
          return cartTotal;
        },
        {
          totalprice: 0,
          totalqty: 0,
        }
      );
      state.totalprice = parseInt(totalprice.toFixed(2));
      state.totalqty = totalqty;
    },

    addqty(state, action) {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload) {
          return { ...item, qty: item.qty + 1 };
        }
        return item;
      });
    },

    subqty(state, action) {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload && item.qty > 0) {
          return { ...item, qty: item.qty - 1 };
        }
        return item;
      });
    },

    done(state, action) {
      state.cart = [];
      state.totalprice = 0;
      state.totalqty = 0;
    },
  },
});

export const { add, remove, addqty, subqty, getCartTotal, done } =
  cartSlice.actions;
export default cartSlice.reducer;
