"use client"

import type React from "react"
import { useState, useRef } from "react"
import { Upload, Check, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface UploadButtonProps {
  onUploadComplete: (url: string) => void
}

export function UploadButton({ onUploadComplete }: UploadButtonProps) {
  const [isUploading, setIsUploading] = useState(false)
  const [uploadStatus, setUploadStatus] = useState<"idle" | "success" | "error">("idle")
  const [dragActive, setDragActive] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleFileUpload = async (files: File[]) => {
    if (!files.length) return

    const file = files[0]

    // Validate file type
    if (!file.type.startsWith("image/")) {
      setUploadStatus("error")
      setTimeout(() => setUploadStatus("idle"), 3000)
      return
    }

    // Validate file size (4MB)
    if (file.size > 4 * 1024 * 1024) {
      setUploadStatus("error")
      setTimeout(() => setUploadStatus("idle"), 3000)
      return
    }

    setIsUploading(true)
    setUploadStatus("idle")

    try {
      // Simulate upload delay
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Create blob URL for the uploaded file
      const blobUrl = URL.createObjectURL(file)

      onUploadComplete(blobUrl)
      setUploadStatus("success")
      setTimeout(() => setUploadStatus("idle"), 2000)
    } catch (error) {
      console.error("Upload failed:", error)
      setUploadStatus("error")
      setTimeout(() => setUploadStatus("idle"), 3000)
    } finally {
      setIsUploading(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    if (files.length > 0) {
      handleFileUpload(files)
    }
    // Reset input value to allow same file upload
    e.target.value = ""
  }

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    const files = Array.from(e.dataTransfer.files)
    if (files.length > 0) {
      handleFileUpload(files)
    }
  }

  const getButtonContent = () => {
    if (isUploading) {
      return (
        <>
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
          Uploading...
        </>
      )
    }

    if (uploadStatus === "success") {
      return (
        <>
          <Check className="h-4 w-4 mr-2" />
          Uploaded!
        </>
      )
    }

    if (uploadStatus === "error") {
      return (
        <>
          <AlertCircle className="h-4 w-4 mr-2" />
          Upload Failed
        </>
      )
    }

    return (
      <>
        <Upload className="h-4 w-4 mr-2" />
        Upload Image
      </>
    )
  }

  const getButtonClass = () => {
    if (uploadStatus === "success") {
      return "bg-green-600 hover:bg-green-700"
    }
    if (uploadStatus === "error") {
      return "bg-red-600 hover:bg-red-700"
    }
    return "bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600"
  }

  return (
    <div className="space-y-2">
      {/* Drag and Drop Area */}
      <div
        className={`relative border-2 border-dashed rounded-lg p-6 transition-colors ${
          dragActive
            ? "border-purple-400 bg-purple-50 dark:bg-purple-500/10"
            : "border-purple-200 dark:border-purple-500/30 hover:border-purple-300 dark:hover:border-purple-400/50"
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <div className="text-center">
          <Button
            type="button"
            className={`w-full ${getButtonClass()}`}
            onClick={() => inputRef.current?.click()}
            disabled={isUploading}
          >
            {getButtonContent()}
          </Button>
          <p className="text-sm text-slate-500 dark:text-purple-400/70 mt-2">
            {dragActive ? "Drop your image here" : "Click to upload or drag & drop"}
          </p>
          <p className="text-xs text-slate-400 dark:text-purple-400/50 mt-1">PNG, JPG, GIF up to 4MB</p>
        </div>
        <input
          type="file"
          ref={inputRef}
          className="hidden"
          onChange={handleInputChange}
          accept="image/*"
          disabled={isUploading}
        />
      </div>
    </div>
  )
}
