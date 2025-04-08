import { useState } from "react";
import {
  Calendar,
  Clock,
  Download,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import DownloadDialog from "@/components/DownloadDialog";
import {formatNumber ,filterGameVersion} from "@/data/helpers";

function ModCard({ mod, activeLoader }) {
  const [isDownloadDialogOpen, setIsDownloadDialogOpen] = useState(false)
  // filters version and leader
  const modLeader = filterGameVersion(mod.latestFiles[0].gameVersions)[0]
  const gameVersion = filterGameVersion(mod.latestFiles[0].gameVersions)[1]
  return (
    <Card className="border-none max-lg:w-auto m-4">
      <CardContent className="flex gap-4 max-lg:items-start">
        <div className="flex-shrink-0">
          <img
            src={mod.logo?.thumbnailUrl || ""}
            alt={mod.name}
            width={100}
            height={100}
            className="rounded-md"
          />
        </div>
        <div className="flex-grow">
          <div className="flex justify-between max-lg:flex-col max-xl:flex-col">
            <div> 
              <h3 className="text-xl font-semibold max-lg:flex-col max-sm:flex-row"><span>{mod.name}</span> <span className="text-violet text-sm">By {mod.authors[0].name}</span></h3>
              <p className="text-gray-400 mt-2 max-lg:w-60 w-80 overflow-hidden text-ellipsis h-auto whitespace-nowrap max-sm:w-80 max-sm:mb-5">
                {mod.summary}
              </p>
            </div>

            <div className="flex gap-2">
              <Button
                variant="default"
                className="bg-violet text-[#eeedff] hover:bg-violet h-8 px-3 py-1 cursor-pointer"
                onClick={()=> setIsDownloadDialogOpen(true)}
              >
                <Download size={16} className="mr-1 " />
                Download
              </Button>
            </div>
          </div>

          <div className="flex gap-4 mt-4 text-sm text-gray-400">
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              <span>{format(mod.dateCreated, "MMM dd, yyyy")}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={14} />
              <span>{format(mod.dateModified, "MMM dd, yyyy")}</span>
            </div>
            <div className="flex items-center gap-1">
              <Download size={14} />
              <span>{formatNumber(mod.downloadCount)}</span>
            </div>
          </div>

          <div className="mt-2">
            <Badge
              variant="default"
              className="bg-violet hover:bg-violet text-white mr-2"
            >
              {activeLoader === "all" ? activeLoader : `${modLeader}`}
            </Badge>
            <Badge
              variant="default"
              className="bg-violet hover:bg-violet text-white"
            >
              {gameVersion}
            </Badge>
          </div>
        </div>
        {isDownloadDialogOpen && <DownloadDialog  mod={mod || "Collective"} open={isDownloadDialogOpen} onOpenChange={setIsDownloadDialogOpen}/>}
      </CardContent>
    </Card>
  );
}

export default ModCard;
