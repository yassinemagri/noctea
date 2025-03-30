import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const styleA =
    "font-cairo capitalize text-gray-300 font-bold hover:text-violet transition-colors duration-300 ease-in-out";
  const [isActiveNav, setIsActiveNav] = useState(false);

  return (
    <div className={`relative h-auto w-full mb-4`}>
      <div className={`absolute h-full w-full bg-[url(https://i.ibb.co/r2RRk6TY/bg-tes.png)] bg-center bg-no-repeat bg-cover opacity-60`}></div>
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
              className="text-2xl font-play font-bold text-violet-200 rounded-lg hover:text-violet transition-all"
            >
              Noctea
            </Link>
            <div className="flex space-x-6 items-center hover:text-violet cursor-pointer">
              {!isActiveNav && <Menu onClick={() => setIsActiveNav(true)} />}
              
              {isActiveNav && (
                <nav className="fixed bg-black/95 top-0 right-0 w-full h-full flex flex-col justify-start items-center py-12" onClick={() => setIsActiveNav(false)} >
                  <X className="absolute top-8 right-8 text-white text-3xl cursor-pointer" onClick={() => setIsActiveNav(false)} />
                  <menu className="flex flex-col justify-center items-center h-full  space-y-6 text-4xl" >
                    {["mods", "worlds", "resource packs"].map((navBar, i) => (
                      <Link key={i} to={navBar} className={styleA}>
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
