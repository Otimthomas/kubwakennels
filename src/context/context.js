import React from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  const toggleSidebar = () => {
    return setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    return setSidebarOpen(false);
  };

  return (
    <AppContext.Provider value={{ toggleSidebar, sidebarOpen, closeSidebar }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return React.useContext(AppContext);
};

export { useAppContext, AppProvider };
