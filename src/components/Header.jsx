import React from "react";
import backGroundImage from "../assets/bg.jpg";
import { Link } from "react-router-dom";
const Header = () => {
  const styleA = "font-cairo text-gray-300 font-bold hover:text-primary";
  return (
    <div className="relative h-screen w-full">
      {/* background image */}
      <div className="absolute inset-0 z-0 opacity-25">
        <img
          src={backGroundImage}
          alt=""
          className="object-cover w-full h-full"
        />
      </div>
      <div className="relative z-10 flex h-full flex-col justify-between">
        {/* logo brand */}
        <div className="flex h-full items-center justify-center">
          <h1 className="text-7xl font-play font-bold text-primary md:text-8xl lg:text-9xl">
            Noctea
          </h1>
        </div>

        {/* nav bar */}
        <div className="bg-black/80 p-4 mx-[104px] rounded-xl">
            <div className="mx-auto flex max-w-6xl justify-between items-center">
                <Link
                    to="/"
                    className="bg-black text-primary font-play font-bold px-6 py-3 rounded-lg text-xl"
                >
                    Noctea
                </Link>
            <div className="flex space-x-6 items-center">
                <Link to="" className={styleA}>
                Mods
                </Link>
                <Link to="" className={styleA}>
                Worlds
                </Link>
                <Link to="" className={styleA}>
                Resource Packs
                </Link>
            </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Header;