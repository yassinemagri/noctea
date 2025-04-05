import React, { useEffect, useState } from "react";
import { useLoaderData, useSearchParams } from "react-router-dom";
import { getAllCategories, getModByClassId } from "@/data/api";
import ModCard from "@/components/JavaEdition/Mods/ModCard";
import Filter from "@/components/JavaEdition/Mods/Filter";
import { ListFilter } from "lucide-react";
export async function loader(){
  const getMods = await getModByClassId(6)
  return getMods
}
export default function Mods() {
  const data = useLoaderData();
  const [activeLoader, setActiveLoader] = useState("All");
  const [activeSort, setActiveSort] = useState("Popularity");
  const [searchQuery, setSearchQuery] = useState("");

  return (
      <div className="container mx-auto">
        {/* mods Filter */}
        <div className="flex">
          <ListFilter size={20}/> <h1>Filter Mods:</h1> </div>
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
            <ModCard key={mod.id} mod={mod} activeLoader={activeLoader}/>
          ))}
        </div>
      </div>

  );
}
