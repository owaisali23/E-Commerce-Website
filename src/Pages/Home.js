import { React, useState, useEffect } from "react";
import { ProductCard } from "../Components/ProductCard";
import "../index.css";
import { useDispatch, useSelector } from "react-redux";
import { showProducts } from "../Store/ProductsSlice";
import Slider from "../Components/Slider";
import { getCartTotal } from "../Store/CartSlice";
import { AddProduct } from "../Store/AddprodSlice";

export const Home = () => {
  const [filter, setFilter] = useState([]);
  const dispatch = useDispatch();
  const { product, loading } = useSelector((state) => state.product);
  const { cart } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(showProducts());
  }, []);

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);

  const filterProduct = (cat) => {
    const newlist = product.filter((x) => x.category === cat);
    setFilter(newlist);
  };

  useEffect(() => {
    dispatch(AddProduct());
  }, []);

  return (
    <>
      <Slider />
      <div className="main">
        <h2 className="heading"> Products:</h2>
        <div className="buttons btnn d-flex">
          <button
            onClick={() => setFilter(product)}
            className="btn btn-outline-dark me-2"
          >
            {" "}
            All{" "}
          </button>
          <button
            onClick={() => filterProduct("men's clothing")}
            className="btn btn-outline-dark me-2"
          >
            {" "}
            Mens{" "}
          </button>
          <button
            onClick={() => filterProduct("women's clothing")}
            className="btn btn-outline-dark me-2"
          >
            {" "}
            Womens{" "}
          </button>
          <button
            onClick={() => filterProduct("electronics")}
            className="btn btn-outline-dark me-2"
          >
            {" "}
            Electronics{" "}
          </button>
          <button
            onClick={() => filterProduct("jewelery")}
            className="btn btn-outline-dark me-2"
          >
            {" "}
            Jewelery{" "}
          </button>
        </div>
        <div className="container">
          <div className="Row1 row mx-3">
            {loading ? (
              <h5 className="justify-content-center m-5"> Loading.... </h5>
            ) : filter.length === 0 ? (
              product?.map((productt) => (
                <div className="col-3">
                  <ProductCard data={productt} />{" "}
                </div>
              ))
            ) : (
              filter?.map((productt) => (
                <div className="col-3">
                  <ProductCard data={productt} />{" "}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};
