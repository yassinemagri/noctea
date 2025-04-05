import { useState, useEffect } from "react"
import { Download, ShieldCheck, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"
import { urlFn } from "@/data/helpers"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Badge } from "@/components/ui/badge"

const PlayerModList = () => {
  const [selectedUser, setSelectedUser] = useState(null)

  // Sample data - replace with your actual data
  const ModsCula = [
    {
      id: "1",
      username: "OptiFine",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr5_LvyfkDIfRwatYAQn91En5BtnqzI0zLzA&s",
      badgeColor: "from-emerald-400 to-cyan-500",
      downloadUrl: "https://optifine.net/downloads",
      modVersion: "1.21.5",
      isVerified: true,
      description: "Optimize your Minecraft experience with better FPS and HD textures.",
      downloads: "50M+",
    },
    {
      id: "2",
      username: "Easy Netherite",
      imageUrl: "https://i.ibb.co/xSVrmzb0/lolo.png",
      badgeColor: "from-amber-400 to-orange-600",
      downloadUrl: "https://optifine.net/downloads",
      modVersion: "1.21.5",
      isVerified: true,
      description: "Simplifies finding and mining Netherite in the Nether.",
      downloads: "5M+",
    },
    {
      id: "3",
      username: "Cinematic & Recording",
      imageUrl: "https://i.ibb.co/xSVrmzb0/lolo.png",
      badgeColor: "from-purple-400 to-indigo-600",
      downloadUrl: "https://optifine.net/downloads",
      modVersion: "1.21.5",
      isVerified: true,
      description: "Create stunning cinematics and record your gameplay with ease.",
      downloads: "10M+",
    },
    {
      id: "4",
      username: "Building and Aesthetics",
      imageUrl: "https://i.ibb.co/xSVrmzb0/lolo.png",
      badgeColor: "from-rose-400 to-pink-600",
      downloadUrl: "https://optifine.net/downloads",
      modVersion: "1.21.5",
      isVerified: true,
      description: "Enhance your building experience with new blocks and tools.",
      downloads: "15M+",
    },
    {
      id: "5",
      username: "Survival/Adventure Series",
      imageUrl: "https://i.ibb.co/xSVrmzb0/lolo.png",
      badgeColor: "from-lime-400 to-green-600",
      downloadUrl: "https://optifine.net/downloads",
      modVersion: "1.21.5",
      isVerified: true,
      description: "Add new adventures, quests, and survival challenges to your game.",
      downloads: "8M+",
    },
    {
      id: "6",
      username: "Quality of Life / Content Creator Tools",
      imageUrl: "https://i.ibb.co/xSVrmzb0/lolo.png",
      badgeColor: "from-blue-400 to-sky-600",
      downloadUrl: "https://optifine.net/downloads",
      modVersion: "1.21.5",
      isVerified: true,
      description: "Essential tools for content creators and streamers.",
      downloads: "12M+",
    },
  ]

  useEffect(() => {
    if (ModsCula.length > 0 && !selectedUser) {
      setSelectedUser(ModsCula[0])
    }
  }, [])

  return (
    <div className="relative p-4 bg-gradient-to-b from-gray-900 to-[#101219] rounded-xl border border-gray-800 shadow-2xl">
      {/* Minecraft-inspired title */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-minecraft tracking-wide text-white uppercase relative inline-block">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-cyan-500 to-blue-500 font-bold">
            Minecraft Mods
          </span>
          <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 via-cyan-500 to-blue-500 rounded-full"></div>
        </h2>
      </div>

      <div className="relative">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="py-4">
            {ModsCula.map((user) => (
              <CarouselItem key={user.id} className="basis-auto md:basis-1/4 lg:basis-1/6">
                <div
                  className={cn(
                    "flex flex-col items-center cursor-pointer transition-all duration-300 p-2 relative",
                    selectedUser?.id === user.id ? "scale-110 z-10" : "hover:scale-105 hover:z-10",
                  )}
                  onClick={() => setSelectedUser(user)}
                >
                  <div className="relative w-20 h-20 m-2 transition-transform duration-300 hover:rotate-[360deg]">
                    {/* Glow effect for selected item */}
                    {selectedUser?.id === user.id && (
                      <div className="absolute -inset-2 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full animate-pulse"></div>
                    )}

                    {/* Hexagon badge shape with gradient border */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-b ${user.badgeColor} rounded-lg rotate-45 transform-gpu shadow-lg ${
                        selectedUser?.id === user.id ? "shadow-glow" : ""
                      }`}
                    ></div>

                    {/* Inner hexagon with black background */}
                    <div className="absolute inset-[3px] bg-black rounded-lg rotate-45 transform-gpu"></div>

                    {/* User image */}
                    <div className="absolute inset-[6px] overflow-hidden rounded-lg rotate-45 transform-gpu">
                      <img
                        src={user.imageUrl || "/placeholder.svg"}
                        alt={user.username}
                        className="absolute rounded-full left-1/2 top-1/2 w-[120%] h-[120%] object-cover -translate-x-1/2 -translate-y-1/2 -rotate-45 transform-gpu origin-center"
                      />
                    </div>
                  </div>

                  {/* Selected indicator */}
                  {selectedUser?.id === user.id && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full"></div>
                  )}

                  <p
                    className={cn(
                      "text-xs text-center truncate w-30 p-2 transition-all duration-300",
                      selectedUser?.id === user.id ? "text-white font-bold" : "text-gray-400 hover:text-white",
                    )}
                  >
                    {user.username}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0 bg-black/70 text-white border-none hover:bg-black/90 hover:text-cyan-400 transition-colors duration-300" />
          <CarouselNext className="right-0 bg-black/70 text-white border-none hover:bg-black/90 hover:text-cyan-400 transition-colors duration-300" />
        </Carousel>
      </div>

      {/* Selected user details */}
      {selectedUser && (
        <div className="mt-8 relative">
          {/* Decorative corner elements */}
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cyan-500"></div>
          <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-cyan-500"></div>
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-cyan-500"></div>
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-cyan-500"></div>

          <div className="bg-[#101219]/80 backdrop-blur-sm rounded-lg p-6 border border-gray-800 shadow-inner transition-all duration-300 ease-in-out hover:shadow-cyan-900/20">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg blur opacity-40 group-hover:opacity-75 transition duration-1000"></div>
                <div className="relative w-20 h-20 md:w-24 md:h-24">
                  {/* Hexagon badge shape with gradient border */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-b ${selectedUser.badgeColor} rounded-lg rotate-45 transform-gpu`}
                  ></div>

                  {/* Inner hexagon with black background */}
                  <div className="absolute inset-[2px] bg-black rounded-lg rotate-45 transform-gpu"></div>

                  {/* User image */}
                  <div className="absolute inset-[4px] overflow-hidden rounded-lg rotate-45 transform-gpu">
                    <img
                      src={selectedUser.imageUrl || "/placeholder.svg"}
                      alt={selectedUser.username}
                      className="absolute left-1/2 top-1/2 w-[120%] h-[120%] object-cover -translate-x-1/2 -translate-y-1/2 -rotate-45 transform-gpu origin-center"
                    />
                  </div>
                </div>
              </div>

              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h3 className="text-2xl font-bold text-white">{selectedUser.username}</h3>
                  {selectedUser.isVerified && (
                    <Badge
                      variant="outline"
                      className="bg-green-500/10 text-green-400 border-green-500/30 flex items-center gap-1"
                    >
                      <ShieldCheck size={12} />
                      Verified
                    </Badge>
                  )}
                  <Badge variant="outline" className="bg-blue-500/10 text-blue-400 border-blue-500/30">
                    v{selectedUser.modVersion}
                  </Badge>
                </div>

                <p className="text-gray-400 mb-4 max-w-2xl">{selectedUser.description}</p>

                <div className="flex flex-wrap items-center gap-4 mt-2">
                  <Button
                    className={`bg-gradient-to-r ${selectedUser.badgeColor} text-white font-medium hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-cyan-500/20`}
                    onClick={() => urlFn(selectedUser.downloadUrl)}
                  >
                    <Download size={16} className="mr-2" />
                    Download Mod
                  </Button>

                  <div className="flex items-center gap-2 text-gray-400">
                    <Sparkles size={16} className="text-yellow-500" />
                    <span>{selectedUser.downloads} Downloads</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default PlayerModList

