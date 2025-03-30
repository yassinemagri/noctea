import React, { useEffect, useState } from "react";
import { useLoaderData, useSearchParams } from "react-router-dom";
import { getAllCategories, getAllCategoriesWithLoader } from "../data/api";
import ModCard from "@/components/ModCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
export async function loader({ request }) {
  const modLoader = new URL(request.url).searchParams.get("modLoader");
  const sortField = new URL(request.url).searchParams.get("sortField");
  if (modLoader) {
    console.log(modLoader)
    const modsWithLoader = await getAllCategoriesWithLoader(modLoader);
    return modsWithLoader;
  }
  if (sortField) {
    console.log(sortField)
    const modsSorted = await getAllCategories(sortField);
    return modsSorted;
  }
  const mods = await getAllCategories();
  return mods;
}
const Home = () => {
  const data = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();
  function filter(key,value) {
    const filterKeyValues = {
      [key] : value
    };
    console.log(filterKeyValues)
    setSearchParams(() =>{
      return filterKeyValues
    });
    console.log(searchParams)
  }
 
  const classIds = [
    { name: "Mods", classId: 6 },
    { name: "Modpacks", classId: 4471 },
    { name: "Worlds", classId: 17 },
    { name: "Ressource Packs", classId: 12 },
  ];
  const [activeLoader, setActiveLoader] = useState("All");
  const [activeSort, setActiveSort] = useState("Relevancy");
  const [searchQuery, setSearchQuery] = useState("");
  const modLoaders = [
    { name: "All", loaderId: 0 },
    { name: "Forge", loaderId: 1 },
    { name: "Fabric", loaderId: 4 },
    { name: "Quilt", loaderId: 5 },
    { name: "NeoForge", loaderId: 6 },
  ];
  const sortFields = [
    {name: "Relevancy", sortFieldId: 0},
    {name: "Popularity", sortFieldId: 2},
    {name: "Creation Date", sortFieldId: 11},
    {name: "Total Downloads", sortFieldId: 6},
    {name: "Latest update", sortFieldId: 3},
    {name: "A-Z", sortFieldId: 4},
  ];

  return (
    <>
      <div className="container mx-auto ">
        <div className="mb-4">
          {/* <div className="bg-zinc-950 text-center text-primary py-2 px-4 mb-2">Mod Loaders</div> */}

          {/* mod Loaders */}
          <Tabs
            defaultValue={activeLoader}
            onValueChange={setActiveLoader}
            className="w-full"
          >
            <TabsList className="w-full grid grid-cols-5 h-auto bg-zinc-950">
              {modLoaders.map((loader) => (
                <TabsTrigger
                  key={loader.loaderId}
                  onClick={() => filter("modLoader", loader.loaderId)}
                  value={loader.name}
                  className={`py-2 data-[state=active]:bg-violet data-[state=active]:text-white cursor-pointer`}
                >
                  {loader.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        <div className="mb-4">
          <Tabs
            defaultValue={activeSort}
            onValueChange={setActiveSort}
            className="w-full"
          >
            <TabsList className="w-full grid grid-cols-6 h-auto bg-zinc-950 max-sm:grid-cols-3">
              {sortFields.map((field) => (
                <TabsTrigger
                  key={field.sortFieldId}
                  onClick={() => filter("sortField" , field.sortFieldId)}
                  value={field.name}
                  className={`py-2 data-[state=active]:bg-violet data-[state=active]:text-white cursor-pointer`}
                >
                  {field.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        <div className="relative mb-6 max-sm:mx-4">
          <Search className="absolute left-3 top-2.5 text-gray-400 " size={18} />
          <Input
            type="text"
            placeholder="Search for Minecraft version..."
            className="w-full bg-zinc-950 border-none pl-10 text-white "
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-[1fr_3fr_1fr] gap-x-[33px] gap-y-0 max-md:grid-cols-1 max-md:grid-rows-[auto_3fr_auto] max-md:gap-y-[33px] ">

        <div className="m-4">
          <h1 className="">right list </h1>
          <div className="">
                bla mybqa ygoliya bndam rani gehma khdam
          </div>
        </div>
        <div className="m-4 ">
          <h1 className="my-4">Latest Mods : </h1>
          <div className="space-y-4 ">
            {data.data.map((mod) => (
              <ModCard key={mod.id} mod={mod} activeLoader={activeLoader}/>
            ))}
          </div>
        </div>
        <div className="m-4">
          <h1 className="my-4">left List : </h1>
          <div className="space-y-4">
                  `Ila shfti gehma kayn resp 3awd kark rani khdam lkari 3lih`
          </div>
        </div>
      </div>
      </div>

    </>
  );
};

export default Home;
