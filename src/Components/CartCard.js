import React from "react";
import "../index.css";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import { addqty, subqty, remove } from "../Store/CartSlice";

export const CartCard = ({ data }) => {
  const dispatch = useDispatch();

  const handleremove = (data) => {
    dispatch(remove(data));
  };

  const handleaddqty = (data) => {
    dispatch(addqty(data));
  };

  const handlesubqty = (data) => {
    dispatch(subqty(data));
  };

  return (
    <div className="container m-auto">
      <div className="row custom-row2  mx-5 my-4">
        <div className="col-4">
          <img className="img" variant="top" src={data.image}></img>
        </div>
        <div className="desc col-4">
          <h5>{data.title}</h5>
          <p>${data.price}</p>
          <div className="qty">
            <Button onClick={() => handlesubqty(data.id)}>-</Button>
            <p className="mx-2  my-auto">
              <b>{data.qty} </b>
            </p>
            <Button onClick={() => handleaddqty(data.id)}>+</Button>
          </div>
        </div>
        <div className="col-3">
          <Button onClick={() => handleremove(data.id)} variant="primary">
            Remove
          </Button>
        </div>
      </div>
    </div>
  );
};
