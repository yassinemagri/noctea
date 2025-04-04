import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const ModsCard = ({ data, onDownload }) => {
  const [isHovered, setIsHovered] = useState(false);

  function formatNumber(value) {
    var valueToNumber = Number(value);
    if (isNaN(valueToNumber)) return "Invalid number";
    if (valueToNumber >= 1_000_000_000_000) {
      return (valueToNumber / 1_000_000_000_000).toFixed(1) + "T";
    } else if (valueToNumber >= 1_000_000_000) {
      return (valueToNumber / 1_000_000_000).toFixed(1) + "B";
    } else if (valueToNumber >= 1_000_000) {
      return (valueToNumber / 1_000_000).toFixed(1) + "M";
    } else if (valueToNumber >= 1_000) {
      return (valueToNumber / 1_000).toFixed(1) + "K";
    }
    return valueToNumber.toString();
  }

  const handleCardClick = () => {
    window.open(data.links?.websiteUrl || "#", "_blank");
  };
  const filterModLeader = data.latestFiles[0].gameVersions.filter(
    (client) => !/\d/.test(client) && client !== "Server" && client !== "Client"
  );
  const filterGameVersion = data.latestFiles[0].gameVersions.filter((client) =>
    /\d/.test(client)
  );
  // console.log(filterModLeader.length > 0 && filterModLeader)
  console.log(filterGameVersion.length > 0 && filterGameVersion)
  return (
    <Card
      key={data.id}
      className="bg-zinc-900 p-0 border-zinc-800 overflow-hidden group transition-all duration-200 hover:shadow-lg hover:shadow-violet-900/20 hover:border-zinc-700"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
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
          onClick={handleCardClick}
        >
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-zinc-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {/* Quick action buttons */}
            <div className="absolute bottom-3 right-3 flex gap-2">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      size="icon"
                      variant="secondary"
                      className="h-8 w-8 bg-zinc-800/80 hover:bg-violet-600 transition-colors"
                      onClick={(e) => {}}
                    >
                      <Download size={14} />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Download mod</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      size="icon"
                      variant="secondary"
                      className="h-8 w-8 bg-zinc-800/80 hover:bg-zinc-700 transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(data.links?.websiteUrl || "#", "_blank");
                      }}
                    >
                      <ExternalLink size={14} />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>View details</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>

            {/* Download count */}
            <div className="absolute bottom-3 left-3">
              <Badge
                variant="outline"
                className="bg-zinc-800/80 border-zinc-700 text-xs flex items-center gap-1"
              >
                <Download size={12} />
                {formatNumber(data.downloadCount || 0)}
              </Badge>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-3 space-y-1">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <h3 className="font-medium text-sm line-clamp-1 cursor-default">
                  {data.name}
                </h3>
              </TooltipTrigger>
              <TooltipContent>
                <p>{data.name}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <div className="flex items-start flex-col">
            <p className="text-xs text-violet-400">
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
