import React from "react";
import { Link } from "react-router-dom";

import { NavContainer, Nav, NavList, NavListItem } from "./styles.ts";

export const Navbar = () => {
  return (
    <NavContainer>
      <Nav>
        <NavList>
          <NavListItem>
            <Link to="/home" style={{ textDecoration: "none" }}>
              Home
            </Link>
          </NavListItem>
          <NavListItem>
            <Link to="/blog" style={{ textDecoration: "none" }}>
              Blog
            </Link>
          </NavListItem>
          <NavListItem>
            <Link to="/about" style={{ textDecoration: "none" }}>
              About Me
            </Link>
          </NavListItem>
        </NavList>
      </Nav>
    </NavContainer>
  );
};

export default Navbar;
