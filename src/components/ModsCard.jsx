import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { urlFn, formatNumber,downloadUrl } from "@/data/helpers";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const ModsCard = ({ data, openFn }) => {
  const [isHovered, setIsHovered] = useState(false);
  const filterModLeader = downloadUrl(data,true)[0]
  const filterGameVersion = downloadUrl(data,true)[1]

  return (
      <Card
        key={data.id}
        className="bg-[rgba(255, 255, 255, 0)] p-0 shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[9.5px] borderp-0 overflow-hidden group transition-all duration-200 hover:shadow-lg hover:shadow-violet-900/20"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={()=> window.open(`/mods/${data?.id}`)}
      >
        <CardContent className="p-0 relative">
          {/* Image with overlay */}
          <div
            className="relative aspect-square cursor-pointer transition-transform duration-300 ease-in-out"
            style={{
              backgroundImage: `url(${data?.logo?.thumbnailUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              transform: isHovered ? "scale(1.05)" : "scale(1)",
            }}
          >
            {/* Gradient overlay */}
            <div className="absolute flex justify-center m-0 items-center inset-0 bg-gradient-to-t from-violet/90 via-violet/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {/* Quick action buttons */}
              <div className="absolute bottom-3 right-3 flex gap-2">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipContent>
                      <p>Download mod</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-3 space-y-1">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <h3 className="font-bold text-sm line-clamp-1 cursor-default">
                    {data.name}
                  </h3>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{data.name}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <div className="flex items-start flex-col">
              <p className="text-xs text-skyblue">
                By{" "}
                <span className="hover:underline cursor-pointer">
                  {data.authors[0]?.name || "Unknown"}
                </span>
              </p>
              <div className="flex justify-between items-center w-full">
                {filterModLeader.length > 0 && (
                  <Badge
                    variant="outline"
                    className="text-[10px] h-5 border-zinc-700 text-gray-300"
                  >
                    {filterModLeader}
                  </Badge>
                )}
                {filterGameVersion.length > 0 && (
                  <Badge
                    variant="outline"
                    className="text-[10px] h-5 border-zinc-700 text-gray-300"
                  >
                    {filterGameVersion}
                  </Badge>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
  );
};

export default ModsCard;
