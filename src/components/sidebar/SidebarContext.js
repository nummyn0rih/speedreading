import React, { useContext, useState } from 'react';

const SidebarContext = React.createContext();

export const useSidebarContext = () => {
  return useContext(SidebarContext);
};

export const SidebarProvider = ({ children }) => {
  const [sidebar, setSidebarVisible] = useState(false);

  const toggle = () => setSidebarVisible((prev) => !prev);

  return (
    <SidebarContext.Provider
      value={{
        visible: sidebar,
        toggle,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};
