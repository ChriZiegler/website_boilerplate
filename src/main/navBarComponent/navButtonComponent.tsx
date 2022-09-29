import React from "react";
import { NavLink } from "react-router-dom";

import { navLinkStyleActive, navLinkStyle } from "./navLinkStyle";

export function NavButton(props: { linkTo: string; label: string }) {
  return (
    <>
      <NavLink
        style={({ isActive }) => (isActive ? navLinkStyleActive : navLinkStyle)}
        to={props.linkTo}
      >
        {props.label}
      </NavLink>{" "}
    </>
  );
}
