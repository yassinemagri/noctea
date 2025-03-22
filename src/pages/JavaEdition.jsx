import React from "react";
import { Star, ExternalLink, Download } from "lucide-react";
import { useEffect, useState } from 'react';

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
              <div className="bg-[#1A1A1A] rounded p-2">
                {/* Placeholder for mod loader filters */}
              </div>
            </div>
            <div>
              <h3 className="text-gray-300 font-cairo mb-2">Game Version</h3>
              <input
                type="text"
                placeholder="Search..."
                className="w-full bg-[#1A1A1A] border-none rounded p-2 text-gray-300"
              />
                <div className="bg-[#1A1A1A] text-white rounded mt-2 overflow-hidden">
                  <select
                    className="w-full bg-[#1A1A1A] text-gray-300 font-cairo text-sm border-0 focus:ring-0 focus:outline-none custom-scrollbar"
                    size={6}
                    aria-label="Game version select"
                  >
                    <option value="1.20.4" className="p-2 hover:bg-[#252525] cursor-pointer">
                      1.20.4
                    </option>
                    <option value="1.20.2" className="p-2 hover:bg-[#252525] cursor-pointer">
                      1.20.2
                    </option>
                    <option value="1.20.1" className="p-2 hover:bg-[#252525] cursor-pointer">
                      1.20.1
                    </option>
                    <option value="1.19.4" className="p-2 hover:bg-[#252525] cursor-pointer">
                      1.19.4
                    </option>
                    <option value="1.19.3" className="p-2 hover:bg-[#252525] cursor-pointer">
                      1.19.3
                    </option>
                    <option value="1.19.2" className="p-2 hover:bg-[#252525] cursor-pointer">
                      1.19.2
                    </option>
                    <option value="1.18.2" className="p-2 hover:bg-[#252525] cursor-pointer">
                      1.18.2
                    </option>
                    <option value="1.18.1" className="p-2 hover:bg-[#252525] cursor-pointer">
                      1.18.1
                    </option>
                    <option value="1.17.1" className="p-2 hover:bg-[#252525] cursor-pointer">
                      1.17.1
                    </option>
                    <option value="1.16.5" className="p-2 hover:bg-[#252525] cursor-pointer">
                      1.16.5
                    </option>
                  </select>
                </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Mod Card */}
            <div className="bg-[#151515] rounded-lg p-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-shrink-0">
                  <img
                    src="https://i.ibb.co/6rSJqWw/DALL-E-2024-12-24-15-20.png"
                    alt="Easy Netherite"
                    className="w-32 h-32 object-cover rounded"
                  />
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="text-xl font-play text-white">
                        Easy Netherite
                      </h2>
                      <p className="text-[#ff5e41] text-sm">By Sarti101</p>
                      <p className="text-gray-400 text-sm mt-2">
                        Convert all Netherite tools to Netherite
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <a
                        href="#"
                        className="text-[#ff5e41] hover:text-primary"
                      >
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
                    <span className="bg-primary/20 text-[#ff5e41] text-xs px-2 py-1 rounded mr-2">
                      Mods
                    </span>
                    <span className="bg-[#333] text-gray-300 text-xs px-2 py-1 rounded">
                      NeoForge
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
