import { ExternalLink, X, QrCode, Download, Check, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { format } from "date-fns"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { useEffect, useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Progress } from "@/components/ui/progress"
import { urlFn, formatNumber } from "@/data/helpers"
import QRCode from "react-qr-code"

export default function DownloadDialog({ mod, open, onOpenChange }) {
  const [modDetails, setModDetails] = useState(null)
  const [selectedVersion, setSelectedVersion] = useState("")
  const [selectedLoader, setSelectedLoader] = useState("forge")
  const [isDownloading, setIsDownloading] = useState(false)
  const [downloadProgress, setDownloadProgress] = useState(0)
  const [isQRCode, setIsQRCode] = useState(false)

  const downloadUrl =
    mod.latestFiles[0].downloadUrl ??
    `https://www.curseforge.com/api/v1/mods/${mod.id}/files/${mod.mainFileId}/download`

  useEffect(() => {
    if (!open) {
      setIsDownloading(false)
      setDownloadProgress(0)
      setIsQRCode(false)
    }
  }, [open])

  useEffect(() => {
    if (mod?.latestFiles?.length > 0) {
      const latest = mod.latestFiles[0]
      setModDetails(latest)
      setSelectedVersion(latest.gameVersions?.[0] ?? "")
      setSelectedLoader("forge")
    }
  }, [mod])

  const handleDownload = () => {
    setIsDownloading(true)
    urlFn(downloadUrl)

    let progress = 0
    const interval = setInterval(() => {
      progress += Math.random() * 10
      if (progress >= 100) {
        progress = 100
        clearInterval(interval)
        setTimeout(() => setIsDownloading(false), 500)
      }
      setDownloadProgress(progress)
    }, 200)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-zinc-900 border-zinc-800 text-white p-0 sm:max-w-md">
        <DialogHeader className="px-6 pt-6 pb-2">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-xl font-medium flex items-center gap-2">
              Download
              {mod?.name && <span className="text-violet-400 font-normal text-sm">({mod.name})</span>}
            </DialogTitle>
          </div>
          <DialogDescription className="text-zinc-400 text-xs">
            Select version and mod loader to download
          </DialogDescription>
        </DialogHeader>

        <div className="px-6 py-3 relative">
          <div className="flex flex-col sm:flex-row gap-2 items-center mb-4">
            <Select value={selectedVersion} onValueChange={setSelectedVersion}>
              <SelectTrigger className="w-full bg-zinc-800 border-zinc-700 focus:ring-violet-500">
                <SelectValue placeholder="Select Game Version" />
              </SelectTrigger>
              <SelectContent className="bg-zinc-800 border-zinc-700">
                {modDetails?.gameVersions?.map((version) => (
                  <SelectItem
                    key={version}
                    value={version}
                    className="text-white hover:bg-zinc-700 focus:bg-violet-500 data-[selected]:bg-violet-500 data-[selected]:text-white"
                  >
                    {version}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedLoader} onValueChange={setSelectedLoader}>
              <SelectTrigger className="w-full bg-zinc-800 border-zinc-700 focus:ring-violet-500">
                <SelectValue placeholder="Select Mod Loader" />
              </SelectTrigger>
              <SelectContent className="bg-zinc-800 border-zinc-700">
                {["forge", "fabric", "quilt"].map((loader) => (
                  <SelectItem
                    key={loader}
                    value={loader}
                    className="text-white hover:bg-zinc-700 focus:bg-violet-500 data-[selected]:bg-violet-500 data-[selected]:text-white"
                  >
                    {loader.charAt(0).toUpperCase() + loader.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <div className="flex gap-1">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-10 w-10 bg-transparent border-zinc-700 hover:bg-zinc-800"
                      onClick={() => setIsQRCode(!isQRCode)}
                    >
                      <QrCode size={16} />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="bottom" className="bg-zinc-800 text-white border-zinc-700">
                    <p>Show QR Code</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-10 w-10 bg-transparent border-zinc-700 hover:bg-zinc-800"
                      onClick={() => window.open(downloadUrl, "_blank")}
                    >
                      <ExternalLink size={16} />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="bottom" className="bg-zinc-800 text-white border-zinc-700">
                    <p>Open in browser</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>

          {/* QR Code Display */}
          {isQRCode && (
            <div className="flex justify-center mt-3 relative">
              <div className="bg-white p-3 rounded-md shadow-md relative">
                <QRCode value={downloadUrl} size={160} />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute -top-3 -right-8 bg-zinc-800 text-white border border-zinc-600 hover:bg-zinc-700"
                  onClick={() => setIsQRCode(false)}
                >
                  <X size={14} />
                </Button>
              </div>
            </div>
          )}

          <div className="bg-zinc-800 p-4 rounded-md border border-zinc-700 mt-4 hover:border-zinc-600">
            <div className="flex justify-between items-center">
              <div className="text-sm font-medium truncate max-w-[70%]">
                {modDetails?.fileName || "mod-file-name.jar"}
              </div>
              <Badge variant="outline" className="bg-violet-500/20 text-violet-300 border-violet-500/30">
                Latest
              </Badge>
            </div>

            <div className="flex justify-between items-center mt-3">
              <div className="flex items-center gap-2 flex-wrap">
                {modDetails?.gameVersions?.map((vers) => (
                  <Badge key={vers} variant="secondary" className="bg-zinc-700 text-zinc-300">
                    {vers}
                  </Badge>
                ))}
                <Badge variant="outline" className="bg-transparent border-zinc-600 text-zinc-400">
                  {selectedLoader || "Forge"}
                </Badge>
              </div>
              <div className="text-xs text-zinc-400">
                {modDetails?.fileDate
                  ? format(new Date(modDetails.fileDate), "MMM dd, yyyy")
                  : format(new Date(), "MMM dd, yyyy")}
              </div>
            </div>

            {(modDetails?.downloadCount || modDetails?.fileSize) && (
              <div className="flex items-center gap-4 mt-3 text-xs text-zinc-400">
                {modDetails.downloadCount && (
                  <div className="flex items-center gap-1">
                    <Download size={12} />
                    {new Intl.NumberFormat().format(modDetails.downloadCount)} downloads
                  </div>
                )}
                {modDetails.fileSize && <div>{modDetails.fileSize}</div>}
              </div>
            )}
          </div>

          {isDownloading && (
            <div className="mt-4">
              <div className="flex justify-between items-center mb-1 text-xs">
                <span>Downloading...</span>
                <span>{Math.round(downloadProgress)}%</span>
              </div>
              <Progress value={downloadProgress} className="h-2 bg-zinc-700" />
            </div>
          )}
        </div>

        <DialogFooter className="px-6 py-4 bg-zinc-950/50 border-t border-zinc-800 flex justify-between">
          <div className="flex items-center text-xs text-zinc-400">
            <Info size={12} className="mr-1" />
            Always backup your world before installing mods
          </div>
          <Button
            className={`bg-violet-600 hover:bg-violet-500 text-white border-none ${isDownloading ? "opacity-50 pointer-events-none" : ""}`}
            onClick={handleDownload}
            disabled={isDownloading}
          >
            {isDownloading ? (
              <>Downloading...</>
            ) : downloadProgress === 100 ? (
              <>
                <Check className="mr-1 h-4 w-4" /> Downloaded
              </>
            ) : (
              <>
                <Download className="mr-1 h-4 w-4" /> Download File
              </>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
