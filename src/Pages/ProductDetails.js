import { useParams } from "react-router-dom";
import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../App.css";
import { add, getCartTotal } from "../Store/CartSlice";
import { BrowserRouter as Router, Link } from "react-router-dom";

export const ProductDetails = () => {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);

  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setloading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    setloading(true);
    const fetchProduct = async () => {
      const resp = await fetch(`https://fakestoreapi.com/products/${id}`);
      if (componentMounted) {
        setloading(false);
        const data = await resp.json();
        const newArray = { ...data, qty: 1 };
        setProduct(newArray);
      }
      return () => {
        componentMounted = false;
      };
    };
    fetchProduct();
  }, []);

  const handleadd = (data) => {
    dispatch(add(data));
    console.log(data);
  };

  return (
    <div>
      {loading ? (
        <h5 className="loading"> Loading.... </h5>
      ) : (
        <div className="app">
          <div className="details" key={product.id}>
            <div className="big-img">
              <img src={product.image} alt="" />
            </div>

            <div className="box">
              <div className="row roww">
                <h2>{product.title}</h2>
                <span>${product.price}</span>
              </div>
              {/* <Colors colors='black' /> */}

              <p>{product.description}</p>
              {/* <p>{item.content}</p> */}

              {/* <DetailsThumb images={item.src} tab={this.handleTab} myRef={this.myRef} /> */}
              <Link to="/cart">
                {" "}
                <button className="cart" onClick={() => handleadd(product)}>
                  Add to cart
                </button>{" "}
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
