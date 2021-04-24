import React from "react";
import NavbarLayout from "../styles";

export interface NavbarProps {
  toggleDrawer?: (open: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ children, toggleDrawer }) => {
  return <NavbarLayout toggleDrawer={toggleDrawer} />;
};

export default Navbar;
