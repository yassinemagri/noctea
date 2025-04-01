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
  const [formFilter, setFormFilter] = useState([]);
  const [formSelect, setFormSelect] = useState("");
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

  function searchLoader(loader) {
    const filterKeyValues = Object.entries(loader);
    setSearchParams(() => {
      return filterKeyValues;
    });
  }
  const handleLoaderChange = (value) => {
    setActiveLoader(value);
    setActiveSort(value);
    const modLoaderFind = sorts.flatMap((loader) => loader.modLoaderIds);
    const loader = modLoaderFind.find((l) => l.name === value);

    if (loader) {
      searchLoader(loader);
    }
  };

  const handleFilterChange = (name) => (value) => {
    setActiveLoader(value);
    handleLoaderChange(value);
    setFormSelect((prevselect) => {
      return { ...prevselect, [name]: value };
    });
  };

  function handleFilter(e) {
    e.preventDefault();
    setFormFilter((prevfilter) => {
      return [...prevfilter, formSelect];
    });
  }
  return (
    <form className="mb-4 flex" onSubmit={handleFilter}>
      <Select
        value={activeLoader}
        onValueChange={handleFilterChange("modLoader")}
        data-slot="select"
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
        value={activeSort}
        onValueChange={handleFilterChange("sortOptions")}
        data-slot="select"
      >
        <SelectTrigger className="w-full bg-zinc-950 border-none text-white cursor-pointer">
          <SelectValue placeholder="Select Sort" />
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
        value={searchQuery}
        onValueChange={handleFilterChange("gameVersion")}
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
      <Button
        type="submit"
        className="bg-violet text-[#eeedff] hover:bg-violet h-8 px-3 py-1 cursor-pointer"
      >
        Fitlers
      </Button>
    </form>
  );
};

export default Filter;
