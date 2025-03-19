import React from "react";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <main>
      <h1>Hello world!</h1>
      <Outlet />
    </main>
  );
};
