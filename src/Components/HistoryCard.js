import React from "react";

export const HistoryCard = ({ data }) => {
  return (
    <div className="container">
      <div className="history row custom-row2 mb-3">
        <div className="col-4">
          <img className="img" variant="top" src={data.image}></img>
        </div>
        <div className="desc col-3">
          <h5>{data.title}</h5>
          <p>${data.price}</p>
        </div>
        <div className="desc col-2 ">
          <p>
            Quantity:<b> {data.qty}</b>
          </p>
        </div>
      </div>
    </div>
  );
};
