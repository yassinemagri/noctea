import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import { Layout } from "./layout/Layout";
import JavaEdition from "./java-edition/JavaEdition"
import Bedrock from "./bedrock/Bedrock";
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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* ↓↓ m3arftch fen n7athom wesh ndir kol wa7d fihom layout dyalo hta tkalf↓↓ */}
          <Route path="java-edition" element={<JavaEdition />} />
          <Route path="bedrock" element={<Bedrock />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
