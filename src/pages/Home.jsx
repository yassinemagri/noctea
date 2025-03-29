import React, {useState} from 'react'
import { useLoaderData } from 'react-router-dom';
import { JavaEdition } from './JavaEdition'
import { allMods, onlyModById } from '../data/api'
import { mods } from '../data/mods';
import ModCard from '@/components/ModCard';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
export async function loader() {
  const classIds = [
      {name : "Mods", id : 6 },
      {name : "Modpacks", id : 4471 },
      {name : "Worlds", id : 17 },
      {name : "Ressource Packs", id : 12 },
  ]
  // const data = await mineCraftEndPoint();
  const data = await onlyModById(6);
  return data;
} 
const Home = () => {
  const mineCraftEndPoint = useLoaderData();
  console.log(mineCraftEndPoint)
  const [activeLoader, setActiveLoader] = useState("NEOFORGE")
  const [activeSort, setActiveSort] = useState("Popularity")
  const [searchQuery, setSearchQuery] = useState("")

  const loaders = ["FORGE", "FABRIC", "NEOFORGE", "QUILT"]
  const sortOptions = ["Relevancy", "Popularity", "Creation Date", "Total Downloads", "Latest update", "A-Z"]

  const filteredMods = mods.filter(
    (mod) =>
      mod.loader === activeLoader && (searchQuery === "" || mod.name.toLowerCase().includes(searchQuery.toLowerCase())),
  )
    return (
      <>
      
    <div className="container mx-auto mt-8 bg-zinc-900 rounded-lg p-4">

      <div className="mb-4">
        {/* <div className="bg-zinc-950 text-center text-primary py-2 px-4 mb-2">Mod Loaders</div> */}
        <Tabs defaultValue={activeLoader} onValueChange={setActiveLoader} className="w-full">
          <TabsList className="w-full grid grid-cols-4 h-auto bg-zinc-950">
            {loaders.map((loader) => (
              <TabsTrigger
                key={loader}
                value={loader}
                className={`py-2 data-[state=active]:bg-violet data-[state=active]:text-white`}
              >
                {loader}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      <div className="mb-4">
        <Tabs defaultValue={activeSort} onValueChange={setActiveSort} className="w-full">
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
    <h1>Latest Resource Packs : </h1>
    <div className="space-y-4">
      {filteredMods.map((mod) => (
        <ModCard key={mod.id} mod={mod} />
      ))}
    </div></>
  )
}

export default Home