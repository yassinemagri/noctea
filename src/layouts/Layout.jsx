import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

const Layout = () => {
  return (
    <main className="min-h-screen bg-black px-8">
      <Header />
      <Outlet />
    </main>
  );
};

export default Layout;