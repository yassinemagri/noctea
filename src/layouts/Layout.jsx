import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/footer/Footer";
import Discover from "@/components/discover/Discover";
import AdPlaceholder from "@/components/AdPlaceholder";

const Layout = () => {
  return (
    <main className="min-h-screen min-xl:px-20">
      <Header />

      <Discover />
      <div
           className="grid grid-cols-[2fr_1fr] max-xl:w-full max-md:grid-cols-1 gap-x-[33px] gap-y-0 md:grid-rows-none md:gap-y-0 max-md:grid-rows-[auto_3fr] max-lg:gap-x-4">
        <div>
          <Outlet />
        </div>
        <div>
          <AdPlaceholder />
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Layout;
