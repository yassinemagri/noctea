import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Download, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { urlFn, formatNumber } from "@/data/helpers";
import { Button } from "./ui/button";

const PlayerModList = () => {
  const scrollContainerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  // Sample data - replace with your actual data
  const users = [
    {
      id: "1",
      username: "OptiFine",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr5_LvyfkDIfRwatYAQn91En5BtnqzI0zLzA&s",
      badgeColor: "from-skyblue to-violet",
      downloadUrl: "https://optifine.net/downloads",
      modVersion: "1.21.5",
      isVerified: true,
    },
    {
      id: "2",
      username: "Easy Netherite",
      imageUrl: "https://i.ibb.co/xSVrmzb0/lolo.png",
      badgeColor: "from-skyblue to-violet",
      downloadUrl: "https://optifine.net/downloads",
      modVersion: "1.21.5",
      isVerified: true,
    },
    {
      id: "3",
      username: "Cinematic & Recording",
      imageUrl: "https://i.ibb.co/xSVrmzb0/lolo.png",
      badgeColor: "from-skyblue to-violet",
      downloadUrl: "https://optifine.net/downloads",
      modVersion: "1.21.5",
      isVerified: true,
    },
    {
      id: "4",
      username: "Building and Aesthetics",
      imageUrl: "https://i.ibb.co/xSVrmzb0/lolo.png",
      badgeColor: "from-skyblue to-violet",
      downloadUrl: "https://optifine.net/downloads",
      modVersion: "1.21.5",
      isVerified: true,
    },
    {
      id: "5",
      username: "Survival/Adventure Series",
      imageUrl: "https://i.ibb.co/xSVrmzb0/lolo.png",
      badgeColor: "from-skyblue to-violet",
      downloadUrl: "https://optifine.net/downloads",
      modVersion: "1.21.5",
      isVerified: true,
    },
    {
      id: "6",
      username: "Quality of Life / Content Creator Tools",
      imageUrl: "https://i.ibb.co/xSVrmzb0/lolo.png",
      badgeColor: "from-skyblue to-violet",
      downloadUrl: "https://optifine.net/downloads",
      modVersion: "1.21.5",
      isVerified: true,
    },
  ];

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scrollTo = (direction) => {
    if (scrollContainerRef.current) {
      const { clientWidth } = scrollContainerRef.current;
      const scrollAmount =
        direction === "left" ? -clientWidth / 2 : clientWidth / 2;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };
  useEffect(() => {
    // Set the first user as selected by default
    if (users.length > 0 && !selectedUser) {
      setSelectedUser(users[0]);
    }
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto p-1">
      <div className="relative">
        {/* Left scroll button */}
        <button
          onClick={() => scrollTo("left")}
          className={cn(
            "absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/70 rounded-full p-1 text-white transition-opacity",
            showLeftArrow ? "opacity-100" : "opacity-0 pointer-events-none"
          )}
          aria-label="Scroll left"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Scrollable container */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-4 p-2 scrollbar-hide"
          onScroll={handleScroll}
        >
          {users.map((user) => (
            <div
              key={user.id}
              className={cn(
                "flex flex-col items-center flex-shrink-0 cursor-pointer transition-transform duration-200 p-4",
                selectedUser?.id === user.id ? "scale-110" : "hover:scale-105"
              )}
              onClick={() => setSelectedUser(user)}
            >
              <div className="relative w-20 h-20 m-2">
                {/* Hexagon badge shape with gradient border */}
                <div
                  className={`absolute inset-0 bg-gradient-to-b ${user.badgeColor}  rounded-lg rotate-45 transform-gpu`}
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
              <p className="text-xs text-center text-white truncate w-30 p-2">
                {user.username}
              </p>
            </div>
          ))}
        </div>

        {/* Right scroll button */}
        <button
          onClick={() => scrollTo("right")}
          className={cn(
            "absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/70 rounded-full p-1 text-white transition-opacity",
            showRightArrow ? "opacity-100" : "opacity-0 pointer-events-none"
          )}
          aria-label="Scroll right"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Selected user details */}
      {selectedUser && (
        <div className="bg-[#101219] rounded-lg p-4 border border-skyblue">
          <div className="flex items-center gap-4">
            <div className="relative w-15 h-16">
              {/* Hexagon badge shape with gradient border */}
              <div
                className={`absolute inset-0 bg-gradient-to-b ${selectedUser.badgeColor} rounded-lg rotate-45 transform-gpu`}
              ></div>

              {/* Inner hexagon with black background */}
              <div className="absolute inset-[2px] bg-black rounded-4xl rotate-45 transform-gpu"></div>

              {/* User image */}
              <div className="absolute inset-[2px] overflow-hidden rounded-lg rotate-45 transform-gpu">
                <img
                  src={selectedUser.imageUrl || "/placeholder.svg"}
                  alt={selectedUser.username}
                  className="absolute left-1/2 top-1/2 w-[120%] h-[120%] object-cover -translate-x-1/2 -translate-y-1/2 -rotate-45 transform-gpu origin-center"
                />
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold flex items-center gap-2">
                {selectedUser.username}
                {selectedUser.isVerified && (
                  <ShieldCheck className="text-success" size={16}/>
                )}
              </h3>

              <div className="flex items-center gap-4 mt-2 text-sm text-gray-300">
                <div className="flex items-center gap-1">
                  <Button 
                    className="bg-skyblue hover:bg-violet text-white cursor-pointer"
                    onClick={() => urlFn(selectedUser.downloadUrl)}
                  >
                    <Download size={14} />
                    Download
                  </Button>
                  {selectedUser.modVersion}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlayerModList;
