import React from "react";
import Loading from "../../components/Util/GlobalLoader";

interface AppLayoutProps {}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <div>
      <Loading isLoading={true} />
      {children}
    </div>
  );
};

export default AppLayout;
