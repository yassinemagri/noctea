import React from 'react'
import { JavaEdition } from './JavaEdition'
import { mineCraftEndPoint } from '../api'
import { useLoaderData } from 'react-router-dom';
export async function loader() {
  const data = await mineCraftEndPoint();
  return data;
} 
const Home = () => {
  const mineCraftEndPoint = useLoaderData();
  console.log(mineCraftEndPoint)
  return (
    <div>
      <JavaEdition />
    </div>
  )
}

export default Home