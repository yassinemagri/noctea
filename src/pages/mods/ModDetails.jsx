import React from 'react';
import {getMod,getFileByModId} from "@/data/api"
import { useLoaderData } from 'react-router-dom';

export async function loader({params}) {
    const {id} = params
    const modDetails = await getFileByModId(id,6024559)
    // const modDetails = await getMod(id)
    return modDetails
}
const ModDetails = () => {
    'https://www.curseforge.com/api/v1/mods/ModId/files/fileId/download'
    const modDetails = useLoaderData()
    console.log(modDetails)
  return (
    <div>ModDetails</div>
  )
}

export default ModDetails