import { useState } from "react";
import { Button } from "./components/ui/button";
import { Route } from "react-router-dom";

function App() {
  const pages = [
    {
      id: "1",
      page_name: "Mods",
      page_url: "mods",
    },
    {
      id: "2",
      page_name: "Worlds",
      page_url: "worlds",
    },
    {
      id: "3",
      page_name: "ResourcePacks",
      page_url: "resource-packs",
    },
    {
      id: "4",
      page_name: "Shaders",
      page_url: "shaders",
    },
  ];
  
  return (
    <div className="flex">

      {/* 
            - galt nkhalik lik tstaf dyal files lik
      Minecraft Pc:         mcecraft.com/java-edition
      Minecraft telePhone:  mcecraft.com/bedrock
      example ila khatrina mode d'pc mcecraft.com/java-edition/mods/mod-name 
      */}
      {/* 
        <Route path="/shaders" element={<JavaEditionShaders />} /> 
        
      */}
    </div>
  );
}

export default App;
