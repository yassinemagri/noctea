
import { useState, useEffect } from "react"
import {getMod,getFileByModId} from "@/data/api"
import { useLoaderData } from 'react-router-dom';
import { motion } from "framer-motion"
import { Download, Clock, AlertCircle, CheckCircle2, RefreshCw, ArrowLeft, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import byteSize from 'byte-size'
import {filterGameVersion,formatNumber,downloadUrl } from "@/data/helpers";

export async function loader({params}) {
    const {id} = params
    const modDetails = await getMod(id)
    // const modDetails = await getMod(id)
    return modDetails.data
}
const ModDetails = () => {
    // 'https://www.curseforge.com/api/v1/mods/ModId/files/fileId/download'

    const modDetails = useLoaderData()
    const {fileLength,fileName,displayName,gameVersions} = modDetails.latestFiles[0]
    const {value,unit} = byteSize(fileLength)
    console.log(modDetails)

      const [countdown, setCountdown] = useState(3)
      const [downloadState, setDownloadState] = useState("idle")
      const [errorMessage, setErrorMessage] = useState("")
    

      useEffect(() => {
        startCountdown()
      }, [])
    
      const startCountdown = () => {
        setDownloadState("counting")
        setCountdown(3)
    
        const timer = setInterval(() => {
          setCountdown((prev) => {
            if (prev <= 1) {
              clearInterval(timer)
              initiateDownload()
              return 0
            }
            return prev - 1
          })
        }, 1000)
    
        return () => clearInterval(timer)
      }
    
      const initiateDownload = () => {
        setDownloadState("downloading")

        setTimeout(() => { setDownloadState("success")}, 1500)
      }
    
      const tryAgain = () => {
        startCountdown()
      }
  return (
    <div className="min-h-screen bg-deep-noctea/20 backdrop-blur-sm text-white flex flex-col">
    {/* Header with back button */}
    <header className="border-b border-violet p-4">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <Button
            variant="ghost" size="sm" className="hover:bg-violet text-white cursor-pointer"
            onClick={()=> history.back()}
        >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Mods
        </Button>

        <div className="flex items-center gap-2">
          <Badge variant="outline" className="bg-deep-noctea/80 text-zinc-300 border-violet/70">
            Minecraft {filterGameVersion(gameVersions)[1]} [{filterGameVersion(gameVersions)[0]}]
          </Badge>
          <Badge variant="outline" className="bg-violet/30 text-violet border-violet">
          {value} {unit}
          </Badge>
        </div>
      </div>
    </header>

    {/* Main content */}
    <main className="flex-1 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-deep-noctea border border-deep-noctea rounded-lg overflow-hidden shadow-xl">
        {/* Mod info header */}
        <div className="p-6 border-b border-deep-noctea flex items-center gap-4">
          <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-deep-noctea flex-shrink-0">
            {modDetails.logo.thumbnailUrl ? (
              <img src={modDetails.logo.thumbnailUrl || "/placeholder.svg"} alt={modDetails.logo.title} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-violet/30">
                <Download className="h-8 w-8 text-violet-400" />
              </div>
            )}
          </div>

          <div>
            <h1 className="text-xl font-bold text-white">{displayName.replace('.jar','')}</h1>
            <p className="text-sm text-zinc-400">{fileName}</p>
          </div>
        </div>

        {/* Download status */}
        <div className="p-6">
          <div className="mb-6">
              {modDetails.summary}
          </div>

          <div className="flex flex-col gap-2">
            {downloadState === "error" ? (
              <Button className="bg-violet hover:bg-violet/50 text-white cursor-pointer" onClick={tryAgain}>
                <RefreshCw className="mr-2 h-4 w-4" />
                Try Again
              </Button>
            ) : downloadState === "success" ? (
              <Button
                className="bg-violet hover:bg-violet/70 text-white cursor-pointer"
                onClick={() => downloadUrl(modDetails)}
              >
                <Download className="mr-2 h-4 w-4" />
                Download
              </Button>
            ) : (
              <Button
                className={cn(
                  "bg-deep-noctea text-zinc-300 cursor-pointer",
                  downloadState === "idle" && "hover:bg-deep-noctea",
                  downloadState === "counting" && "hover:bg-violet",
                )}
                disabled={downloadState !== "idle" && downloadState !== "counting"}
                onClick={startCountdown}
              >
                <Clock className="mr-2 h-4 w-4" />
                {downloadState === "counting" ? `Wait (${countdown}s)` : "Start Download Now"}
              </Button>
            )}
          </div>
        </div>
      </div>
    </main>

    {/* Footer */}
    <footer className="border-t border-violet p-4 text-center text-sm text-zinc-500">
      <div className="max-w-4xl mx-auto">
        <p>By downloading, you agree to our Terms of Service and Privacy Policy.</p>
      </div>
    </footer>
  </div>
  )
}

export default ModDetails