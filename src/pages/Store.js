import React from "react";
import { Col, Row } from "react-bootstrap";
import { productsArray } from "../productStore";
import ProductCard from "../compononts/ProductCard";

function Store(props) {
  return (
    <>
      <h1 align="center" className="p-3">
        Welcome to the store!
      </h1>
      <Row xs={1} md={3} className="g-4">
        {productsArray.map((product, indx) => (
          <Col align="center" key={indx}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Store;
