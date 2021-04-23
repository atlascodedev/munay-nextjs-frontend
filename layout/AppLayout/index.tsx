import React from "react";
import Loading from "../../components/Util/GlobalLoader";

interface AppLayoutProps {
  isGlobalLoading: boolean;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children, isGlobalLoading }) => {
  return (
    <div>
      <Loading isLoading={isGlobalLoading} />
      {children}
    </div>
  );
};

export default AppLayout;
