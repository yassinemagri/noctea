import React, { useEffect, useState } from "react";
import { useLoaderData, useSearchParams } from "react-router-dom";
import { getAllCategories, getModByClassId } from "@/data/api";
import ModCard from "@/components/JavaEdition/Mods/ModCard";
import Filter from "./Filter";
export async function loader({ request }) {
  const loaderId = new URL(request.url).searchParams.get("loaderId");
  console.log(loaderId);
  if (loaderId) {
    const data = await getAllCategories(loaderId);
    return data;
  }
  const data = await getAllCategories();
  return data;
}
export default function Mods() {
  const data = useLoaderData();
  const classIds = [
    { name: "Mods", classId: 6 },
    { name: "Modpacks", classId: 4471 },
    { name: "Worlds", classId: 17 },
    { name: "Ressource Packs", classId: 12 },
  ];
  // mineCraftEndPoint.data.map(data=> console.log(data))
  //  console.log(mineCraftEndPoint)
  const [activeLoader, setActiveLoader] = useState("All");
  const [activeSort, setActiveSort] = useState("Popularity");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <div className="container mx-auto">
        {/* mods Filter */}
        <Filter
          setActiveSort={setActiveSort}
          activeSort={activeSort}
          setActiveLoader={setActiveLoader}
          activeLoader={activeLoader}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        {/* mods card */}
        <h1 className="my-4">Latest Mods : </h1>
        <div>
          {data.data.map((mod) => (
            <ModCard key={mod.id} mod={mod} activeLoader={activeLoader} />
          ))}
        </div>
      </div>
    </>
  );
}
