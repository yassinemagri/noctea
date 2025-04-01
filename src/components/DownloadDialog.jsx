import { ExternalLink, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { QrCode } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";

export default function DownloadDialog({ mod,setIsDownloadDialogOpen }) {
  const [modDetails, setModDetails] = useState(null);

  useEffect(() => {
    if (mod?.latestFiles?.length > 0) {
      setModDetails(mod.latestFiles[0]); 
    }
  }, [mod]);
  
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 animate-in fade-in duration-200">
      <Card
        className="w-full max-w-md bg-zinc-900 border-none text-white"
        data-slot="card"
      >
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-xl font-medium">Download </CardTitle>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-full hover:bg-zinc-800 cursor-pointer"
            onClick={()=> setIsDownloadDialogOpen(false)}
          >
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="flex justify-center items-center">
            <Select>
              <SelectTrigger className="w-full bg-zinc-800 border-none cursor-pointer">
                <SelectValue placeholder="All Game Versions" />
              </SelectTrigger>
              <SelectContent>
       
  <SelectItem value="1.21.5" className={`text-white hover:bg-zinc-800 focus:bg-violet data-[selected]:bg-violet data-[selected]:text-white cursor-pointer`}
                >version</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="w-full bg-zinc-800 border-none mx-2 cursor-pointer">
                <SelectValue placeholder="All Mod Loaders" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="fabric" className={`text-white hover:bg-zinc-800 focus:bg-violet data-[selected]:bg-violet data-[selected]:text-white cursor-pointer`}
                >Fabric</SelectItem>
              </SelectContent>
            </Select>
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 bg-transparent border-gray-700 hover:bg-gray-800 cursor-pointer"
            >
              <QrCode size={16} />
            </Button>
            <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 bg-transparent border-gray-700 hover:bg-gray-800 ml-2 cursor-pointer"
              >
                <ExternalLink size={16} />
              </Button>
          </div>
          <div className="bg-zinc-800 p-3 rounded-md">
            <div className="flex justify-between items-center">
              <div className="text-sm">
                {modDetails && modDetails.fileName}
              </div>
              <div className="text-xs text-zinc-400">Latest release</div>
            </div>
            <div className="flex justify-between items-center mt-2">
              <div className="flex items-center gap-2">
              {modDetails && modDetails.gameVersions.map(vers=> <span key={vers} className="text-sm">{vers}</span>)}
                
                <span className="text-sm text-zinc-400">Forge</span>
              </div>
              <div className="text-xs text-zinc-400">
              {modDetails && format(new Date(modDetails?.fileDate), "MMM dd, yyyy")}
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end pt-2">
          <Button className="bg-violet/50 hover:bg-violet text-white border-none cursor-pointer">
            Download File
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
