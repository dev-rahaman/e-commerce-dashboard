import Header from "@/components/Header";
import React from "react";
import Sidebar from "../SidebarTwo/SidebarTwo";

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <Sidebar />
      <div className="pt-16">{children}</div>
      {/* <div className="lg:ms-44 mb-5 flex items-center text-center mt-20 justify-center">
        Copyright © Designed & Developed by Dev Rahaman 2023
      </div> */}
    </div>
  );
};

export default DashboardLayout;
