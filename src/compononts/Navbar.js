import React from "react";
import { Button, Container, Navbar, Modal, NavbarBrand } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";

function NavbarComponents(props) {
  return (
    <Navbar expand="sm">
      <NavbarBrand href="/">Ecommerce Store</NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse className="justify-content-end">
        <Button>Cart 0 Items</Button>
      </NavbarCollapse>
    </Navbar>
  );
}

export default NavbarComponents;
