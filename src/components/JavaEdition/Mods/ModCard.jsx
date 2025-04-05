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
import {formatNumber } from "@/data/helpers";
import { Link } from "react-router-dom";

function ModCard({ mod, activeLoader }) {
  // console.log(mod.latestFiles[0].gameVersions)
  const [isDownloadDialogOpen, setIsDownloadDialogOpen] = useState(false)
  
  return (
    <Card className="border-none max-lg:w-auto m-4">
      <CardContent className="flex gap-4 max-lg:flex-col max-lg:items-center">
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
              <h3 className="text-xl font-semibold max-sm:flex-row">{mod.name} <span className="text-violet text-sm">By {mod.authors[0].name}</span></h3>
              <p className="text-gray-400 mt-2 w-80 overflow-hidden text-ellipsis h-auto whitespace-nowrap max-sm:w-80 max-sm:mb-5">
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
              <Link to={`/mods/${mod.id}`}>
                Detail
              </Link>
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
              className="bg-violet hover:bg-violet text-white"
            >
              {activeLoader}
            </Badge>
          </div>
        </div>
        {isDownloadDialogOpen && <DownloadDialog  mod={mod || "Collective"} open={isDownloadDialogOpen} onOpenChange={setIsDownloadDialogOpen}/>}
      </CardContent>
    </Card>
  );
}

export default ModCard;
