import React from "react";
import SideBar from "../components/home/sidebar";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex h-screen gap-4 p-5">
      <div className="flex flex-col justify-between p-2 shrink-0 bg-gray-200 w-2/6 border border-gray-500 rounded-xl">
        <SideBar />
      </div>
      <div className="bg-red-200 w-5/6 border border-gray-500 rounded-xl">
        <Outlet/>
      </div>
    </div>
  );
};
export default Home;
