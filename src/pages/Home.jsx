import React, { useEffect, useState } from "react";
import { getAllCategories } from "@/data/api";
import SectionCard from "@/components/SectionCard";
import { useLoaderData } from "react-router-dom";
import Discover from "@/components/discover/Discover";
import PlayerModList from "@/components/PlayerModList";
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
      .filter((value) => value.classId === ids.classId)
      .slice(0, 6);
    return filteredData.length >= 6 ? (
      <SectionCard
        key={ids.classId}
        type="Latest"
        modCategory={ids.name}
        filteredData={filteredData}
      />
    ) : (
      ""
    );
  });
  const popularData = classIds.map((ids) => {
    const filteredData = data[1]
      .filter((value) => value.classId === ids.classId)
      .slice(0, 6);
    return filteredData.length >= 6 ? (
      <SectionCard
        key={ids.classId}
        type="Popular"
        modCategory={ids.name}
        filteredData={filteredData}
      />
    ) : (
      ""
    );
  });
  return (
    <div>
      <div>
        <PlayerModList />
        {/*  */}
        {latestData}
        {popularData}
      </div>
    </div>
  );
};

export default Home;
