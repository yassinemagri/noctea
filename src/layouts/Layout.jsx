import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/footer/Footer";

const Layout = () => {
  return (
    <main className="min-h-screen min-xl:px-20">
      <Header />
      
      <Outlet />
      <Footer />
    </main>
  );
};

export default Layout;