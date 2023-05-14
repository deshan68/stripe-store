import React from "react";
import { Button, Card, ToggleButton } from "react-bootstrap";

function ProductCard(props) {
  const product = props.product;
  return (
    <Card>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>${product.price}</Card.Text>
        <ToggleButton className="">Add to cart</ToggleButton>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
