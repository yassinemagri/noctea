import { Menu } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const styleA =
    "font-cairo capitalize text-gray-300 font-bold hover:text-primary";

  return (
    <div className="relative h-xl w-full">
      {/* background image */}

      <div className="relative z-10 flex h-full flex-col justify-between">
        {/* navbar-brand */}
        {/* <div className="flex h-full items-center justify-center">
          <h1 className="text-7xl font-play font-bold text-violet md:text-8xl lg:text-9xl">
            Noctea
          </h1>
        </div> */}

        {/* nav bar */}
        <div className="bg-black/80 p-4 mx-[104px] rounded-xl">
          <div className="mx-auto flex max-w-6xl justify-between items-center">
            <Link
              to="/"
              className="text-primary font-play font-bold hover:text-violet rounded-lg text-xl"
            >
              Noctea
            </Link>
            <div className="flex space-x-6 items-center hover:text-violet cursor-pointer">
            <Menu />
              {/* {["mods", "worlds", "Resource Packs"].map((navBar, i) => (
                <Link key={i} to="" className={styleA}>
                  {navBar}
                </Link>
              ))} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
