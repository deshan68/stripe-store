import React, { useContext } from "react";
import { Button, Card, Col, Form, ToggleButton } from "react-bootstrap";
import { CartContext } from "../CartContext";

function ProductCard(props) {
  const product = props.product;
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(product.id);

  return (
    <Card>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>${product.price}</Card.Text>
        {productQuantity > 0 ? (
          <>
            <Form as={"Row"}>
              <Form.Label column="true" sm="6">
                In cart: {productQuantity}
                <Col sm="6">
                  <Button
                    sm="6"
                    onClick={() => cart.addOneToCart(product.id)}
                    className="mx-2"
                  >
                    +
                  </Button>
                  <Button
                    sm="6"
                    onClick={() => cart.removeOneFromCart(product.id)}
                    className="mx-2"
                  >
                    -
                  </Button>
                </Col>
                <Button
                  variant="danger"
                  onClick={() => cart.deleteFromCart(product.id)}
                  className="my-2"
                >
                  Remove from cart
                </Button>
              </Form.Label>
            </Form>
          </>
        ) : (
          <ToggleButton
            className=""
            onClick={() => cart.addOneToCart(product.id)}
          >
            Add to cart
          </ToggleButton>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
