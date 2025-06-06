import { Link } from "react-router-dom"
import ModsCard from "./ModsCard"
import { useState } from "react"

export default function PopularAddons({type, modCategory, filteredData}) {
const [isDownloadPageOpen, setIsDownloadPageOpen] = useState(false)
  return (
    <section className="w-full py- text-white">
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-medium">{type} {modCategory} </h2>

          <Link to={`/${modCategory.toLowerCase()}`} className="text-sm text-gray-400 hover:text-white transition-colors">
            View all
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {filteredData.map(modData => <ModsCard key={modData.id} data={modData} openFn={setIsDownloadPageOpen} open={isDownloadPageOpen} />)}
        </div>
      </div>
    </section>
  )
}

