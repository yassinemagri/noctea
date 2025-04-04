import React from 'react';
import {RouterProvider,createBrowserRouter,createRoutesFromElements,Route } from 'react-router-dom';
import Layout from "./layouts/Layout";
import Home,{ loader as gamesLoader } from "./pages/Home";
import Mods,{loader as modsLoader} from "@/pages/mods/Mods";
import ModDetails,{loader as modDetailsLoader} from "@/pages/mods/ModDetails";
import Worlds from "./pages/Worlds"
import ResourcePacks from "./pages/ResourcePacks"
const App = () => {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>} loader={gamesLoader}/>
      <Route path='/mods' element={<Mods />} loader={modsLoader} />
      <Route path='/mods/:id' element={<ModDetails />} loader={modDetailsLoader}/>
    </Route>
  ))
  return (
    <RouterProvider router={router}/>
  )
}

export default App