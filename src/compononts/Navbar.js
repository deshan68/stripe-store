import React, { useState } from "react";
import { Button, Container, Navbar, Modal, NavbarBrand } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";

function NavbarComponents(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };
  return (
    <>
      <Navbar expand="sm">
        <NavbarBrand href="/">Ecommerce Store</NavbarBrand>
        <NavbarToggle />
        <NavbarCollapse className="justify-content-end">
          <Button onClick={handleShow}>Cart 0 Items</Button>
        </NavbarCollapse>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Shopping cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h1>Body</h1>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default NavbarComponents;
