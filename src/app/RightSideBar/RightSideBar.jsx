"use client";
import { AuthContext } from "@/AuthProvider/AuthProvider";
import React, { useContext } from "react";

const RightSideBar = () => {
  const { showSettingsBar } = useContext(AuthContext);

  return (
    <div
      className={`${showSettingsBar}  w-[350px] rounded-3xl z-50 right-0 lg:mt-2 mt-12 h-[500px] pb-[50px] overflow-auto custom-scrollbar bg-[#3a43a0] fixed top-14  transition-transform  sm:translate-x-0`}
    ></div>
  );
};

export default RightSideBar;
