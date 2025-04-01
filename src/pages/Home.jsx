import React, { useEffect, useState } from "react";
import { getAllCategories, getModByClassId } from "@/data/api";
import { Button } from "@/components/ui/button";
import SectionCard from "@/components/SectionCard";
import { Card, CardContent } from "@/components/ui/card";
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
  const classIds = [
    { name: "Mods", classId: 6 },
    { name: "Modpacks", classId: 4471 },
    { name: "Worlds", classId: 17 },
    { name: "Ressource Packs", classId: 12 },
  ];
  const data = useLoaderData();
  // 3 Latest or 2 Popularity
  function filterByClassId(classId, sortId) {
    if (sortId === 3)
      return data[0].filter((value) => value.classId === classId).slice(0, 5);
    if (sortId === 2)
      return data[1].filter((value) => value.classId === classId).slice(0, 5);
    else return null;
  }
  const latestModsData = filterByClassId(6, 3);
  const latestModsPacksData = filterByClassId(4471, 3);
  const latestWorldsData = filterByClassId(17, 3);
  const latestRessourcePacksData = filterByClassId(12, 3);
  const latestData = classIds.map((ids) =>
    data[0]
      .filter((value) => value.classId === ids.classId)
      .map((value) => <SectionCard key={value.id} data={value} />)
  );
console.log(latestData)
  return (
    <div className="grid grid-cols-[1fr_3fr_1fr] gap-x-[33px] gap-y-0 max-md:grid-cols-1 max-md:grid-rows-[auto_3fr_auto] max-md:gap-y-[33px] ">
      <div className="m-4">
        <h1 className="">right list </h1>
        <div className="">bla mybqa ygoliya bndam rani gehma khdam</div>
      </div>
      <div className="m-4">
        {/*  */}
        <div>{latestData}</div>
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
