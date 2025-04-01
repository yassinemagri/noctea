import React, { useEffect, useState } from "react";
import Mods from "@/components/JavaEdition/Mods/Mods";
import { getAllCategories, getModByClassId } from "@/data/api";
export async function loader({ request }) {
  const loaderId = new URL(request.url).searchParams.get("loaderId");
  if (loaderId) {
    const data = await getAllCategories(loaderId);
    return data;
  }
  const data = await getAllCategories();
  return data;
}
const Home = () => {
  return (
    <div className="grid grid-cols-[1fr_3fr_1fr] gap-x-[33px] gap-y-0 max-md:grid-cols-1 max-md:grid-rows-[auto_3fr_auto] max-md:gap-y-[33px] ">
      <div className="m-4">
        <h1 className="">right list </h1>
        <div className="">bla mybqa ygoliya bndam rani gehma khdam</div>
      </div>
      <div className="m-4">
      <Mods />
      </div>
      <div className="m-4">
        <h1 className="my-4">left List : </h1>
        <div className="space-y-4">
          `Ila shfti gehma kayn resp 3awd kark rani khdam lkari 3lih`
        </div>
      </div>
    </div>
  );
};

export default Home;
