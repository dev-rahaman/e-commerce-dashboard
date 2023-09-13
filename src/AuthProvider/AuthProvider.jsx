"use client";
import { createContext, useState } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState("-translate-x-full");
  const [showSettingsBar, setShowSettingsBar] = useState("hidden");

  const handleShowSidebar = () => {
    if (showSidebar) {
      setShowSidebar("");
    } else {
      setShowSidebar("-translate-x-full");
    }
  };

  const handleSettingsBar = () => {
    if (showSettingsBar) {
      setShowSettingsBar("");
    } else {
      setShowSettingsBar("hidden");
    }
  };

  const authInfo = {
    showSidebar,
    handleShowSidebar,
    showSettingsBar,
    handleSettingsBar,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
