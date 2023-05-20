import React, { useState, useContext } from "react";
import { Button, Container, Navbar, Modal, NavbarBrand } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import { CartContext } from "../CartContext";
import CartProduct from "./CartProduct";

function NavbarComponents(props) {
  const cart = useContext(CartContext);

  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  const productCount = cart.item.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  return (
    <>
      <Navbar expand="sm">
        <NavbarBrand href="/">Ecommerce Store</NavbarBrand>
        <NavbarToggle />
        <NavbarCollapse className="justify-content-end">
          <Button onClick={handleShow}>Cart {productCount} Items</Button>
        </NavbarCollapse>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Shopping cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {productCount > 0 ? (
            <>
              <p>Items in your carts:</p>
              {cart.item.map((curentProduct, index) => (
                <CartProduct
                  key={index}
                  id={curentProduct.id}
                  quantity={curentProduct.quantity}
                />
              ))}
              <h1>Total: {cart.getTotalCost().toFixed(2)} </h1>
              <Button variant="success">Purchase items</Button>
            </>
          ) : (
            <>
              <h1>No any item selected</h1>
            </>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default NavbarComponents;
