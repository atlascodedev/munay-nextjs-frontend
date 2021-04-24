import React from "react";
import LayoutDrawer from "../../components/App/Navbar/Drawer";
import Navbar from "../../components/App/Navbar/Main";
import { Anchor } from "../../components/App/Navbar/Main/styles";
import Loading from "../../components/Util/GlobalLoader";

interface AppLayoutProps {
  isGlobalLoading: boolean;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children, isGlobalLoading }) => {
  const [drawerVisibility, setDrawerVisibility] = React.useState<boolean>(
    false
  );

  const toggleDrawerVisibility = (open: boolean) => {
    setDrawerVisibility(open);
  };

  return (
    <div>
      <LayoutDrawer
        backgroundColor
        logo="/logo.svg"
        open={drawerVisibility}
        toggleDrawer={toggleDrawerVisibility}
        sidebarItems={[]}
      />
      <Navbar toggleDrawer={toggleDrawerVisibility} />
      <Anchor anchored={true} />

      <Loading isLoading={isGlobalLoading} />
      {children}
    </div>
  );
};

export default AppLayout;
