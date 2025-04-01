import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLoaderData, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
const Filter = ({
  setActiveLoader,
  activeLoader,
  activeSort,
  setActiveSort,
  setSearchQuery,
  searchQuery,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();

  function searchLoader(loader) {
    const filterKeyValues = Object.entries(loader);
    setSearchParams(() => {
      return filterKeyValues;
    });
  }
  const handleLoaderChange = (value) => {
    setActiveLoader(value);
    const modLoaderFind = sorts.flatMap((loader) => loader.modLoaderIds);
    const loader = modLoaderFind.find((l) => l.name === value);
    if (loader) {
      searchLoader(loader);
    }
  };

  const sorts = [
    {
      modLoaderIds: [
        { name: "All", loaderId: 0 },
        { name: "Forge", loaderId: 1 },
        { name: "Fabric", loaderId: 4 },
        { name: "Quilt", loaderId: 5 },
        { name: "NeoForge", loaderId: 6 },
      ],
      sortOptions: [
        "Relevancy",
        "Popularity",
        "Creation Date",
        "Total Downloads",
        "Latest update",
        "A-Z",
      ],
    },
  ];
  const [formFilter, setFormFilter] = useState([]);
  const [formSelect, setFormSelect] = useState('');

function handleFilterChange(value) {
    // const { value } = e.target;
    setActiveLoader(value);
    setFormSelect((prevfilter) => {
      return { ...prevfilter, key: value };
    });
  }

function handleFilter(e){
    e.preventDefault();
    setFormFilter(prevselect=> {
      return [...prevselect, formSelect];
    })
  }
console.log(formFilter)
  return (
    <form className="mb-4 flex" onSubmit={handleFilter}>
      <Select
        onChange={handleFilterChange}
        value={activeLoader}
        onValueChange={handleFilterChange}
        data-slot="select"
        name="us"
      >
        <SelectTrigger className="w-full bg-zinc-950 border-none text-white cursor-pointer">
          <SelectValue placeholder="Select Mod Loader" />
        </SelectTrigger>
        <SelectContent className="bg-zinc-900 border-zinc-800">
          {sorts.flatMap((loader) =>
            loader.modLoaderIds.map((loaderMod) => (
              <SelectItem
                key={loaderMod.loaderId}
                value={loaderMod.name}
                className={`text-white hover:bg-zinc-800 focus:bg-violet data-[selected]:bg-violet data-[selected]:text-white cursor-pointer`}
              >
                {loaderMod.name}
              </SelectItem>
            ))
          )}
        </SelectContent>
      </Select>
      <Select
        onChange={handleFilterChange}
        value={activeSort}
        onValueChange={setActiveSort}
        data-slot="select"
      >
        <SelectTrigger className="w-full bg-zinc-950 border-none text-white cursor-pointer">
          <SelectValue placeholder="Select Mod Loader" />
        </SelectTrigger>
        <SelectContent className="bg-zinc-900 border-zinc-800">
          {sorts.flatMap((loader) =>
            loader.sortOptions.map((option) => (
              <SelectItem
                key={option}
                value={option}
                className="text-white hover:bg-zinc-800 focus:bg-violet data-[selected]:bg-violet data-[selected]:text-white cursor-pointer"
              >
                {option}
              </SelectItem>
            ))
          )}
        </SelectContent>
      </Select>

      <Select
      onChange={handleFilterChange}
        value={searchQuery}
        onValueChange={setSearchQuery}
        data-slot="select"
      >
        <SelectTrigger className="w-full bg-zinc-950 border-none text-white cursor-pointer">
          <SelectValue placeholder="Select Version" />
        </SelectTrigger>
        <SelectContent className="bg-zinc-900 border-zinc-800">
          {sorts.flatMap((loader) =>
            loader.sortOptions.map((option) => (
              <SelectItem
                key={option}
                value={option}
                className="text-white hover:bg-zinc-800 focus:bg-violet data-[selected]:bg-violet data-[selected]:text-white cursor-pointer"
              >
                {option}
              </SelectItem>
            ))
          )}
        </SelectContent>
      </Select>
      <Button type="submit" className="bg-violet text-[#eeedff] hover:bg-violet h-8 px-3 py-1 cursor-pointer">
        Fitler
      </Button>
      
    </form>
  );
};

export default Filter;
