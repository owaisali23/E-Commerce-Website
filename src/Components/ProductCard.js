import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Button } from "react-bootstrap";
import "../index.css";
import { add } from "../Store/CartSlice";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.min.css";

export const ProductCard = ({ data }) => {
  const dispatch = useDispatch();

  const handleadd = (data) => {
    toast.success(" Product Added to Cart!", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2000,
    });
    dispatch(add(data));
  };

  return (
    <div className="container">
      <ToastContainer />
      <Card className="cards">
        <Card.Img
          className="image m-auto mt-4 mb-5"
          variant="top"
          src={data.image}
        />
        <Card.Body className="d-flex flex-column ">
          <Link to={`/products/${data.id}`} style={{ textDecoration: "none" }}>
            <div className="box">
              <Card.Text className="title m-auto">
                {data.title.substring(0, 12)}...
              </Card.Text>
              <Card.Text>{data.category}</Card.Text>
              <Card.Text className="mb-3">
                <b>${data.price}</b>
              </Card.Text>
            </div>{" "}
          </Link>
          <Button variant="primary" onClick={() => handleadd(data)}>
            {" "}
            Add to Cart
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};
