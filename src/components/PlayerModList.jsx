import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Download, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import {urlFn,formatNumber } from "@/data/helpers";
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
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr5_LvyfkDIfRwatYAQn91En5BtnqzI0zLzA&s",
      badgeColor: "from-purple-600 to-yellow-500",
      downloadUrl: "https://optifine.net/downloads",
      modCount: 23,
      isVerified: true,
    },
    {
      id: "2",
      username: "7amza_nej",
      imageUrl: "/placeholder.svg?height=100&width=100",
      badgeColor: "from-purple-600 to-yellow-400",
      downloads: 8700,
      rating: 4.5,
      modCount: 15,
      isVerified: true,
    },
    {
      id: "3",
      username: "zineb.elhaj",
      imageUrl: "/placeholder.svg?height=100&width=100",
      badgeColor: "from-purple-600 to-blue-500",
      downloads: 32100,
      rating: 4.9,
      modCount: 42,
      isVerified: true,
    },
    {
      id: "4",
      username: "iph.afree",
      imageUrl: "/placeholder.svg?height=100&width=100",
      badgeColor: "from-purple-600 to-orange-500",
      downloads: 5400,
      rating: 4.2,
      modCount: 8,
      isVerified: false,
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

  function formatNumber(value) {
    if (value >= 1_000_000) {
      return (value / 1_000_000).toFixed(1) + "M";
    } else if (value >= 1_000) {
      return (value / 1_000).toFixed(1) + "K";
    }
    return value.toString();
  }

  useEffect(() => {
    // Set the first user as selected by default
    if (users.length > 0 && !selectedUser) {
      setSelectedUser(users[0]);
    }
  }, []);

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 py-6">
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
          className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide"
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
              <div className="relative w-20 h-20 mb-2">
                {/* Hexagon badge shape with gradient border */}
                <div
                  className={`absolute inset-0 bg-gradient-to-b ${user.badgeColor} rounded-lg rotate-45 transform-gpu`}
                ></div>

                {/* Inner hexagon with black background */}
                <div className="absolute inset-[3px] bg-black rounded-lg rotate-45 transform-gpu"></div>

                {/* User image */}
                <div className="absolute inset-[6px] overflow-hidden rounded-lg rotate-45 transform-gpu">
                  <img
                    src={user.imageUrl || "/placeholder.svg"}
                    alt={user.username}
                    className="w-[120%] h-[120%] object-cover -rotate-45 transform-gpu origin-center"
                  />
                </div>
              </div>
              <p className="text-xs text-center text-white truncate w-20 p-2">
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
        <div className="mt-8 bg-zinc-800/50 rounded-lg p-4 border border-zinc-700">
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16">
              {/* Hexagon badge shape with gradient border */}
              <div
                className={`absolute inset-0 bg-gradient-to-b ${selectedUser.badgeColor} rounded-lg rotate-45 transform-gpu`}
              ></div>

              {/* Inner hexagon with black background */}
              <div className="absolute inset-[2px] bg-black rounded-lg rotate-45 transform-gpu"></div>

              {/* User image */}
              <div 
                className="absolute inset-[4px] overflow-hidden rounded-lg rotate-45 transform-gpu"
              >
                <div 
                  className=""
                  style={{
                  backgroundImage: `url(${selectedUser.imageUrl})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  transform: isHovered ? "scale(1.05)" : "scale(1)",
                }}></div>
                {/* <img
                  src={selectedUser.imageUrl || "/placeholder.svg"}
                  alt={selectedUser.username}
                  className="w-[120%] h-[120%] object-cover -rotate-45 transform-gpu origin-center"
                /> */}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold flex items-center gap-2">
                {selectedUser.username}
                {selectedUser.isVerified && (
                  <span className="bg-blue-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                )}
              </h3>

              <div className="flex items-center gap-4 mt-2 text-sm text-gray-300">
                <div className="flex items-center gap-1">
                  <Button onClick={()=> urlFn(selectedUser.downloadUrl)}>
                    <Download size={14} />
                    Download
                  </Button>
                </div>
                <div className="flex items-center gap-1">
                  <Star size={14} className="text-yellow-500 fill-yellow-500" />
                  <span>{selectedUser.rating}</span>
                </div>
                <div>
                  <span>{selectedUser.modCount} مود</span>
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
