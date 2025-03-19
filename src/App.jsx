import React from 'react'
import { RouterProvider,createBrowserRouter,createRoutesFromElements,Route } from 'react-router-dom'
import Layout from "./layouts/Layout"
import Home from "./pages/Home"
const App = () => {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
    </Route>
  ))
  return (
    <RouterProvider router={router}/>
  )
}

export default App