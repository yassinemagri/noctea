import React from 'react'
import { Star, ExternalLink, Download } from "lucide-react"
export const JavaEdition = () => {
  return (
    <div className="bg-[#0D0D0D] py-12">
    <div className="container mx-auto px-4">
      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="bg-[#151515] rounded-lg p-4">
          <div className="mb-6">
            <h3 className="text-gray-300 font-cairo mb-2">Mod Loaders</h3>
            <div className="bg-[#1A1A1A] rounded p-2">{/* Placeholder for mod loader filters */}</div>
          </div>
          <div>
            <h3 className="text-gray-300 font-cairo mb-2">Game Version</h3>
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-[#1A1A1A] border-none rounded p-2 text-gray-300"
            />
            <div className="bg-[#1A1A1A] h-32 rounded mt-2">{/* Placeholder for version list */}</div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-6">
          {/* Mod Card */}
          <div className="bg-[#151515] rounded-lg p-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-shrink-0">
                <img
                  src="https://i.ibb.co/Qp1Gk1k/netherite.png"
                  alt="Easy Netherite"
                  className="w-32 h-32 object-cover rounded"
                />
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-xl font-play text-white">Easy Netherite</h2>
                    <p className="text-[#ff5e41] text-sm">By Sarti101</p>
                    <p className="text-gray-400 text-sm mt-2">Convert all Netherite tools to Netherite</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <a href="#" className="text-[#ff5e41] hover:text-[#D3442B]">
                      <Download className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white">
                      <Star className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  <div className="flex items-center text-xs text-gray-400">
                    <span className="mr-1">📅</span>
                    <span>Feb 00, 2005</span>
                  </div>
                  <div className="flex items-center text-xs text-gray-400">
                    <span className="mr-1">⏱️</span>
                    <span>00:00 MB</span>
                  </div>
                  <div className="flex items-center text-xs text-gray-400">
                    <span className="mr-1">⬇️</span>
                    <span>0.0 M</span>
                  </div>
                  <div className="flex items-center text-xs text-gray-400">
                    <span className="mr-1">🔄</span>
                    <span>Jan 11, 2025</span>
                  </div>
                </div>
                <div className="mt-4">
                  <span className="bg-[#D3442B]/20 text-[#ff5e41] text-xs px-2 py-1 rounded mr-2">Mods</span>
                  <span className="bg-[#333] text-gray-300 text-xs px-2 py-1 rounded">NeoForge</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
