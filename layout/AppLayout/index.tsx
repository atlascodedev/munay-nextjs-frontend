import React from "react";
import { MenuItem } from "../../@types";
import Footer from "../../components/App/Footer/Main";
import LayoutDrawer from "../../components/App/Navbar/Drawer";
import Navbar from "../../components/App/Navbar/Main";
import { Anchor } from "../../components/App/Navbar/Main/styles";
import WhatsAppButton from "../../components/App/WhatsAppButton/Main";
import Loading from "../../components/Util/GlobalLoader";

interface AppLayoutProps {
  isGlobalLoading: boolean;
  items: MenuItem[];
}

const AppLayout: React.FC<AppLayoutProps> = ({
  children,
  isGlobalLoading,
  items,
}) => {
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
        sidebarItems={items}
      />

      <Navbar toggleDrawer={toggleDrawerVisibility} />
      <Anchor anchored={true} />

      <Loading isLoading={isGlobalLoading} />
      {children}

      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default AppLayout;
