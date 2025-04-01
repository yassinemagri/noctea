import React, { useEffect, useState } from "react";
import { getAllCategories } from "@/data/api";
import SectionCard from "@/components/SectionCard";
import { useLoaderData } from "react-router-dom";
export async function loader() {
  try {
    const modsSortedByLatest = await getAllCategories(3);
    const modsSortedByPopularity = await getAllCategories(2);
    const data = [modsSortedByLatest.data, modsSortedByPopularity.data];
    if (data.length === 0) return "No Data Found";
    return data;
  } catch (e) {
    throw new Error(e);
  }
}
const Home = () => {
  const data = useLoaderData();
  const classIds = [
    { name: "Mods", classId: 6 },
    { name: "Modpacks", classId: 4471 },
    { name: "Worlds", classId: 17 },
    { name: "Ressource Packs", classId: 12 },
  ];
  // 3 Latest or 2 Popularity
  const latestData = classIds.map((ids) => {
    const filteredData = data[0]
      .filter((value) => value.classId === ids.classId).slice(0,6)
    return <SectionCard key={ids.classId} type="Latest" modCategory={ids.name} filteredData={filteredData} />
  });
  const popularData = classIds.map((ids) => {
    const filteredData = data[1]
      .filter((value) => value.classId === ids.classId).slice(0,6)
    console.log(filteredData)
    return <SectionCard key={ids.classId} type="Popular" modCategory={ids.name} filteredData={filteredData} />
  });
  return (
    <div className="grid grid-cols-[1fr_3fr_1fr] gap-x-[33px] gap-y-0 max-md:grid-cols-1 max-md:grid-rows-[auto_3fr_auto] max-md:gap-y-[33px] ">
      <div className="m-4">
        <h1 className="">right list </h1>
        <div className="">bla mybqa ygoliya bndam rani gehma khdam</div>
      </div>
      <div className="m-4">
        {/*  */}
        <div>{latestData}</div>
        <div>{popularData}</div>
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
