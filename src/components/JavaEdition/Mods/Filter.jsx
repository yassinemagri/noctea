"use client"

import { useState, useEffect } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useSearchParams } from "react-router-dom"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { FilterIcon, X, Check, RefreshCw } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Filter ({ setActiveLoader, activeLoader, activeSort, setActiveSort, setSearchQuery, searchQuery }) {
  const [searchParams, setSearchParams] = useSearchParams()
  const [formFilter, setFormFilter] = useState([])
  const [formSelect, setFormSelect] = useState({})
  const [isOpen, setIsOpen] = useState(false)
  const [activeFilters, setActiveFilters] = useState(0)
  const [isFilterButtonVisible, setIsFilterButtonVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  const sorts = [
    {
      modLoaderIds: [
        { name: "All", loaderId: 0 },
        { name: "Forge", loaderId: 1 },
        { name: "Fabric", loaderId: 4 },
        { name: "Quilt", loaderId: 5 },
        { name: "NeoForge", loaderId: 6 },
      ],
      sortOptions: ["Relevancy", "Popularity", "Creation Date", "Total Downloads", "Latest update", "A-Z"],
      gameVersions: ["1.21.5", "1.21.4", "1.20.6", "1.20.1", "1.19.4", "1.18.2", "1.16.5"],
    },
  ]

  // Handle scroll to hide/show filter button
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsFilterButtonVisible(false)
      } else {
        setIsFilterButtonVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  // Count active filters
  useEffect(() => {
    let count = 0
    if (activeLoader && activeLoader !== "All") count++
    if (activeSort && activeSort !== "Relevancy") count++
    if (searchQuery) count++
    setActiveFilters(count)
  }, [activeLoader, activeSort, searchQuery])

  function searchLoader(loader) {
    const filterKeyValues = Object.entries(loader)
    setSearchParams(() => {
      return filterKeyValues
    })
  }

  const handleLoaderChange = (value) => {
    setActiveLoader(value)
    const modLoaderFind = sorts.flatMap((loader) => loader.modLoaderIds)
    const loader = modLoaderFind.find((l) => l.name === value)

    if (loader) {
      searchLoader(loader)
    }
  }

  const handleSortChange = (value) => {
    setActiveSort(value)
  }

  const handleVersionChange = (value) => {
    setSearchQuery(value)
  }

  const handleFilterChange = (name) => (value) => {
    if (name === "modLoader") {
      handleLoaderChange(value)
    } else if (name === "sortOptions") {
      handleSortChange(value)
    } else if (name === "gameVersion") {
      handleVersionChange(value)
    }

    setFormSelect((prevselect) => {
      return { ...prevselect, [name]: value }
    })
  }

  function handleFilter(e) {
    e.preventDefault()
    setFormFilter((prevfilter) => {
      return [...prevfilter, formSelect]
    })
    setIsOpen(false)
  }

  function resetFilters() {
    setActiveLoader("All")
    setActiveSort("Relevancy")
    setSearchQuery("")
    setFormSelect({})
    // Reset URL params
    const modLoaderFind = sorts.flatMap((loader) => loader.modLoaderIds)
    const loader = modLoaderFind.find((l) => l.name === "All")
    if (loader) {
      searchLoader(loader)
    }
  }
  return (
    <>
      {/* Floating filter button */}
      <AnimatePresence>
        {isFilterButtonVisible && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  size="lg"
                  className="rounded-full bg-violet hover:bg-violet-700 text-white shadow-lg flex items-center gap-2 h-14 w-14 p-0"
                >
                  <FilterIcon size={20} />
                  {activeFilters > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {activeFilters}
                    </span>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent
                side="bottom"
                className="bg-zinc-900 border-zinc-800 text-white p-0 rounded-t-xl max-h-[80vh] overflow-auto"
              >
                <div className="sticky top-0 bg-zinc-900 z-10 pb-2">
                  <div className="mx-auto w-12 h-1.5 bg-zinc-700 rounded-full my-3" />
                  <SheetHeader className="px-6 pt-2">
                    <div className="flex items-center justify-between">
                      <SheetTitle className="text-xl font-medium text-white">Filters</SheetTitle>
                      <SheetClose asChild>
                        <Button variant="ghost" size="icon" className="rounded-full h-8 w-8 hover:bg-zinc-800">
                          <X className="h-4 w-4" />
                        </Button>
                      </SheetClose>
                    </div>
                    <SheetDescription className="text-zinc-400 text-sm">
                      Filter mods by loader, sort order, and game version
                    </SheetDescription>
                  </SheetHeader>
                </div>

                <form onSubmit={handleFilter} className="px-6 py-4">
                  <div className="space-y-6">
                    {/* Mod Loader Section */}
                    <div className="space-y-3">
                      <label className="text-sm font-medium text-zinc-300">Mod Loader</label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
                        {sorts.flatMap((loader) =>
                          loader.modLoaderIds.map((loaderMod) => (
                            <Button
                              key={loaderMod.loaderId}
                              type="button"
                              variant={activeLoader === loaderMod.name ? "default" : "outline"}
                              className={`
                                border-zinc-700 hover:border-zinc-600 
                                ${
                                  activeLoader === loaderMod.name
                                    ? "bg-violet hover:bg-violet-700 text-white"
                                    : "bg-zinc-800 hover:bg-zinc-700 text-zinc-300"
                                }
                              `}
                              onClick={() => handleLoaderChange(loaderMod.name)}
                            >
                              {loaderMod.name}
                              {activeLoader === loaderMod.name && <Check className="ml-2 h-4 w-4" />}
                            </Button>
                          )),
                        )}
                      </div>
                    </div>

                    <Separator className="bg-zinc-800" />

                    {/* Sort Options Section */}
                    <div className="space-y-3">
                      <label className="text-sm font-medium text-zinc-300">Sort By</label>
                      <Select value={activeSort} onValueChange={handleFilterChange("sortOptions")}>
                        <SelectTrigger className="w-full bg-zinc-800 border-zinc-700 text-white focus:ring-violet-500">
                          <SelectValue placeholder="Select Sort" />
                        </SelectTrigger>
                        <SelectContent className="bg-zinc-800 border-zinc-700">
                          {sorts.flatMap((loader) =>
                            loader.sortOptions.map((option) => (
                              <SelectItem
                                key={option}
                                value={option}
                                className="text-white hover:bg-zinc-700 focus:bg-violet data-[selected]:bg-violet data-[selected]:text-white"
                              >
                                {option}
                              </SelectItem>
                            )),
                          )}
                        </SelectContent>
                      </Select>
                    </div>

                    <Separator className="bg-zinc-800" />

                    {/* Game Version Section */}
                    <div className="space-y-3">
                      <label className="text-sm font-medium text-zinc-300">Game Version</label>
                      <Select value={searchQuery} onValueChange={handleFilterChange("gameVersion")}>
                        <SelectTrigger className="w-full bg-zinc-800 border-zinc-700 text-white focus:ring-violet-500">
                          <SelectValue placeholder="Select Version" />
                        </SelectTrigger>
                        <SelectContent className="bg-zinc-800 border-zinc-700">
                          {sorts[0].gameVersions.map((version) => (
                            <SelectItem
                              key={version}
                              value={version}
                              className="text-white hover:bg-zinc-700 focus:bg-violet data-[selected]:bg-violet data-[selected]:text-white"
                            >
                              {version}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Active Filters */}
                  {activeFilters > 0 && (
                    <div className="mt-6 pt-4 border-t border-zinc-800">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-sm font-medium text-zinc-300">Active Filters</h3>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="h-8 text-zinc-400 hover:text-white"
                          onClick={resetFilters}
                        >
                          <RefreshCw className="mr-1 h-3 w-3" />
                          Reset
                        </Button>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {activeLoader && activeLoader !== "All" && (
                          <Badge
                            variant="outline"
                            className="bg-violet-900/30 text-violet-300 border-violet-700 px-3 py-1"
                          >
                            {activeLoader}
                            <button
                              type="button"
                              className="ml-1 hover:text-white"
                              onClick={() => handleLoaderChange("All")}
                            >
                              <X className="h-3 w-3" />
                            </button>
                          </Badge>
                        )}
                        {activeSort && activeSort !== "Relevancy" && (
                          <Badge
                            variant="outline"
                            className="bg-violet-900/30 text-violet-300 border-violet-700 px-3 py-1"
                          >
                            {activeSort}
                            <button
                              type="button"
                              className="ml-1 hover:text-white"
                              onClick={() => handleSortChange("Relevancy")}
                            >
                              <X className="h-3 w-3" />
                            </button>
                          </Badge>
                        )}
                        {searchQuery && (
                          <Badge
                            variant="outline"
                            className="bg-violet-900/30 text-violet-300 border-violet-700 px-3 py-1"
                          >
                            {searchQuery}
                            <button
                              type="button"
                              className="ml-1 hover:text-white"
                              onClick={() => handleVersionChange("")}
                            >
                              <X className="h-3 w-3" />
                            </button>
                          </Badge>
                        )}
                      </div>
                    </div>
                  )}

                  <SheetFooter className="mt-6 flex gap-3 border-t border-zinc-800 pt-4">
                    <Button
                      type="button"
                      variant="outline"
                      className="flex-1 border-zinc-700 bg-zinc-800 text-white hover:bg-zinc-700"
                      onClick={() => setIsOpen(false)}
                    >
                      Cancel
                    </Button>
                    <Button type="submit" className="flex-1 bg-violet text-white hover:bg-violet-700">
                      Apply Filters
                    </Button>
                  </SheetFooter>
                </form>
              </SheetContent>
            </Sheet>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Active filters bar (optional - shows at the top of content) */}
      {activeFilters > 0 && (
        <div className="bg-zinc-900 border-b border-zinc-800 py-2 px-4 flex items-center justify-between sticky top-0 z-40">
          <div className="flex items-center gap-2">
            <span className="text-sm text-zinc-400">Filters:</span>
            <div className="flex flex-wrap gap-1">
              {activeLoader && activeLoader !== "All" && (
                <Badge className="bg-violet-900/30 text-violet-300 border-violet-700">{activeLoader}</Badge>
              )}
              {activeSort && activeSort !== "Relevancy" && (
                <Badge className="bg-violet-900/30 text-violet-300 border-violet-700">{activeSort}</Badge>
              )}
              {searchQuery && (
                <Badge className="bg-violet-900/30 text-violet-300 border-violet-700">{searchQuery}</Badge>
              )}
            </div>
          </div>
          <Button variant="ghost" size="sm" className="h-7 text-zinc-400 hover:text-white" onClick={resetFilters}>
            <RefreshCw className="mr-1 h-3 w-3" />
            Reset
          </Button>
        </div>
      )}
    </>
  )
}

