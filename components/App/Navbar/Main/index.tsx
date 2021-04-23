import React from "react";
import NavbarLayout from "../styles";

export interface NavbarProps {
  anchored?: boolean;
  toggleDrawer?: (open: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({
  children,
  anchored,
  toggleDrawer,
}) => {
  return <NavbarLayout toggleDrawer={toggleDrawer} />;
};

export default Navbar;
