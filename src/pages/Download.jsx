"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Download, Clock, AlertCircle, CheckCircle2, RefreshCw, ArrowLeft, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Announcement } from "./announcement"
import { cn } from "@/lib/utils"


export function DownloadPage({
  modName = "OptiFine HD",
  modVersion = "1.21.5",
  fileSize = "4.2 MB",
  fileName = "OptiFine_1.21.5_HD_U_I7.jar",
  downloadUrl = "#download-link",
  thumbnailUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr5_LvyfkDIfRwatYAQn91En5BtnqzI0zLzA&s",
  onBack,
}) {
  const [countdown, setCountdown] = useState(3)
  const [downloadState, setDownloadState] = useState("idle")
  const [errorMessage, setErrorMessage] = useState("")

  // Start countdown when component mounts
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

    // Simulate download with 80% success rate
    setTimeout(() => {
      const success = Math.random() > 0.2 // 80% success rate for demo

      if (success) {
        setDownloadState("success")
        // Actual download would happen here
        try {
          // For demo purposes, we'll just open the URL in a new tab
          // In a real app, you'd use a proper download method
          window.open(downloadUrl, "_blank")
        } catch (error) {
          console.error("Download failed:", error)
          setDownloadState("error")
          setErrorMessage("Failed to open download link")
        }
      } else {
        setDownloadState("error")
        setErrorMessage("Download failed. Server might be busy. Please try again.")
      }
    }, 1500)
  }

  const tryAgain = () => {
    startCountdown()
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex flex-col">
      {/* Header with back button */}
      <header className="border-b border-zinc-800 p-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Button variant="ghost" size="sm" className="text-zinc-400 hover:text-white" onClick={onBack}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Mods
          </Button>

          <div className="flex items-center gap-2">
            <Badge variant="outline" className="bg-zinc-800 text-zinc-300 border-zinc-700">
              Minecraft {modVersion}
            </Badge>
            <Badge variant="outline" className="bg-violet-900/30 text-violet-300 border-violet-700">
              {fileSize}
            </Badge>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 flex flex-col items-center justify-center p-4">
        <div className="max-w-md w-full bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden shadow-xl">
          {/* Mod info header */}
          <div className="p-6 border-b border-zinc-800 flex items-center gap-4">
            <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-zinc-800 flex-shrink-0">
              {thumbnailUrl ? (
                <img src={thumbnailUrl || "/placeholder.svg"} alt={modName} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-violet-900/30">
                  <Download className="h-8 w-8 text-violet-400" />
                </div>
              )}
            </div>

            <div>
              <h1 className="text-xl font-bold text-white">{modName}</h1>
              <p className="text-sm text-zinc-400">{fileName}</p>
            </div>
          </div>

          {/* Download status */}
          <div className="p-6">
            <div className="mb-6">
              {downloadState === "idle" || downloadState === "counting" ? (
                <div className="text-center">
                  <div className="mb-4 flex items-center justify-center">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1 }}
                    >
                      <Clock className="h-12 w-12 text-violet-400" />
                    </motion.div>
                  </div>
                  <h2 className="text-lg font-medium mb-1">Your download will begin in</h2>
                  <div className="text-3xl font-bold text-violet-400 mb-4">{countdown} seconds</div>
                  <Progress value={((3 - countdown) / 3) * 100} className="h-2 bg-zinc-800">
                    <div
                      className="h-full bg-gradient-to-r from-violet-600 to-violet-400 rounded-full transition-all"
                      style={{ width: `${((3 - countdown) / 3) * 100}%` }}
                    />
                  </Progress>
                </div>
              ) : downloadState === "downloading" ? (
                <div className="text-center">
                  <div className="mb-4 flex items-center justify-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1, ease: "linear" }}
                    >
                      <Download className="h-12 w-12 text-violet-400" />
                    </motion.div>
                  </div>
                  <h2 className="text-lg font-medium mb-4">Preparing your download...</h2>
                  <Progress value={undefined} className="h-2 bg-zinc-800">
                    <div className="h-full bg-gradient-to-r from-violet-600 to-violet-400 rounded-full animate-pulse" />
                  </Progress>
                </div>
              ) : downloadState === "success" ? (
                <div className="text-center">
                  <div className="mb-4 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 10 }}
                    >
                      <CheckCircle2 className="h-12 w-12 text-emerald-400" />
                    </motion.div>
                  </div>
                  <h2 className="text-lg font-medium mb-2">Download started!</h2>
                  <p className="text-sm text-zinc-400 mb-4">
                    If your download doesn't start automatically, click the button below.
                  </p>
                </div>
              ) : (
                <div className="text-center">
                  <div className="mb-4 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 10 }}
                    >
                      <AlertCircle className="h-12 w-12 text-red-400" />
                    </motion.div>
                  </div>
                  <h2 className="text-lg font-medium mb-2">Download failed</h2>
                  <p className="text-sm text-zinc-400 mb-4">
                    {errorMessage || "Something went wrong with your download. Please try again."}
                  </p>
                </div>
              )}
            </div>

            <div className="flex flex-col gap-2">
              {downloadState === "error" ? (
                <Button className="bg-violet-600 hover:bg-violet-700 text-white" onClick={tryAgain}>
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Try Again
                </Button>
              ) : downloadState === "success" ? (
                <Button
                  className="bg-violet-600 hover:bg-violet-700 text-white"
                  onClick={() => window.open(downloadUrl, "_blank")}
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Again
                </Button>
              ) : (
                <Button
                  className={cn(
                    "bg-zinc-700 text-zinc-300",
                    downloadState === "idle" && "hover:bg-zinc-600",
                    downloadState === "counting" && "hover:bg-violet-700",
                  )}
                  disabled={downloadState !== "idle" && downloadState !== "counting"}
                  onClick={startCountdown}
                >
                  <Clock className="mr-2 h-4 w-4" />
                  {downloadState === "counting" ? `Wait (${countdown}s)` : "Start Download Now"}
                </Button>
              )}

              <Button
                variant="outline"
                className="border-zinc-700 bg-zinc-800 hover:bg-zinc-700 text-zinc-300"
                onClick={() => window.open(downloadUrl, "_blank")}
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Direct Download Link
              </Button>
            </div>
          </div>
        </div>

        {/* Safety notice */}
        <div className="mt-6 max-w-md w-full">
          <Announcement
            id="safety-notice"
            title="Safety Notice:"
            message="Always scan downloaded files with antivirus software and backup your world before installing mods."
            type="warning"
            dismissible={false}
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800 p-4 text-center text-sm text-zinc-500">
        <div className="max-w-4xl mx-auto">
          <p>By downloading, you agree to our Terms of Service and Privacy Policy.</p>
        </div>
      </footer>
    </div>
  )
}

// Example usage component
export default function DownloadPageExample() {
  return (
    <DownloadPage
      modName="OptiFine HD"
      modVersion="1.21.5"
      fileSize="4.2 MB"
      fileName="OptiFine_1.21.5_HD_U_I7.jar"
      downloadUrl="#download-link"
      onBack={() => console.log("Back button clicked")}
    />
  )
}
