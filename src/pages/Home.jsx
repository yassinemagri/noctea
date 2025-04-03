import React, { useEffect, useState } from "react";
import { getAllCategories } from "@/data/api";
import SectionCard from "@/components/SectionCard";
import { useLoaderData } from "react-router-dom";
import Discover from "@/components/discover/Discover";
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
    console.log(filteredData);
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
      <Discover />
      <div className="grid grid-cols-[4fr_1fr] gap-x-[33px] gap-y-0 max-md:grid-cols-1 max-md:grid-rows-[auto_3fr] max-md:gap-y-[33px] ">
        <div className="m-4">
          {/*  */}
          <div>{latestData}</div>
          <div>{popularData}</div>
        </div>
        {/* Ad placeholder */}
        <div className="m-4">
          <h1 className="font-bold text-lg mb-4">Sponsored</h1>
          <div className="bg-gray-200 border border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center min-h-[300px] mb-6">
            <div className="text-gray-500 text-center">
              <p className="font-medium">Advertisement</p>
              <p className="text-sm mt-2">Your ad could be here</p>
            </div>
          </div>

          {/* Second ad placeholder */}
          <div className="bg-gray-200 border border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center min-h-[250px] mt-6">
            <div className="text-gray-500 text-center">
              <p className="font-medium">Advertisement</p>
              <p className="text-sm mt-2">300x250</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
