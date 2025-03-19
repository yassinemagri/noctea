import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const Home = () => {
  const [data, setData] = useState([]);
  const [datamodrinth, setDataModrinth] = useState([]);
  
  const fetchGames = async () => {
    try {
      const headers = {
        Accept: "application/json",
        "x-api-key": "$2a$10$JEzg9yPd0QL4UrACvVTlg.1gBZKvitNgZuaqOX8XoI5k5RDEayT8a",
      };
      const gameId = "432"; // id minecraft
      const response = await fetch(
        `https://api.curseforge.com/v1/categories?gameId=${gameId}`,
        { method: "GET", headers }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      setData(result.data); // Update state with fetched data
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };
  useEffect(() => {
    fetchGames();
  }, []);
  const curseforge = data.map((category) => (
    <Card key={category.id} className="p-4 flex items-center space-x-4">
      <Avatar>
        <AvatarImage src={category.iconUrl} alt={category.name} />
      </Avatar>
      <CardContent className="flex flex-col gap-2">
        <h2 className="text-lg font-semibold">{category.name}</h2>
        <Button asChild>
          <a
            href={category.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit
          </a>
        </Button>
      </CardContent>
    </Card>
  ))

  const fetchMods = async () => {
    try {
      const response = await fetch("https://api.modrinth.com/v2/search?query=minecraft");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      setDataModrinth(result); // تحديث البيانات بالنتائج القادمة من Modrinth
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  useEffect(() => {
    fetchMods();
  }, []);
  console.log(datamodrinth)
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
        
      </div>
    </div>
  );
};

export default Home;
