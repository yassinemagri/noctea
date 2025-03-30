import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"


export default function DownloadDialog({ modName }) {


  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 animate-in fade-in duration-200">
      <Card className="w-full max-w-md bg-zinc-900 border-none text-white" data-slot="card">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-xl font-medium">Download {modName}</CardTitle>
          <Button variant="ghost" size="icon"  className="h-8 w-8 rounded-full hover:bg-zinc-800">
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent className="space-y-4">
          <Select>
            <SelectTrigger className="w-full bg-zinc-800 border-none">
              <SelectValue placeholder="All Game Versions" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1.21.5">1.21.5</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-full bg-zinc-800 border-none">
              <SelectValue placeholder="All Mod Loaders" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="fabric">Fabric</SelectItem>
              <SelectItem value="forge">Forge</SelectItem>
              <SelectItem value="neo">NeoForge</SelectItem>
            </SelectContent>
          </Select>

          <div className="bg-zinc-800 p-3 rounded-md">
            <div className="flex justify-between items-center">
              <div className="text-sm">[Fabric/Forge/Neo] 1.21.5-8.1 | C...</div>
              <div className="text-xs text-zinc-400">Latest release</div>
            </div>
            <div className="flex justify-between items-center mt-2">
              <div className="flex items-center gap-2">
                <span className="text-sm">1.21.5</span>
                <span className="text-sm text-zinc-400">Forge + 3</span>
              </div>
              <div className="text-xs text-zinc-400">Mar 30, 2025</div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end pt-2">
          <Button className="bg-orange-500 hover:bg-orange-600 text-white border-none">Download File</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

