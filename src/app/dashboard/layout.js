import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <SideBar />
      <div className="me-20 pt-20">{children}</div>
      <div className="ms-44 mb-5 flex items-center text-center mt-20 justify-center">
        Copyright © Designed & Developed by Dev Rahaman 2023
      </div>
    </div>
  );
};

export default DashboardLayout;
