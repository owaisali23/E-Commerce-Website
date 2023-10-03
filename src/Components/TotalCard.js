import React from "react";
import { Card, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { done } from "../Store/CartSlice";
import { historyadd } from "../Store/HistorySlice";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.min.css";

export const TotalCard = () => {
  const { cart, totalqty, totalprice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handlehistory = (cart) => {
    dispatch(historyadd(cart));
  };

  const Checkout = () => {
    if (totalqty > 0) {
      handlehistory(cart);
      dispatch(done());
      toast.success("Success, Your Order is Placed!", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
    } else {
      toast.error("Error, Add Something to cart!", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
    }
  };
  return (
    <div>
      <Card className="totalcart">
        <Card.Header style={{ color: "white", backgroundColor: "dodgerblue" }}>
          <b> Total: </b>
        </Card.Header>
        <Card.Body>
          <div className="row">
            <Card.Text className="title col-6">Total Quantity:</Card.Text>
            <Card.Text className="cardtext col-6">{totalqty}</Card.Text>
          </div>
          <hr></hr>
          <div className="trow row">
            <Card.Text className="title col-6">Total Price: </Card.Text>
            <Card.Text className="cardtext col-6">{totalprice}</Card.Text>
          </div>
          {/* <Link to='/'> */}
          <Button
            onClick={() => Checkout()}
            className="donebtn"
            variant="primary"
          >
            Buy Now!
          </Button>
          {/* </Link> */}
        </Card.Body>
      </Card>
      <ToastContainer />
    </div>
  );
};
