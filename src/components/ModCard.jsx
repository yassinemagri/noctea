import { Calendar, Clock, Download, ExternalLink, Star, BarChart } from "lucide-react"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"

function ModCard({ mod }) {
  return (
    <Card className="bg-zinc-900 border-none">
      <CardContent className="p-4 flex gap-4">
        <div className="flex-shrink-0">
          <img
            src={mod.imageUrl || "/placeholder.svg"}
            alt={mod.name}
            width={100}
            height={100}
            className="rounded-md"
          />
        </div>

        <div className="flex-grow">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-semibold">{mod.name}</h3>
              <p className="text-red-500 text-sm">By {mod.author}</p>
              <p className="text-gray-400 mt-2">{mod.description}</p>
            </div>

            <div className="flex gap-2">
              <Button variant="default" className="bg-red-500 hover:bg-red-600 h-8 px-3 py-1">
                <Download size={16} className="mr-1" />
                Download
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 bg-transparent border-gray-700 hover:bg-gray-800"
              >
                <ExternalLink size={16} />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 bg-transparent border-gray-700 hover:bg-gray-800"
              >
                <BarChart size={16} />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 bg-transparent border-gray-700 hover:bg-gray-800"
              >
                <Star size={16} />
              </Button>
            </div>
          </div>

          <div className="flex gap-4 mt-4 text-sm text-gray-400">
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              <span>{mod.creationDate}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={14} />
              <span>{mod.fileSize}</span>
            </div>
            <div className="flex items-center gap-1">
              <Download size={14} />
              <span>{mod.downloads}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              <span>{mod.lastUpdated}</span>
            </div>
          </div>

          <div className="mt-2">
            <Badge variant="default" className="bg-red-500 hover:bg-red-500 text-white">
              {mod.loader}
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default ModCard

