import React from 'react'
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Download } from "lucide-react"

const ModsCard = ({data}) => {
  return (
    <Card key={data.id} className="bg-zinc-900 border-zinc-800 overflow-hidden">
    <CardContent className="p-0">
      <div className="relative aspect-square">
        <img src={data?.logo?.thumbnailUrl || ""} alt={data.name} className="object-cover" />
      </div>
      <div className="p-3 space-y-1">
        <h3 className="font-medium text-sm line-clamp-1" title={data.name}>
          {data.name}
        </h3>
        <p className="text-xs text-gray-400">By {data.authors[0].name || "CHEB L3ERBI"}</p>
      </div>
    </CardContent>
    <CardFooter className="p-3 pt-0 flex items-center justify-between">
      <div className="flex items-center gap-1 text-gray-400">
      <Download />
      <span className="text-xs">{data.downloadCount}</span>
      </div>
      <Badge variant="secondary" className="text-xs bg-zinc-800 text-gray-300 hover:bg-zinc-700">
        Addons
      </Badge>
    </CardFooter>
  </Card>
  )
}

export default ModsCard