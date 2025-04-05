import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const styleA =
    "font-cairo capitalize text-gray-300 font-bold hover:text-violet transition-colors duration-300 ease-in-out";
  const [isActiveNav, setIsActiveNav] = useState(false);

  return (
    <div className="relative h-auto w-full mt-6">
      <div className="relative z-10 flex h-full flex-col justify-between">
        {/* nav bar */}
        <div className="bg-black/70 p-4 rounded-lg shadow-lg">
          <div className="mx-auto flex justify-between items-center">
            <Link
              to="/"
              className="text-2xl font-play font-bold text-violet-200 rounded-lg hover:text-violet transition-all"
            >
              Noctea
            </Link>
            <div className="flex space-x-6 items-center hover:text-violet cursor-pointer">
              {!isActiveNav && <Menu onClick={() => setIsActiveNav(true)} />}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile nav menu (always mounted for animation) */}
      <nav
        className={`fixed top-0 right-0 w-full h-full flex flex-col justify-start items-center py-12 bg-black/95 transition-transform duration-500 ease-in-out z-50 ${
          isActiveNav ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <X
          className="absolute top-8 right-8 text-white text-3xl cursor-pointer"
          onClick={() => setIsActiveNav(false)}
        />
        <menu className="flex flex-col justify-center items-center h-full space-y-6 text-4xl">
          {["mods", "worlds", "resource packs"].map((navBar, i) => (
            <Link
              key={i}
              to={navBar}
              className={styleA}
              onClick={() => setIsActiveNav(false)} // closes on nav click
            >
              {navBar}
            </Link>
          ))}
        </menu>
      </nav>
    </div>
  );
};

export default Header;
