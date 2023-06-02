import React from "react";
import { NavLink } from "react-router-dom";

import { NavContainer, Nav, NavList, NavListItem } from "./styles.ts";

const LinkStyle = {
  textDecoration: "none",
  fontSize: "10px",
  fontFamily: "arial",
  color: "#CCCCCC",
};

//FIXME: Will need to add styling to the links differently here
export const Navbar = () => {
  //TODO: Get the activeLink color working
  const activeStyle = {
    color: "black",
  };
  return (
    <NavContainer>
      <Nav>
        <NavList>
          <NavListItem>
            <NavLink to="/home" style={LinkStyle} activeStyle={activeStyle}>
              HOME
            </NavLink>
          </NavListItem>
          <NavListItem>
            <NavLink to="/blog" style={LinkStyle} activeStyle={activeStyle}>
              BLOG
            </NavLink>
          </NavListItem>
          <NavListItem>
            <NavLink to="/about" style={LinkStyle} activeStyle={activeStyle}>
              ABOUT
            </NavLink>
          </NavListItem>
          <NavListItem>
            <NavLink to="/store" style={LinkStyle} activeStyle={activeStyle}>
              STORE
            </NavLink>
          </NavListItem>
        </NavList>
      </Nav>
    </NavContainer>
  );
};

export default Navbar;
