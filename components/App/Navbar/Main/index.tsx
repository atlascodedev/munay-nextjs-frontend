import React from "react";
import NavbarLayout from "../styles";

export interface NavbarProps {
  anchored?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ children, anchored }) => {
  return <NavbarLayout />;
};

export default Navbar;
