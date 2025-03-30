import React, {useEffect, useState} from 'react'
import { useLoaderData, useSearchParams } from 'react-router-dom';
import { getAllCategories, getModByClassId } from '../data/api'
import ModCard from '@/components/ModCard';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
export async function loader({request}) {
  const loaderId = new URL(request.url).searchParams.get("loaderId")
  console.log(loaderId)
  if(loaderId) {
    const data = await getAllCategories(loaderId)
    return data
  }
  const data = await getAllCategories();
  return data;
}
const Home = () => {
  const data = useLoaderData();
  console.log(data)
  const [searchParams, setSearchParams] = useSearchParams();

  function searchLoader(loader){
    const filterKeyValues = Object.entries(loader)
    setSearchParams(() => {
      return filterKeyValues
    })
  }

  const classIds = [
    {name : "Mods", classId : 6},
    {name : "Modpacks", classId : 4471 },
    {name : "Worlds", classId : 17 },
    {name : "Ressource Packs", classId : 12 },
  ]
  // mineCraftEndPoint.data.map(data=> console.log(data))
//  console.log(mineCraftEndPoint)
  const [activeLoader, setActiveLoader] = useState("NEOFORGE");
  const [activeSort, setActiveSort] = useState("Popularity");
  const [searchQuery, setSearchQuery] = useState("");
  const modLoaderIds = [
    {name : "Forge", loaderId : 1},
    {name : "Fabric", loaderId : 4 },
    {name : "Quilt", loaderId : 5 },
    {name : "NeoForge", loaderId : 6 },
  ]
  const sortOptions = [
    "Relevancy",
    "Popularity",
    "Creation Date",
    "Total Downloads",
    "Latest update",
    "A-Z",
  ];

  return (
    <>
      <div className="container mx-auto mt-8 bg-zinc-900 rounded-lg p-4">
        <div className="mb-4">
          {/* <div className="bg-zinc-950 text-center text-primary py-2 px-4 mb-2">Mod Loaders</div> */}
          <Tabs
            defaultValue={activeLoader}
            onValueChange={setActiveLoader}
            className="w-full"
          >
            <TabsList className="w-full grid grid-cols-4 h-auto bg-zinc-950">
              {modLoaderIds.map((loader) => (
                <TabsTrigger
                  key={loader.id}
                  onClick={()=> searchLoader(loader)}
                  value={loader.name}
                  className={`py-2 data-[state=active]:bg-violet data-[state=active]:text-white`}
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
            <TabsList className="w-full grid grid-cols-6 h-auto bg-zinc-950">
              {sortOptions.map((option) => (
                <TabsTrigger
                  key={option}
                  value={option}
                  className={`py-2 data-[state=active]:bg-violet data-[state=active]:text-white`}
                >
                  {option}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        <div className="relative mb-6">
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          <Input
            type="text"
            placeholder="Search for Minecraft version..."
            className="w-full bg-zinc-950 border-none pl-10 text-white"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      <div className="gap">
       <div className="m-4">
        <h1 className="my-4">Latest Mods : </h1>
        <div className="space-y-4">
          {data.data.map((mod) => (
            <ModCard key={mod.id} mod={mod} />
          ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
