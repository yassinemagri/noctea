import React from "react";
import { Card, CardContent } from "../ui/card";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Download, Gamepad, Monitor, Sword, Users, ExternalLink } from 'lucide-react';
import {urlFn } from "@/data/helpers";

const Discover = () => {
const games = [
    {
        id: 1,
        name: 'Java & Bedrock Edition',
        image: 'https://www.minecraft.net/content/dam/minecraftnet/games/minecraft/key-art/Homepage_Discover-our-games_MC-Vanilla-KeyArt_864x864.jpg',
        description: 'Sandbox Survival, Adventure',
        url: 'https://www.minecraft.net/en-us/about-minecraft',
        platforms: ['PC', 'Mobile', 'Console']
    },
    {
        id: 2,
        name: 'Dungeons',
        image: 'https://www.minecraft.net/content/dam/minecraftnet/games/dungeons/key-art/Homepage_Discover-our-games_MC-Dungeons-KeyArt_864x864.jpg',
        description: 'Dungeon Crawl, Action RPG',
        url: 'https://www.minecraft.net/en-us/about-dungeons',
        platforms: ['PC', 'Console']
    },
    {
        id: 3,
        name: 'Legends',
        image: 'https://www.minecraft.net/content/dam/minecraftnet/games/badger/key-art/Homepage_Discover-our-games_MC-Legends-KeyArt_864x864.jpg',
        description: 'Action RPG, Strategy',
        url: 'https://www.minecraft.net/en-us/about-dungeons',
        platforms: ['PC', 'Console']
    },
    {
        id: 4,
        name: 'Education',
        image: 'https://www.minecraft.net/content/dam/minecraftnet/games/minecraft/logos/Homepage_Discover-our-games_MC-Education-KeyArt_864x864.jpg',
        description: 'Education, Sandbox Survival, Adventure',
        url: 'https://www.minecraft.net/en-us/about-dungeons',
        platforms: ['PC', 'Mobile']
    },
] 

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-6 px-4 sm:px-0">Discover Minecraft Games</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-0">
        {games.map((game, index) => (
          <Card
            key={index}
            className="group relative overflow-hidden border-0 bg-background aspect-square sm:aspect-[4/5] transition-all duration-300 hover:shadow-xl"
          >
            {/* Background Image with Overlay */}
            <div
              className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style={{ backgroundImage: `url(${game.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30 opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Badge */}
            <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-md text-sm font-medium text-white flex items-center gap-1.5 transition-transform duration-300 group-hover:translate-y-1">
              <Gamepad className="w-4 h-4" /> 
              {game.name}
            </div>

            <CardContent className="relative h-full p-6 flex flex-col justify-between text-white">
              {/* Content */}
              <div className="space-y-4 mt-auto">
                <h3 className="text-2xl font-bold tracking-tight group-hover:text-emerald-400 transition-colors duration-300">
                  Minecraft {game.name}
                </h3>

                {/* Platforms */}
                <div className="flex gap-2 flex-wrap">
                  {game.platforms.map((platform, i) => (
                    <span key={i} className="bg-white/20 text-xs px-2 py-1 rounded-full backdrop-blur-sm">
                      {platform}
                    </span>
                  ))}
                </div>

                {/* Type */}
                <div className="flex items-center gap-2 text-sm">
                  <Users className="h-4 w-4 text-emerald-400" />
                  <span className="text-white/80">Single-player + Multiplayer</span>
                </div>

                {/* Description */}
                <div className="text-sm text-white/80 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                  <p>{game.description}</p>
                </div>

                {/* Download Page */}
                <div className="flex gap-3 pt-2">
                  <div className="w-full">
                    <Button
                      variant="outline"
                      className="w-full bg-emerald-500/20 border-emerald-500/50 text-white hover:bg-emerald-500/30 hover:text-white transition-all duration-300 group/btn"
                      target="_blank"
                      onClick={()=> urlFn(game.url)}
                    >
                      <Download className="h-4 w-4 mr-2 transition-transform group-hover/btn:translate-y-0.5" />
                      Download
                    </Button>
                  </div>
                  <Link to={game.url} className="shrink-0">
                    <Button
                      variant="outline"
                      size="icon"
                      className="bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white transition-all duration-300"
                      target="_blank"
                      aria-label={`Learn more about Minecraft ${game.name}`}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
            
            {/* Hover overlay for better UX */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-emerald-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Discover;
