import React from "react";
import "../index.css";
import { CartCard } from "../Components/CartCard";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { TotalCard } from "../Components/TotalCard";
import { getCartTotal } from "../Store/CartSlice";

export const Cart = () => {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);

  console.log(cart);

  return (
    <div className="main">
      <h2 className="heading"> Cart:</h2>
      {cart.length === 0 ? (
        <h5 className="justify-content-center m-5"> No Products in Cart! </h5>
      ) : (
        cart?.map((item) => <CartCard data={item} />)
      )}
      <TotalCard />
    </div>
  );
};
