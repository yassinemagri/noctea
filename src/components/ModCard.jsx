import {
  Calendar,
  Clock,
  Download,
  ExternalLink,
  Star,
  BarChart,
  Database,
  QrCode,
} from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { format } from "date-fns";
import DownloadDialog from "./DownloadDialog";
import { useState } from "react";

function ModCard({ mod, activeLoader }) {
  AlertTitle('hnya akhi badrr')
  // console.log(mod.latestFiles[0].gameVersions)
  const [isDownloadDialogOpen, setIsDownloadDialogOpen] = useState(false)
  return (
    <Card className="bg-zinc-900 border-none max-lg:mx-12 max-lg:w-auto">
      <CardContent className="p-4 flex gap-4 max-lg:flex-col max-lg:items-center">
        <div className="flex-shrink-0">
          <img
            src={mod.logo.thumbnailUrl || "/placeholder.svg"}
            alt={mod.name}
            width={100}
            height={100}
            className="rounded-md"
          />
        </div>

        <div className="flex-grow">
          <div className="flex justify-between max-lg:flex-col">
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
              >
                <Download size={16} className="mr-1 " />
                Download
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 bg-transparent border-gray-700 hover:bg-gray-800 cursor-pointer"
              >
                <ExternalLink size={16} />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 bg-transparent border-gray-700 hover:bg-gray-800 cursor-pointer"
              >
                <QrCode size={16} />
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
              <span>{mod.downloadCount}</span>
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

        <DownloadDialog  modName={mod.name || "Collective"}/>
      </CardContent>
    </Card>
  );
}

export default ModCard;
