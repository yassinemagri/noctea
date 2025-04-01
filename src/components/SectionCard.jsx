import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Link } from "react-router-dom"
import { Download } from "lucide-react"

export default function PopularAddons() {
  const addons = [
    {
      id: "1",
      title: "Better on Bedrock",
      author: "xxpoggyislixx",
      authorUsername: "xxpoggyislixx",
      downloads: "2.7M",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "2",
      title: "System Dynamic Lighting",
      author: "SystemTv",
      authorUsername: "SystemTv",
      downloads: "2.2M",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "3",
      title: "Edds' VeinCapitator",
      author: "AlienEdds",
      authorUsername: "AlienEdds",
      downloads: "788.0K",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "4",
      title: "Aplok Guns",
      author: "gabriel_aplok",
      authorUsername: "gabriel_aplok",
      downloads: "754.9K",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "5",
      title: "Raiyon's Java Combat",
      author: "lordraiyon69",
      authorUsername: "lordraiyon69",
      downloads: "1.9M",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "6",
      title: "Raiyon's Dynamic Lights",
      author: "lordraiyon69",
      authorUsername: "lordraiyon69",
      downloads: "1.9M",
      image: "/placeholder.svg?height=200&width=200",
    },
  ]

  return (
    <section className="w-full py-8 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-medium">Popular Addons</h2>
          <Link to="/addons" className="text-sm text-gray-400 hover:text-white transition-colors">
            View all
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {addons.map((addon) => (
            <Card key={addon.id} className="bg-zinc-900 border-zinc-800 overflow-hidden">
              <CardContent className="p-0">
                <div className="relative aspect-square">
                  <img src={addon.image || "/placeholder.svg"} alt={addon.title} className="object-cover" />
                </div>
                <div className="p-3 space-y-1">
                  <h3 className="font-medium text-sm line-clamp-1" title={addon.title}>
                    {addon.title}
                  </h3>
                  <p className="text-xs text-gray-400">By {addon.authorUsername}</p>
                </div>
              </CardContent>
              <CardFooter className="p-3 pt-0 flex items-center justify-between">
                <div className="flex items-center gap-1 text-gray-400">
                <Download />
                <span className="text-xs">{addon.downloads}</span>
                </div>
                <Badge variant="secondary" className="text-xs bg-zinc-800 text-gray-300 hover:bg-zinc-700">
                  Addons
                </Badge>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

