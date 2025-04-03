import React from "react";
import { Card, CardContent } from "../ui/card";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Download, Gamepad, Monitor, Sword } from "lucide-react";

const Discover = () => {
const games = [
    {
        id: 1,
        name: 'Java & Bedrock Edition',
        image: 'https://www.minecraft.net/content/dam/minecraftnet/games/minecraft/key-art/Homepage_Discover-our-games_MC-Vanilla-KeyArt_864x864.jpg',
        description: 'Sandbox Survival, Adventure',
        url: 'https://www.minecraft.net/en-us/about-minecraft'
        
    },
    {
        id: 2,
        name: 'Dungeons',
        image: 'https://www.minecraft.net/content/dam/minecraftnet/games/dungeons/key-art/Homepage_Discover-our-games_MC-Dungeons-KeyArt_864x864.jpg',
        description: 'Dungeon Crawl, Action RPG',
        url: 'https://www.minecraft.net/en-us/about-dungeons'
    },
    {
        id: 3,
        name: 'Legends',
        image: 'https://www.minecraft.net/content/dam/minecraftnet/games/badger/key-art/Homepage_Discover-our-games_MC-Legends-KeyArt_864x864.jpg',
        description: 'Action RPG, Strategy',
        url: 'https://www.minecraft.net/en-us/about-dungeons'
    },
    {
        id: 4,
        name: 'Education',
        image: 'https://www.minecraft.net/content/dam/minecraftnet/games/minecraft/logos/Homepage_Discover-our-games_MC-Education-KeyArt_864x864.jpg',
        description: 'Education, Sandbox Survival, Adventure',
        url: 'https://www.minecraft.net/en-us/about-dungeons'
    },
   
    
] 
  return (
    <div className="grid grid-cols-[1fr_1fr_1fr_1fr] gap-x-[33px] gap-y-0 max-md:grid-cols-1 max-md:grid-rows-[auto_3fr] max-md:gap-y-[33px]">
      {games.map((game, index) => (
        <Card
          key={index}
          className="group relative overflow-hidden border-0 bg-background aspect-[4/5] md:aspect-[3/4]"
        >
          {/* Background Image with Overlay */}
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
            style={{ backgroundImage: `url(${game.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30 " />
          </div>

          <CardContent className="relative h-full p-6 flex flex-col justify-between text-white">
            {/* game name */}
            <div className="absolute flex items-center justify-center top-4 left-4 bg-white/10 backdrop-blur-sm px-4 py-1 rounded-sm text-sm font-medium">
            <Gamepad className="w-5 h-auto mx-1"/> 
            {game.name}
            </div>

            {/* Content */}
            <div className="space-y-4 mt-auto">
              <h3 className="text-2xl font-semibold">Minecraft {game.name}</h3>

              {/* Type */}
              <div className="flex gap-4 flex-wrap">
                Single-player + Multiplayer
              </div>

              {/* Details */}
              <div className="flex items-center gap-4 text-sm text-white/80">
                <div className="flex items-center gap-1">
                  <Sword className="h-4 w-4" />
                </div>
                <div className="flex items-center gap-1">
                  <p>{game.description}</p>
                </div>
              </div>

              {/* CTA */}
              <Link to={game.url}>
                <Button
                  variant="link"
                  className="p-0 h-auto font-semibold group/btn text-white hover:text-white/90 cursor-pointer"
                  target="_blank"
                >
                  <Download className="h-4 w-4 ml-1 transition-transform group-hover/btn:translate-x-1" />
                  Download
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Discover;
