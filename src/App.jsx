import React from 'react'
import {RouterProvider,createBrowserRouter,createRoutesFromElements,Route } from 'react-router-dom'
import Layout from "./layouts/Layout"
import Home from "./pages/Home"
import Mods from "@/pages/Mods"
import Worlds from "./pages/Worlds"
import ResourcePacks from "./pages/ResourcePacks"
import { loader as gamesLoader } from './pages/Home'
const App = () => {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>} loader={gamesLoader}/>
    </Route>
  ))
  return (
    <RouterProvider router={router}/>
  )
}

export default App