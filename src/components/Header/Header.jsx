import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const styleA =
    "font-cairo capitalize text-gray-300 font-bold hover:text-violet transition-colors duration-300 ease-in-out";
  const [isActiveNav, setIsActiveNav] = useState(false);

  return (
    <div className="relative h-auto w-full bg-gradient-to-r from-violet via-violet/70 to-violet mb-4">
      <div className="relative z-10 flex h-full flex-col justify-between p-4">
        {/* navbar-brand */}
        <div className="flex h-full items-center justify-center mb-8">
          <h1 className="text-6xl md:text-7xl font-play font-bold text-white shadow-lg">
            Noctea
          </h1>
        </div>

        {/* nav bar */}
        <div className="bg-black/70 p-4 rounded-lg shadow-lg">
          <div className="mx-auto flex  justify-between items-center">
            <Link
              to="/"
              className="text-2xl font-play font-bold text-violet-200 rounded-lg hover:text-violet-400 transition-all"
            >
              Noctea
            </Link>
            <div className="flex space-x-6 items-center hover:text-violet-300 cursor-pointer">
              {!isActiveNav && <Menu onClick={() => setIsActiveNav(true)} />}
              
              {isActiveNav && (
                <nav className="fixed bg-violet-900/80 top-0 right-0 w-full h-full flex flex-col justify-start items-center py-12">
                  <X className="absolute top-8 right-8 text-white text-3xl cursor-pointer" onClick={() => setIsActiveNav(false)} />
                  <menu className="flex flex-col space-y-6 text-center text-2xl">
                    {["Mods", "Worlds", "Resource Packs"].map((navBar, i) => (
                      <Link key={i} to="" className={styleA}>
                        {navBar}
                      </Link>
                    ))}
                  </menu>
                </nav>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
