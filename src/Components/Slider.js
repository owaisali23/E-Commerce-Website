import React from "react";
import { Carousel } from "react-bootstrap";

export default function Slider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="w-100"
          style={{ height: "670px" }}
          src="https://www.freightwaves.com/wp-content/uploads/2022/09/shutterstock_ecommerce-shopping.jpg"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="w-100"
          style={{ height: "670px" }}
          src="https://img.freepik.com/free-photo/high-angle-clothes-bed-fast-fashion-concept_23-2149726122.jpg?w=2000"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="w-100"
          style={{ height: "650px" }}
          src="https://www.martechcube.com/wp-content/uploads/2023/08/E-Commerce.jpg"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
