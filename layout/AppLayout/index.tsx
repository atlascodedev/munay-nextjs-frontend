import React from "react";
import { MenuItem } from "../../@types";
import Footer from "../../components/App/Footer/Main";
import LayoutDrawer from "../../components/App/Navbar/Drawer";
import Navbar, { NavbarProps } from "../../components/App/Navbar/Main";
import { Anchor } from "../../components/App/Navbar/Main/styles";
import WhatsAppButton from "../../components/App/WhatsAppButton/Main";
import Loading from "../../components/Util/GlobalLoader";
import ScrollTop from "../../components/Util/ScrollTop";

type AppLayoutNavbarProps = Pick<NavbarProps, "hideOnScroll">;

interface AppLayoutProps extends AppLayoutNavbarProps {
  isGlobalLoading: boolean;
  items: MenuItem[];
  scrollTopButton?: boolean | null;
}

const AppLayout: React.FC<AppLayoutProps> = ({
  children,
  isGlobalLoading,
  items,
  hideOnScroll,
  scrollTopButton,
}) => {
  const [drawerVisibility, setDrawerVisibility] = React.useState<boolean>(
    false
  );

  const toggleDrawerVisibility = (open: boolean) => {
    setDrawerVisibility(open);
  };

  return (
    <div id="top">
      <LayoutDrawer
        backgroundColor
        logo="/logo.svg"
        open={drawerVisibility}
        toggleDrawer={toggleDrawerVisibility}
        sidebarItems={items}
      />

      <Navbar
        hideOnScroll={hideOnScroll}
        toggleDrawer={toggleDrawerVisibility}
      />
      <Anchor anchored={true} />

      <Loading isLoading={isGlobalLoading} />
      {children}

      <WhatsAppButton />
      <Footer />
      {scrollTopButton ? <ScrollTop /> : null}
    </div>
  );
};

export default AppLayout;
