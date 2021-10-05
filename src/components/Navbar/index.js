import React from "react";
import {
  Nav,
  NavLink,
  NavIcon,
  Bars,
  Menu,
  ShoppingCart,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  return (
    <div>
      <Nav>
        <NavLink to="/"> </NavLink>
        <NavIcon onClick={toggle}>
          <Menu> Menu </Menu>
          <Bars></Bars>
          <ShoppingCart></ShoppingCart>
        </NavIcon>
      </Nav>
    </div>
  );
};

export default Navbar;
