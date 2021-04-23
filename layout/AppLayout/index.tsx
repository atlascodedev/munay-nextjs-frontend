import React from "react";
import LayoutDrawer from "../../components/App/Navbar/Drawer";
import Navbar from "../../components/App/Navbar/Main";
import Loading from "../../components/Util/GlobalLoader";

interface AppLayoutProps {
  isGlobalLoading: boolean;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children, isGlobalLoading }) => {
  return (
    <div>
      <LayoutDrawer
        logo="/logo.svg"
        open={true}
        toggleDrawer={() => console.log("test")}
        sidebarItems={[]}
      />
      <Navbar />
      <Loading isLoading={isGlobalLoading} />
      {children}
    </div>
  );
};

export default AppLayout;
