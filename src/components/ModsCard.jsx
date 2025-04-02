import React from 'react'
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Download } from "lucide-react"

const ModsCard = ({data}) => {
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
  return (
    <Card key={data.id} className="bg-zinc-900 p-0 border-zinc-800 overflow-hidden">
    <CardContent className="p-0">
      <div className="relative aspect-square">
        <img src={data?.logo?.thumbnailUrl || ""} alt={data.name} className="object-cover" />
      </div>
      <div className="px-3 space-y-1">
        <h3 className="font-medium text-sm line-clamp-1" title={data.name}>
          {data.name}
        </h3>
        <p className="text-xs text-green-400">By <span >{data.authors[0].name || "1001"}</span></p>
      </div>
    </CardContent>

  </Card>
  )
}

export default ModsCard