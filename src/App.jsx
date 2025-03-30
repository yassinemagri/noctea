import React from 'react'
import { RouterProvider,createBrowserRouter,createRoutesFromElements,Route } from 'react-router-dom'
import Layout from "./layouts/Layout"
import Home from "./pages/Home"
import Mods from "./components/JavaEdition/Mods"
import Worlds from "./components/JavaEdition/Worlds"
import ResourcePacks from "./components/JavaEdition/ResourcePacks"
import { loader as gamesLoader } from './pages/Home'
const App = () => {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>} loader={gamesLoader}/>
      <Route path="mods" element={<Mods/>} loader={gamesLoader}/>
      <Route path="worlds" element={<Worlds />} loader={gamesLoader}/>
      <Route path="resource packs" element={<ResourcePacks/>} loader={gamesLoader}/>
    </Route>
  ))
  return (
    <RouterProvider router={router}/>
  )
}

export default App